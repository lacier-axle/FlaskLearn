from flask import Flask
import random

app = Flask(__name__)

@app.route('/')
def suggest_game():
    games = ["Helldivers 2", "Legend of Zelda: Tears of the Kingdom"]
    chosen_game = random.choice(games)
    return f'Why not play "{chosen_game}" today?'

if __name__ == '__main__':
    app.run(debug=True)