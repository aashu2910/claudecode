#!/bin/bash
# usage: queue.sh topicdir...  renders sequentially
for d in "$@"; do f=$(python3 -c "import json;print(json.load(open('$d/script.json'))['file'])"); (cd $d && ../../engine/final.sh . $f > final.log 2>&1); done
