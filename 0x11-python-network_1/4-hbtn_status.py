#!/usr/bin/python3
"""Fetches https://intranet.hbtn.io/status"""

if __name__ == "__main__":
    import requests
    
    response = requests.get('https://intranet.hbtn.io/status')
    req = "Body response:\n\t- type: {}\n\t- content: {}"
    print(req.format(type(response.text), response.text))
