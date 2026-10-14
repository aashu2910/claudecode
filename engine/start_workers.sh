#!/bin/bash
cd "$(dirname "$0")/../topics"; rmdir */.lock 2>/dev/null
for i in 1 2; do setsid nohup ../engine/worker.sh > /dev/null 2>&1 & done
