# W3C Website redesign - HTML prototype

## URLS
Development: https://w3c-dev.studio24.dev

## Installing

### Requirements

- Node v12
- [NPM](https://www.npmjs.com/)
- [NVM](https://github.com/creationix/nvm)
- [Deployer](https://deployer.org/docs/installation)

### Installing locally

A step-by-step set of instructions that tell you how to get your local dev environment running.

> [!IMPORTANT]
> This site uses a very old version of Node (v12). In order to install the packages and run the following commands on M1 Macs, you may need to switch your terminal to i386 architecture while working on this site. See https://sensidev.net/blog/nvm-node-versions-apple-silicon/

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

The deployment uses your local repo path at

`~/Sites/w3c-website-redesign-html`  
**Note:** Please ensure that you have ran the necessary build commands prior to deploying
Deploy to development

```
nvm use
dep deploy development
```


Deploy a custom branch to development:

```
dep deploy development --branch=branch-name-to-deploy
```
