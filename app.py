from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

otp_store = {}

@app.route("/send-otp", methods=["POST"])
def send_otp():
    data = request.json
    email = data["email"]

    otp = str(random.randint(100000, 999999))
    otp_store[email] = otp

    print(f"OTP for {email} is {otp}")  # (email sending replace later)

    return jsonify({"message": "OTP sent"}), 200


@app.route("/verify-otp", methods=["POST"])
def verify_otp():
    data = request.json
    email = data["email"]
    otp = data["otp"]

    if email in otp_store and otp_store[email] == otp:
        return jsonify({"message": "success"}), 200

    return jsonify({"message": "failed"}), 401


if __name__ == "__main__":
    app.run(debug=True)