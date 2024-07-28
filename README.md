# HTTP-King Server


## Introduction
HTTP-King is a feature-rich HTTP server designed for Growtopia private servers. It offers easy configuration, reverse proxy capabilities, rate limiting, and blacklisting functionalities, all while providing a seamless user experience.

## Table of Contents

- [Introduction](#Introduction)
- [Features](#Features)
- [Requirements](#Requirements)
- [Installation](#Installation)
- [API Endpoints](#API-Endpoints)
- [Credits](#Credit)



## Features

- **Reverse Proxy**: Redirects incoming requests to specified target servers.
- **Rate Limiting**: Prevents abuse by limiting the number of requests from a single IP.
- **Connection Throttling**: Limits the number of concurrent connections from a single IP.
- **Blacklisting**: Block unwanted IP addresses.
- **Express Integration**: Provides a REST API for administrative tasks.
- **Logging**: Enhanced colorful console logging for better visibility.

## Requirements

- Node.js (version 12 or higher)
- NPM (Node Package Manager)
- A valid SSL certificate (`server.key` and `server.crt` files)
- A configuration file (`config/main.json`) with the following structure:


## Configuration

The server configuration is stored in `config/main.json`. Below is an example configuration:

```json
{
    "port": "17091",
    "ip": "127.0.0.1",
    "meta": "Server is currently initializing or re-syncing with sub servers. Please try again in a minute.",
    "cdn": "0098/516691/",
    "loginurl": "tron-login.zapto.org:444",
    "ratelimit": 100,
    "betareverseproxytarget": "https://httpbin.org",
    "throttleConnections": 100
}
```

## Installation
- git clone https://github.com/SurekingDevone/http-king-v2.git
- cd http-king-v2
- npm install

## API-Endpoints
The HTTP King v2 provides several API endpoints for managing the server's configurations and monitoring its status. Below are the available endpoints:

# GET /status
- Returns the current server status, including rate limits and blacklisted IPs.
# POST /blacklist
- Adds an IP address to the blacklist.
# POST /rate-limit
- Updates the rate limit for incoming requests.

## Credit
* [Sureking](https://github.com/SurekingDevone)
* [Tron](https://github.com/tron-ghx) (for the backend loginurl)
