#!/usr/bin/python3
"""Fetches https://intranet.hbtn.io/status"""

import requests

if __name__ == "__main__":
    r = requests.get('https://intranet.hbtn.io/status')
    req = "Body response:\n\t- type: {}\n\t- content: {}\n\t- utf8 content: {}"
    print(req.format(type(r.text), r.text))
