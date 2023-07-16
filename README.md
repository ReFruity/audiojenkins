# Audio Jenkins

This is a small utility package to help with speech recognition programmes. It can record audio from microphone into file, play recorder file into ReadbleStream and return it, or just play microphone output into ReadbleStream.

## Dependencies

- [All node-audiorecorder dependencies](https://github.com/RedKenrok/node-audiorecorder#dependencies)

## Usage

```typescript
import * as AudioJenkins from 'audiojenkins';
const audioStream = await AudioJenkins.getAudioStream({ outputFileName: 'audio.wav' });
```