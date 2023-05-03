import {
  COGNITO_CLIENT_ID,
  COGNITO_USER_POOL_ID,
  COGNITO_DOMAIN,
  AWS_DEFAULT_REGION,
  DOMAIN,
} from './constants';

const AuthConfig = {
  region: AWS_DEFAULT_REGION,
  userPoolId: COGNITO_USER_POOL_ID,
  userPoolWebClientId: COGNITO_CLIENT_ID,
  cookieStorage: {
    domain: DOMAIN,
    path: '/',
    expires: 365,
    sameSite: 'strict',
    secure: true,
  },
  oauth: {
    domain: COGNITO_DOMAIN,
    scope: [
      'aws.cognito.signin.user.admin',
      'email',
      'openid',
      'phone',
      'profile',
    ],
    redirectSignIn: 'http://localhost:18080',
    responseType: 'code',
  },
  authenticatoinFlowType: 'USER_SRP_AUTH',
  federationTarget: "COGNITO_USER_POOLS",
}

export default AuthConfig;
