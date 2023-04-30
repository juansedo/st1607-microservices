#!/bin/bash

set -e
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG
trap 'echo "\"${last_command}\" command failed with exit code $?."' EXIT

echo "[1] BUILDING CRUD"
docker build $PWD/apps/jsd-crud -t juansedo/st1607-crud:latest
docker save juansedo/st1607-crud > st1607-crud.tar
microk8s ctr image import st1607-crud.tar

echo "[1] BUILDING FRONTEND"
docker build $PWD/apps/jsd-front -t juansedo/st1607-front:latest
docker save juansedo/st1607-front > st1607-front.tar
microk8s ctr image import st1607-front.tar

rm -rf st1607-crud.tar st1607-front.tar