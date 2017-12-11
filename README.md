## Pi-DVR

Pi-DVR is web GUI for a streaming webcam / surveillance camera, created using <i>React.JS</i> via <i>create-react-app</i>. The web GUI stored on an Apache2-based web server on a Raspberry Pi, which is routed to a Dynamic DNS host <a href="http://nobody.better-than.tv/"><b><i>nobody.better-than.tv</i></b></a>

The camera, which is connected to a Raspberry Pi, will use Motion, a software motion detector (see https://github.com/Motion-Project/motion), to handle its motion detection capabilities. 

Pi-DVR provides an interface to access stored images, which are generated each time motion is detected.

These images are stored locally in a folder on the Pi, whose files are monitored by a bash script (see fileMon.sh). Each time an image is added to the folder, a Python script is called to push said image to a Google Cloud Storage bucket, where the collection can be accessed by the web GUI.
