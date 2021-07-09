# W3C Website redesign - HTML prototype

## URLS
Development: https://w3c-dev.studio24.dev

## Installing

### Requirements

- Node v11.10.0
- [NPM](https://www.npmjs.com/)
- [NVM](https://github.com/creationix/nvm)
- [Deployer](https://deployer.org/docs/installation)

### Installing locally

A step-by-step set of instructions that tell you how to get your local dev environment running.

Clone repo:

````bash
git clone git@github.com:w3c/w3c-website-redesign-html.git
````

Install project dependencies:

````bash
# Switch your version of Node to the correct version for this project (see `.nvmrc`)
nvm use

# From the project root:
npm install
````

Build assets:

````bash
# From the project root:
npm run build
````

Watch for changes:

````bash
# From the project root:
npm run watch
````

## Deployment
We use [Deployer](https://deployer.org) for deployment.

The deployment clones the relevant branch to your local machine within the path

`/.deployer`  

It then runs the required build commands and then deploys the built site to the server

Deploy to development

```
nvm use
dep deploy development
```


Deploy a custom branch to development:

```
dep deploy development --branch=branch-name-to-deploy
```
