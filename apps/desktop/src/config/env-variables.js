const staging = {
  apiIdentifier: '',
  auth0Domain: '',
  clientId: '',
  appRedirectPage: 'ocean-drive://app/callback',
  sentry_dns: ''
};
const prod = {
  apiIdentifier: '',
  auth0Domain: '',
  clientId: '',
  appRedirectPage: '',
  sentry_dns: ''
};

module.exports =
  process.env.DESKTOP_ENV === 'staging' || process.env.DESKTOP_ENV === 'local'
    ? staging
    : prod;
