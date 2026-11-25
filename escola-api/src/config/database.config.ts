import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
    uri: process.env.DATABASE_URI,
    maxPoolSize: Number(process.env.DB_MAX_POOL_SIZE ?? 10),
}));