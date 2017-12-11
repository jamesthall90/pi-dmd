#!/bin/bash

inotifywait -m /home/pi/Desktop/Images  -e create,moved_to |
while read path action file; do
    python upload.py $file
    echo   
    echo Watching directory for changes...
done


