# Audio Jenkins

This is a small utility package to help with speech recognition programmes. It can record audio from microphone into file, play recorded file into ReadbleStream and return it, or just play microphone output into ReadbleStream.

## Dependencies

- [All node-audiorecorder dependencies](https://github.com/RedKenrok/node-audiorecorder#dependencies)

## Usage

Stream microphone output in `audioStream` and in file. 

```typescript
import * as AudioJenkins from 'audiojenkins';
const audioStream = await AudioJenkins.getAudioStream(
  { 
    outputFileName: 'audio.wav',
    audioRecorderOptions: {
      silence: 0,
    }
  }
);
```

Stream audio file in `audioStream`. Yoi should not use `inputFileName` option with other options.

```typescript
import * as AudioJenkins from 'audiojenkins';
const audioStream = await AudioJenkins.getAudioStream({ inputFileName: 'audio.wav' });
```

## Development

- Make changes to audiojenkins
- Create a tarball

```bash
mkdir ~/npm-packages
npm run pack
```

- Use tarball in `package.json` in some other project

```bash
"audiojenkins": "file:~/npm-packages/audiojenkins-[version].tgz",
```