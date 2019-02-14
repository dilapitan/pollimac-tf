#!/bin/bash

cd src/classifiers/$1 && python -m scripts.label_image \
    --graph=tf_files/retrained_graph.pb  \
    --image $2
