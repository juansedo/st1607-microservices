#!/bin/bash

echo "[1] BUILDING CRUD"
docker build $PWD/apps/jsd-crud -t juansedo/st1607-crud:latest
docker save juansedo/st1607-crud > st1607-crud.tar
microk8s ctr image import st1607-crud.tar

echo "[1] BUILDING MAP"
docker build $PWD/apps/jsd-map -t juansedo/st1607-map:latest
docker save juansedo/st1607-map > st1607-map.tar
microk8s ctr image import st1607-map.tar

echo "[1] BUILDING AUTH"
docker build $PWD/apps/jsd-auth -t juansedo/st1607-auth:latest
docker save juansedo/st1607-auth > st1607-auth.tar
microk8s ctr image import st1607-auth.tar

echo "[1] BUILDING FRONTEND"
docker build $PWD/apps/jsd-front -t juansedo/st1607-front:latest
docker save juansedo/st1607-front > st1607-front.tar
microk8s ctr image import st1607-front.tar

rm -rf st1607-crud.tar st1607-map.tar st1607-auth.tar st1607-front.tar