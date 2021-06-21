from flask import Flask, request, jsonify
from flask_restful import Api
from flask_cors import CORS, cross_origin


app = Flask(__name__)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['JSON_SORT_KEYS'] = False

cors = CORS(app, resources={r"/": {"origins": "http://localhost:5000"}})


# api = Api(app)


@app.route('/', methods=['POST', 'GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def get_data():
    requested_data = request.args.get('machineName')
    print(requested_data)
    return jsonify({'statistics': [1, 2, 3, 4]}), 200


if __name__ == "__main__":
    app.run(port=5000, debug=True)