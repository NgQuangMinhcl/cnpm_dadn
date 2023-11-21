from flask import Flask, render_template, request, redirect, url_for, jsonify
from Adafruit_IO import Client, Data, MQTTClient
from flask_cors import CORS, cross_origin
from firebase_admin import credentials, initialize_app, db
import time

cred = credentials.Certificate("smart-home.json")
firebase_app = initialize_app(cred, {
    'databaseURL': 'https://smart-home-bf3e4-default-rtdb.asia-southeast1.firebasedatabase.app'
})



app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

ADAFRUIT_IO_KEY = 'aio_gmBS985KntkmPiBulIEHZiEhCNyB'
ADAFRUIT_IO_USERNAME = 'nguyenphuong09'
FEED_KEYS = ["den-phong-khach", "quat-phong-khach", "bao-thuc", "good-night", "nhiet-do", "do-am", "den-phong-ngu", "nhiet-do-phong-ngu"]

aio = Client(ADAFRUIT_IO_USERNAME, ADAFRUIT_IO_KEY)


@app.route('/<feed_key>')
@cross_origin()
def getFeed(feed_key):
    feed = aio.receive(feed_key)
    feed_values = feed.value
    return jsonify(feed_values)

@app.route('/cambien/<feed_key>/<new_status>', methods=['POST'])
@cross_origin()
def toggle_light(feed_key, new_status):
    aio.send_data(feed_key, new_status)
    save_to_database(feed_key, new_status)
    return jsonify(200)

def connected ( client ) :
    print ("Ket noi thanh cong ...")
    # client.subscribe(f"{ADAFRUIT_IO_USERNAME}/feeds/#")

def subscribe ( client , userdata , mid , granted_qos ) :
    print ("Subcribe thanh cong ...")
    
def disconnected ( client ) :
    print (" Ngat ket noi ...")
    # sys.exit (1)

def message (client_id, feed_id , payload ):
    save_to_database(feed_id, payload)



def save_to_database(feed_key, value):
        # Store the data in the Firebase Realtime Database
    timestamp = int(time.time())  # Get current timestamp

    # Create a reference to the node based on the feed ID
    ref = db.reference(feed_key + "/" + str(timestamp))

    # Push the data (value and timestamp) to the node
    ref.set(value)


if __name__ == '__main__':
    client = MQTTClient (ADAFRUIT_IO_USERNAME , ADAFRUIT_IO_KEY)
    client.on_connect = connected
    client.on_disconnect = disconnected
    client.on_message = message
    client.on_subscribe = subscribe
    client.connect ()
    for feed_key in FEED_KEYS:
        client.subscribe(feed_key)
    client.loop_background()
    app.run(debug=True, port=5001)
