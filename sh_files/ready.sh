#!/bin/bash

cp -r pre-classifier $1 && cd $1/tf_files && rm -rf bottlenecks && rm -rf $2