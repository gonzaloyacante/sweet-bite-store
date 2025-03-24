import dotenv from 'dotenv';

dotenv.config();

export const config = {
  env: process.env.NODE_ENV || 'development',
  // Solo usamos port en desarrollo
  port: process.env.NODE_ENV === 'production' ? null : process.env.PORT || 3000,
};
