#!/bin/bash

microk8s.kubectl delete -f common/k8s/
microk8s.kubectl delete -f common/k8s/db/
microk8s.kubectl delete -f common/k8s/crud/
microk8s.kubectl delete -f common/k8s/front/