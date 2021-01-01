import pandas as pd
from flask import Flask, jsonify, request, render_template

app = Flask(__name__)

GLOBAL_LIST = []

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/array', methods=['GET', 'POST'])
def array():
    if request.method == 'GET':
        return jsonify(GLOBAL_LIST)
    else:
        print(request.get_json())
        GLOBAL_LIST.append(request.get_json())
        return jsonify("Success")

if __name__ == "__main__":
    app.run(debug=True)
