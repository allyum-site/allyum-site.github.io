from flask import Flask, request, jsonify
import os
import json

app = Flask(__name__)
USERS_FILE = 'users.json'
ACCOUNTS_DIR = 'app/account/'

# Chargement ou création du fichier d'utilisateurs
def load_users():
    if not os.path.exists(USERS_FILE):
        with open(USERS_FILE, 'w') as f:
            json.dump({}, f)
    with open(USERS_FILE, 'r') as f:
        return json.load(f)

def save_users(users):
    with open(USERS_FILE, 'w') as f:
        json.dump(users, f, indent=4)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    users = load_users()
    username = data['username']
    password = data['password']

    if username not in users:
        return jsonify({'success': False, 'message': 'Utilisateur inexistant'}), 404

    user = users[username]
    if user['banned']:
        return jsonify({'success': False, 'message': 'Vous êtes banni'}), 403
    if user['excluded']:
        return jsonify({'success': False, 'message': 'Vous êtes temporairement exclu'}), 403

    if user['password'] == password:
        return jsonify({'success': True, 'role': user['role']})
    else:
        return jsonify({'success': False, 'message': 'Mot de passe incorrect'}), 401

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    password = data['password']

    if ' ' in username:
        return jsonify({'success': False, 'message': 'Le nom ne doit pas contenir d’espace'}), 400

    users = load_users()
    if username in users:
        return jsonify({'success': False, 'message': 'Nom déjà pris'}), 400

    users[username] = {
        'password': password,
        'role': 'user',
        'banned': False,
        'excluded': False
    }
    save_users(users)

    user_folder = os.path.join(ACCOUNTS_DIR, username)
    os.makedirs(user_folder, exist_ok=True)

    return jsonify({'success': True})

@app.route('/api/admin/exclude', methods=['POST'])
def exclude_user():
    data = request.json
    target = data['username']
    users = load_users()
    if target in users:
        users[target]['excluded'] = True
        save_users(users)
        return jsonify({'success': True})
    return jsonify({'success': False, 'message': 'Utilisateur introuvable'}), 404

@app.route('/api/admin/ban', methods=['POST'])
def ban_user():
    data = request.json
    target = data['username']
    users = load_users()
    if target in users:
        users[target]['banned'] = True
        user_folder = os.path.join(ACCOUNTS_DIR, target)
        if os.path.exists(user_folder):
            os.system(f'rm -rf "{user_folder}"')
        save_users(users)
        return jsonify({'success': True})
    return jsonify({'success': False, 'message': 'Utilisateur introuvable'}), 404

if __name__ == '__main__':
    app.run(debug=True)
