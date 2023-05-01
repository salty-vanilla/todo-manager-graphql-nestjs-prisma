import * as dotenv from 'dotenv';

dotenv.config()

export const COGNITO_CLIENT_ID = process.env.COGNITO_CLIENT_ID;
export const COGNITO_USER_POOL_ID = process.env.COGNITO_USER_POOL_ID;
export const AWS_DEFAULT_REGION = process.env.AWS_DEFAULT_REGION;

export const AUTHORITY =
  `https://cognito-idp.${AWS_DEFAULT_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}`;
