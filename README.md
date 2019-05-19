<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Testing](#testing)
* [Usage](#usage)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

![screenshot](https://raw.githubusercontent.com/pisyek/github-explorer/master/public/img/screenshot.PNG)

This is a simple nodejs web application. It allows users to search for github repository by language and/or topic.

It is also come with admin dahsboard to see statistics of the search usage.

### Built With

This web application is built using tech stack as follows:
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [Nodejs](https://nodejs.org)
* [Express](https://expressjs.com)
* [Handlebars](https://handlebarsjs.com)
* [DataTable](https://datatables.net)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running please follow these simple steps.

### Prerequisites

You need to have nodejs (v11 or later) and npm (v6.7 or later). For database, please install MongoDB v4.0.

1. Nodejs installation doc: [here](https://nodejs.org/en/)

2. Check nodejs version
* nodejs
```sh
node -v
```

3. Check npm version 
* npm
```sh
npm -v
```

4. Download and install mongodb from [https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community).

### Installation

1. Clone the repo
```sh
git clone git@github.com:pisyek/github-explorer.git
```

2. Install NPM packages by running the command in the root folder
```sh
cd github-explorer
npm install
```

3. Clone `.env-sample` file to `.env` file
```sh
cp env-sample .env
```

4. Update your setting inside `.env` file

5. You can get github personal access token from here: [https://github.com/settings/tokens](https://github.com/settings/tokens)

6. Start you mongodb
```sh
mongod
```

7. Start the app
```npm
npm run dev
```

<!-- TESTING -->
### Testing

Run unit tests to check if you have setup correctly.
```npm
npm run test
```

Screenshot

![screenshot](https://raw.githubusercontent.com/pisyek/github-explorer/master/public/img/screenshot-test.PNG)

<!-- USAGE EXAMPLES -->
## Usage

Access `http://localhost:{port}` to view the homepage of this project.

To login to admin dashboard, go to `http://localhost:{port}/login`. 

<!-- CONTACT -->
## Contact

Pisyek K. - [@pisyek](https://twitter.com/pisyek) - hi@pisyek.com

Project Link: [https://github.com/pisyek/github-explorer](https://github.com/pisyek/github-explorer)

