import AudioRecorder from 'node-audiorecorder';
import fs from 'fs';
import stream from 'node:stream/promises';

async function start() {
  const audioRecorder = new AudioRecorder({}, console);

  audioRecorder.on('error', function (error) {
    console.error('Recording error:', error);
  });
  audioRecorder.on('end', function () {
    console.log('Recording ended.');
  });

  const audioRecorderStream = await audioRecorder.start().stream();
  const fileStream = fs.createWriteStream('samples/audio.wav');
  await stream.pipeline(audioRecorderStream, fileStream);
}

start().catch(console.error);
