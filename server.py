import requests, json
from flask import Flask, request

app = Flask(__name__)

@app.route("/")
def hello_world():
    url = 'http://freegeoip.net/json/{}'.format(request.remote_addr)
    print(url)
    r = requests.get(url)
    # j = json.loads(r.text)
    # city = j['city']

    return f"<p>hi</p>"