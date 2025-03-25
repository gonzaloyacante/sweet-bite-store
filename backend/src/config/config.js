import dotenv from 'dotenv';

dotenv.config();

export const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: parseInt(process.env.PORT, 10) || 3000,
  corsOrigins: ['http://localhost:5173', 'https://sweet-bite-store.vercel.app'],
};
