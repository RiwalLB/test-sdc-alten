import pino, { DestinationStream, StreamEntry } from 'pino';
import pretty from 'pino-pretty';
import {
    LOG_COMBINED_FILE,
    LOG_DEBUG_FILE,
    LOG_ERROR_FILE,
    LOG_FATAL_FILE,
    LOG_TRANSLATE_TIME,
} from './resources/logs.resources';

type TPinoConf = {
    pinoHttp: {
        stream: pino.MultiStreamRes;
        level: string;
        customProps: () => {
            context: string;
        };
    };
};

export class PinoService {
    static createStreams(): TPinoConf {
        const logLevel = process.env['LOG_LEVEL'] as string;

        const createSonicBoom = (dest: string): DestinationStream =>
            pino.destination({ dest, append: true, sync: true });

        const streams = [
            { stream: createSonicBoom(LOG_COMBINED_FILE) },
            { level: 'error', stream: createSonicBoom(LOG_ERROR_FILE) },
            { level: 'debug', stream: createSonicBoom(LOG_DEBUG_FILE) },
            { level: 'fatal', stream: createSonicBoom(LOG_FATAL_FILE) },
        ] as Array<StreamEntry>;

        if (logLevel === 'debug' || logLevel === 'trace') {
            streams.push({
                stream: pretty({
                    colorize: true,
                    levelFirst: true,
                    singleLine: true,
                    translateTime: LOG_TRANSLATE_TIME,
                }),
            });
        }

        const pinoConf = {
            pinoHttp: {
                stream: pino.multistream(streams),
                level: logLevel,
                customProps: () => ({
                    context: 'HTTP',
                }),
            },
        };

        return pinoConf;
    }
}
