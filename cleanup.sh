#!/bin/bash

microk8s.kubectl delete -f common/k8s/
microk8s.kubectl delete -f common/k8s/db/deployment-db.yaml
microk8s.kubectl delete -f common/k8s/db/service-db.yaml
microk8s.kubectl delete -f common/k8s/db/configmap-db.yaml
microk8s.kubectl delete -f common/k8s/crud/
microk8s.kubectl delete -f common/k8s/auth/
microk8s.kubectl delete -f common/k8s/map/
microk8s.kubectl delete -f common/k8s/front/