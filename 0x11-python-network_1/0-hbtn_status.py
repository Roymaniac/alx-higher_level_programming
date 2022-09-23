#!/usr/bin/python3
"""Fetches https://intranet.hbtn.io/status"""

import urllib.request

with urllib.request.urlopen('https://intranet.hbtn.io/status') as response:
    html = response.read()
    req = "Body response:\n\t- type: {}\n\t- content: {}\n\t- utf8 content: {}"
    print(req.format(type(html), html, html.decode('utf-8')))
