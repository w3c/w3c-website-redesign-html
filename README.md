# W3C Website redesign - HTML prototype

## URLS
Development: https://w3c-dev.studio24.dev

## Deployment
We use [Deployer](https://deployer.org) for deployment.

The deployment clones the relevant branch to your local machine within the path

`/.deployer`  

It then runs the required build commands and then deploys the built site to the server

Deploy to development

```
dep deploy development
```


Deploy a custom branch to development:

```
dep deploy development --branch=branch-name-to-deploy
```
