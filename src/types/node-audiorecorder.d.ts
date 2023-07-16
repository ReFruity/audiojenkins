declare module 'node-audiorecorder' {
    /// <reference types="node" />
    /// <reference types="node" />
    export = AudioRecorder;
    declare const AudioRecorder_base: typeof import("events");
    declare class AudioRecorder extends AudioRecorder_base {
        /**
         * Constructor of AudioRecord class.
         * @param {Object} options Object with optional options variables
         * @param {Object} logger Object with log, warn, and error functions
         * @returns {AudioRecorder} this
         */
        constructor(options: any, logger: any);
        _options: any;
        _logger: any;
        _childProcess: import("child_process").ChildProcessWithoutNullStreams;
        _command: {
            arguments: any[];
            options: {
                encoding: string;
                env: NodeJS.ProcessEnv;
            };
        };
        /**
         * Creates and starts the audio recording process.
         * @returns {AudioRecorder} this
         */
        start(): AudioRecorder;
        /**
         * Stops and removes the audio recording process.
         * @returns {AudioRecorder} this
         */
        stop(): AudioRecorder;
        /**
         * Get the audio stream of the recording process.
         * @returns {Readable} The stream.
         */
        stream(): Readable;
    }
}