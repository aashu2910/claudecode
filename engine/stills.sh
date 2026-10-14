#!/bin/bash
set -e;D=$1;E=$(dirname $0)
[ -f $D/timeline.json -a $D/timeline.json -nt $D/script.json ] || python3 $E/tts.py $D
python3 $E/render.py $D stills
ffmpeg -loglevel error -y -i $D/st_%02d.jpg -vf "scale=270:480,tile=8x2" $D/sheet.jpg
