## Pi-DMD

Pi-DMD is web GUI for a streaming webcam / surveillance camera, created using <b><i>React.JS</i></b> via <b><i>create-react-app</i></b>. The web GUI is hosted with Firebase hosting at <b><i><a href="http://pi-dvr.firebaseapp.com">pi-dvr.firebaseapp.com</i></b></a>. which is routed to a Dynamic DNS host <a href="http://nobody.better-than.tv/"><b><i>nobody.better-than.tv</i></b></a>

The camera, which is connected to a Raspberry Pi, will use Motion, a software motion detector (see https://github.com/Motion-Project/motion), to handle its motion detection capabilities. The camera's stream can be set to any port in Motion's <i>motion.conf</i> file, located at <i>/etc/motion/motion.conf</i> by default.

Pi-DMD provides an interface to access stored images, which are generated each time motion is detected.

These images are stored locally in a folder on the Pi, whose files are monitored by a bash script (see fileMon.sh). Each time an image is added to the folder, a Python script is called to push said image to a Google Cloud Storage bucket, where the collection can be accessed by the web GUI.
