#!/bin/bash
# continuous render worker: renders any topic with an 'approved' file and no DONE yet
cd "$(dirname "$0")/../topics"
while true; do
  did=0
  for d in */; do d=${d%/}
    [ -f $d/approved ] || continue
    grep -q DONE $d/final.log 2>/dev/null && continue
    mkdir $d/.lock 2>/dev/null || continue
    f=$(python3 -c "import json;print(json.load(open('$d/script.json'))['file'])")
    (cd $d && rm -f video.mp4 && ../../engine/final.sh . $f > final.log 2>&1)
    rmdir $d/.lock; did=1
  done
  [ $did = 0 ] && sleep 20
done
