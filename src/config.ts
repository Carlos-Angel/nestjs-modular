import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  database: {
    name: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
  },
  postgresUrl: process.env.DATABASE_URL,
  postgres: {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
  },
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN,
}));
