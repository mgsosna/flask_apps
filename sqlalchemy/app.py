from flask import Flask, render_template, request, url_for, jsonify
from werkzeug.security import generate_password_hash, check_password_hash

from db import db

from models import User

app = Flask(__name__)
app.config['SECRET_KEY'] = "abc123"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/user_table")
def user_table():
    return render_template("user_table.html")

@app.route("/add_user", methods=['POST'])
def add_user():
    name = request.form.get('name')
    password = request.form.get('password')

    # Generate user. Hash the password so plaintext isn't saved
    new_user = User(name=name, password=generate_password_hash(password, method='sha256'))

    # Save to DB
    db.session.add(new_user)
    db.session.commit()

    return redirect(url_for('index'))

@app.route("/get_users")
def get_users():
    return jsonify(User.query.all())


if __name__ == "__main__":
    db.init_app(app)
    db.create_all(app)
    app.run(debug=True)
