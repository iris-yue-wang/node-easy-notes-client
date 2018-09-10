#!/usr/bin/env bash

cd "${0%/*}"

(cd .. && docker build -t eu.gcr.io/zuhlke-kubernetes-codelab/easy-notes-client:v5 .)
gcloud docker -- push eu.gcr.io/zuhlke-kubernetes-codelab/easy-notes-client:v5
#kubectl edit deployment easy-notes-client
kubectl set image deployment/easy-notes-client easy-notes-client=eu.gcr.io/zuhlke-kubernetes-codelab/easy-notes-client:v5
kubectl get deployments