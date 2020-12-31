import pandas as pd
from typing import List
import statsmodels.formula.api as smf
from flask import Flask, jsonify, request

from modules.input_handler import InputHandler
ih = InputHandler()

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify("test")

@app.route('/train', methods=['POST'])
def train_model():
    """
    | Takes in a JSON with x and y fields
    """
    df = pd.DataFrame(request.get_json())

    if not ih.cols_valid(df, {'x', 'y'}):
        return jsonify("Error: x or y columns missing"), 422

    mod = smf.ols("y ~ x", data=df).fit()
    return jsonify(mod.params.round(3).to_dict())

if __name__ == "__main__":
    app.run(debug=True)
