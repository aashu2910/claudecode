#!/bin/bash
set -e;D=$1;E=$(dirname $0);O=$D/$2
python3 $E/render.py $D full
python3 $E/audio.py $D
ffmpeg -loglevel error -y -i $D/mix_raw.wav -af loudnorm=I=-15:TP=-1.5 -ar 48000 $D/mix.wav
ffmpeg -loglevel error -y -i $D/video.mp4 -i $D/mix.wav -c:v libx264 -crf 22 -maxrate 1.2M -bufsize 2.4M -pix_fmt yuv420p -c:a aac -b:a 192k -t 59 -movflags +faststart $O
ffprobe -v error -show_entries format=duration:stream=codec_name,width,height -of csv=p=0 $O; ls -la $O
ffmpeg -loglevel error -y -i $O -vf "fps=8/59,scale=270:480,tile=8x1" -frames:v 1 $D/check.jpg
echo DONE
