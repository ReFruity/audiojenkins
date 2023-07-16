import AudioRecorder from 'node-audiorecorder';
import fs from 'fs';
import stream from 'node:stream';

/**
 * inputFileName - relative or absolute path to input file, optional
 *
 * outputFileName - output file name with extension, this file will be placed in samples folder, optional
 *
 * audioRecorderOptions - node-audiorecorder options, optional
 *
 * [Example of audioRecorderOptions](https://github.com/RedKenrok/node-audiorecorder#constructor)
 */
export interface AudioJenkinsOptions {
  inputFileName?: string;
  outputFileName?: string;
  audioRecorderOptions?: object;
}

export async function getAudioStream(options?: AudioJenkinsOptions) {
  let inputStream: stream.Readable;

  if (options?.inputFileName === undefined) {
    const audioRecorder = new AudioRecorder(options?.audioRecorderOptions, console);

    audioRecorder.on('error', function (error) {
      console.error('Recording error:', error);
    });
    audioRecorder.on('end', function () {
      console.log('Recording ended.');
    });

    inputStream = await audioRecorder.start().stream();
  } else {
    inputStream = fs.createReadStream(options.inputFileName);
  }

  if (options?.outputFileName) {
    const fileOutputStream = fs.createWriteStream(`samples/${options.outputFileName}`);

    inputStream.pipe(fileOutputStream);
  }

  return inputStream;
}
