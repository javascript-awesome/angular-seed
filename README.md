> **IMPORTANT NOTE**: 
The skeleton was developed long time ago and is compatible with **NodeJS** up to **v0.12.4** that you can download here https://nodejs.org/en/blog/release/v0.12.4/

# angular-seed — the seed for awesome AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:


### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-seed

Clone the angular-seed repository using [git][git]:

```PowerShell
git clone https://github.com/javascript-awesome/angular-seed.git
cd angular-seed
```

If you just want to start a new project without the angular-seed commit history then you can do:

```PowerShell
git clone --depth=1 https://github.com/javascript-awesome/angular-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].

```PowerShell
npm install
```

You should find that you have one new folder in your project.

* `node_modules` - contains the npm packages for the tools we need

### Run the Application

We have preconfigured the project with a development web server webpack-dev-server and webpack builder.

To run webpack commands you can simply run hem with npm.

```PowerShell
npm run first-start
```

### Starting the app in development mode

```PowerShell
npm run dev
```

Now browse to the app at `http://localhost:8080/`


## Other grunt tasks

### Compiling the app

Application auto updated on changes in existing files. On adding new files, you would need to rerun build command.

```PowerShell
npm run dev
```

## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the dependencies by running:

```PowerShell
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

## Contact

For more information on AngularJS please check out http://angularjs.org/


[git]: http://git-scm.com/
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
