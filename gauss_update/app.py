from flask import Flask, render_template, jsonify
import numpy as np

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/normal/loc=<int:loc>&scale=<int:scale>")
def normal(loc, scale):
    dist = np.random.normal(loc=loc, scale=scale, size=1000)
    return jsonify(list(dist))

if __name__ == "__main__":
    app.run(debug=True)
