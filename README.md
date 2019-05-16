<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Testing](#testing)
* [Usage](#usage)
* [Todo List](#todo)
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

You need to have nodejs (v11 or later) and npm (v6.7 or later)

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

6. Start the app
```npm
npm run dev
```

<!-- TESTING -->
### Testing

Run unit tests to check if you have setup correctly.
```npm
npm run test
```

<!-- USAGE EXAMPLES -->
## Usage

Access `http://localhost:{port}` to view the homepage of this project.

To login to admin dashboard, go to `http://localhost:{port}/login`. 

_Please note that at the moment there is no admin dashboard yet._


<!-- TODO -->
## Todo

1. Add seeder to store admin user info in database.
2. Create auth function to enable user login.
3. Create dashboard page for admin to see reports.



<!-- CONTACT -->
## Contact

Pisyek K. - [@pisyek](https://twitter.com/pisyek) - hi@pisyek.com

Project Link: [https://github.com/pisyek/github-explorer](https://github.com/pisyek/github-explorer)

