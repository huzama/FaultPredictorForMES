from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from MachineLearning import main

# Configration
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['JSON_SORT_KEYS'] = False
cors = CORS(app, resources={r"/": {"origins": "http://localhost:5000"}})

# CallBack
@app.route('/', methods=['POST', 'GET'])
@cross_origin(origin='localhost', headers=['Content- Type', 'Authorization'])
def callBackFunction():
    machineName = request.args.get('machineName')
    # Call ML here and return as dictionary
    pp = main(machineName)
    return jsonify(pp), 200

if __name__ == "__main__":
    app.run(port=5000)