#!/bin/bash

sudo microk8s.kubectl apply -f common/k8s/
sudo microk8s.kubectl apply -f common/k8s/db/
sleep 4
sudo microk8s.kubectl apply -f common/k8s/crud/
sudo microk8s.kubectl apply -f common/k8s/front/