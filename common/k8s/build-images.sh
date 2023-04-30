#!/bin/bash

set -e
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG
trap 'echo "\"${last_command}\" command failed with exit code $?."' EXIT

echo "[1] BUILDING CRUD"
docker build $PWD/apps/jsd-crud -t juansedo/st1607-crud
docker save juansedo/st1607-crud > st1607-crud.tar
microk8s ctr image import st1607-crud.tar

echo "[1] BUILDING FRONTEND"
docker build $PWD/apps/jsd-front -t juansedo/st1607-fe
docker save juansedo/st1607-fe > st1607-fe.tar
microk8s ctr image import st1607-fe.tar

rm -rf st1607-crud.tar st1607-fe.tar