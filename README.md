# Microservices application for Bicycles mapping

## Description

This application is a microservices application that allows to map bicycles in a city. It is composed of 4 microservices:
- **CRUD Service.** This service allows to create, read, update and delete bicycles. It is made with NodeJS and Express in the [*apps/jsd-crud*](/apps/jsd-crud/) folder.
- **Map Service.** This service retrieves bicycles locations. It is made with NodeJS and Express in the [*apps/jsd-map*](/apps/jsd-map/) folder.
- **Auth Service.** This service allows to authenticate users using OAuth methods (Google only). It is made with NodeJS and Express in the [*apps/jsd-auth*](/apps/jsd-auth/) folder.
- **Frontend Service.** This service is the web application. It is made with React and Vite in the [*apps/jsd-frontend*](/apps/jsd-frontend/) folder.

## Usage

Full project is in Javascript. Therefore, decision was to use `npm` as package manager with workspaces. If you want to deploy specific microservices or install dependencies, you can use `npm [COMMANDS] -w [SERVICE_NAME]` in the root folder.


## Deployment

This project uses Kubernetes for deploying. The [*common/k8s*](/common/k8s/) folder includes each Kubernetes configuration file (but secrets must be filled in). [*Kubernetes Ingress*](https://kubernetes.io/docs/concepts/services-networking/ingress/) is used for routing.

For simplicity in development, [*microk8s*](https://microk8s.io/) was used.


## Bash files

`build.sh` - builds the Docker images for each microservice, export them and import them in the microk8s cluster (due to microk8s uses containerd).

`deploy.sh` - runs the Kubernetes configuration files in the microk8s cluster.

`cleanup.sh` - deletes the Kubernetes configuration files in the microk8s cluster (less the database volume and the persistent volume claim).

