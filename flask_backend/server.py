from flask import Flask
from flask_cors import CORS  # Import CORS
import random

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])  # Enable CORS for the entire app

@app.route('/')
def suggest_game():
    games = ["Helldivers 2", "Legend of Zelda: Tears of the Kingdom"]
    chosen_game = random.choice(games)
    return f'Why not play "{chosen_game}" today?'

if __name__ == '__main__':
    app.run(debug=True)
