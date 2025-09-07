# Simple Web Server

This project is a simple web server built with Node.js that serves three HTML pages: Home, About, and Contact. It includes basic error handling for invalid routes and has CSS styling to enhance the appearance of the pages.

## Project Structure

```
simple-web-server
├── src
│   ├── server.js          # Entry point of the application
│   └── routes
│       └── index.js      # Routing logic for serving HTML pages
├── public
│   ├── css
│   │   └── style.css      # CSS styling for the HTML pages
│   └── html
│       ├── home.html      # Home page HTML
│       ├── about.html     # About page HTML
│       └── contact.html    # Contact page HTML
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd simple-web-server
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Server

To start the server, run the following command:
```
node src/server.js
```

The server will start and listen on port 3000. You can access the following routes in your web browser:

- Home: [http://localhost:3000/home](http://localhost:3000/home)
- About: [http://localhost:3000/about](http://localhost:3000/about)
- Contact: [http://localhost:3000/contact](http://localhost:3000/contact)

### Error Handling

If you navigate to an invalid route, the server will return a custom 404 page.

### License

This project is licensed under the MIT License.