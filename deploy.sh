#!/bin/bash

sudo microk8s.kubectl apply -f common/k8s/
sudo microk8s.kubectl apply -f common/k8s/db/
sudo microk8s.kubectl apply -f common/k8s/crud/
sudo microk8s.kubectl apply -f common/k8s/front/