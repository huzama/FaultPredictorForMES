from flask import Flask, request, jsonify
from flask_restful import Api
from flask_cors import CORS, cross_origin

# Configration
app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['JSON_SORT_KEYS'] = False
cors = CORS(app, resources={r"/": {"origins": "http://localhost:5000"}})

# CallBack
@app.route('/', methods=['POST', 'GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def callBackFunction():
    requested_data = request.args.get('machineName')
    # Call ML here and return as dictionary
    return jsonify({'statistics': [1, 2, 3, 4]}), 200

if __name__ == "__main__":
    app.run(port=5000, debug=True)