import { Module } from '@nestjs/common';
import {
    ConfigModule,
    ConfigType,
} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import Joi from 'joi';

import databaseConfig from './config/database.config.js';
import authConfig from './config/auth.config.js';
import { AlunosModule } from './alunos/aluno.module.js';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [databaseConfig, authConfig],
            validationSchema: Joi.object({
                NODE_ENV: Joi.string()
                    .valid('development', 'production', 'test')
                    .default('development'),

                PORT: Joi.number().default(3000),

                DATABASE_URI: Joi.string().required(),

                JWT_SECRET: Joi.string().required(),
            }),
        }),

        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [databaseConfig.KEY],

            useFactory: (
                dbConfig: ConfigType<typeof databaseConfig>,
            ) => ({
                uri: dbConfig.uri,
                maxPoolSize: dbConfig.maxPoolSize,

                connectionFactory: (connection) => {
                    connection.on('connected', () => {
                        console.log(
                            `Conectado em: ${dbConfig.uri}`,
                        );

                        console.log(
                            `Pool Máximo: ${dbConfig.maxPoolSize}`,
                        );
                    });

                    return connection;
                },
            }),
        }),

        AlunosModule,
    ],
})
export class AppModule {}