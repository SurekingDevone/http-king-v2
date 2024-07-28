# HTTP-King Server

HTTP-King is a feature-rich HTTP server designed for Growtopia private servers. It offers easy configuration, reverse proxy capabilities, rate limiting, and blacklisting functionalities, all while providing a seamless user experience.

## Features

- **Reverse Proxy**: Redirects incoming requests to specified target servers.
- **Rate Limiting**: Prevents abuse by limiting the number of requests from a single IP.
- **Connection Throttling**: Limits the number of concurrent connections from a single IP.
- **Blacklisting**: Block unwanted IP addresses.
- **Express Integration**: Provides a REST API for administrative tasks.
- **Logging**: Enhanced colorful console logging for better visibility.

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


Get it here > https://github.com/SurekingDevone/http-king-v2/tree/master
