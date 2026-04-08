from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route("/restaurants/<postcode>")
def get_restaurants(postcode):
    url = f"https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/{postcode}"
    
    response = requests.get(url)
    data = response.json()
    
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)