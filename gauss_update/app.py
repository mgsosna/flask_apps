import numpy as np
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/normal", methods=['POST'])
def normal():

    input_dict = request.get_json()
    print(f"Contents are: {input_dict}")

    # Convert all keys to int
    for key in input_dict.keys():
        input_dict[key] = int(input_dict[key])

    return jsonify(list(np.random.normal(**input_dict).round(3)))

if __name__ == "__main__":
    app.run(debug=True)
