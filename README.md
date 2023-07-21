# Simple HTTP Server

This project contains a basic HTTP server application written in the Go programming language. The server can be used to handle incoming HTTP requests and serve specific static files.

## Getting Started

These instructions will help you run and develop the project on your local machine. To run the project, you will need Go language installed and a text editor.

### Prerequisites

To run this project, you need the following software components:

- Go language must be installed. You can download and follow the installation instructions from the official website: [https://golang.org/](https://golang.org/)

### Installation

To run this project on your local machine, follow these steps:

1. Clone this repository or download the ZIP file and extract it to a folder.

```
git clone https://github.com/username/simple-http-server.git
```

2. Navigate to the folder:

```
cd simple-http-server
```

3. Start the server by running the following command:

```
go run main.go
```

4. Open `http://localhost:8080` in your browser or API testing tool.

## Usage

This HTTP server handles specific requests and returns a simple response:

- For any GET or POST request to the main URL ("/"), it responds with the message "Hello, this is a GET/POST request!"

- For URL paths starting with "/static/", it serves static files. For example, you can request the "index.html" file by accessing `http://localhost:8080/static/index.html`.

## Development

The project consists of the main file "main.go," which implements the specified functionality. Changes will take effect after restarting the server.

## Contributing

If you would like to contribute to this project, we welcome pull requests. Please open an issue to discuss any significant changes before making a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions or feedback, please contact us at [ahmetimalf2@gmail.com](mailto:ahmetimalf2@gmail.com).

