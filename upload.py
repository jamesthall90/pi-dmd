import sys
import os
import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import storage
from firebase_admin import db

cred = credentials.Certificate('/home/pi/Desktop/Images/Pi-DVR-e240b3b1a4d8.json')
firebase_admin.initialize_app(cred, {
    'storageBucket': 'pi-dvr.appspot.com',
    'databaseURL': 'https://pi-dvr.firebaseio.com/'
})

# As an admin, the app has access to read and write all data, regradless of Security Rules
ref = db.reference('images')

fileName = sys.argv[1]
print fileName, ' will be uploaded to Firebase Storage'

bucket = storage.bucket()

blob = bucket.blob(fileName)

if blob.exists():
    print 'A file with this name exists, and will be overwritten.'
else:
    print 'No file with this name exists. Uploading now...'

wholeFileName = '/home/pi/Desktop/Images/%s'%(fileName)

noExtFilename = os.path.splitext(fileName)[0]

blob.upload_from_filename(wholeFileName)

if blob.exists():
    print 'The file was successfully uploaded to Firebase Storage!'
else:
    print 'The file upload was unsuccessful!'

link = blob.media_link

data = '{"%s" :"%s"}' % (noExtFilename, link)

print(data)

data_json = json.loads(data)

ref.update(data_json)

#bucket.make_public(recursive = True, future=True)
