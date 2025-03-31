const JWT_SECRET = process.env.JWT_SECRET || '';
const JWT_EXPIRY = process.env.JWT_EXPIRY || ' ';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || '';
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY || ' ';

const options = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
};

export {
  JWT_SECRET,
  JWT_EXPIRY,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
  options
};
