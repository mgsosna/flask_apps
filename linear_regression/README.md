# Linear regression endpoint
This app takes in a JSON of x and y coordinates, trains a linear regression model, and then returns the coefficients for the model.

## Sample usage
In bash, navigate to the `linear_regression` directory and then type the following:

```bash
python app.py
```

This will start the Flask application. Then, in Python, type the following:

```python
import requests

# Create data
data = {'x': [1, 2, 3, 4, 5],
        'y': [10, 20, 30, 40, 50]}

# Send to endpoint
url = "http://127.0.0.1:5000/train"
response = requests.post(url, json=data)

print(response.json()) # {'Intercept': -0.0, 'x': 10.0}
```
