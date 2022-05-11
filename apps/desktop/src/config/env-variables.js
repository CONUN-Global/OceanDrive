const staging = {
  apiIdentifier: 'chatgenie',
  auth0Domain: 'chatgenie-development.eu.auth0.com',
  clientId: 'mXHG4YhtD2Lw4PecKLpxjRF4MRWsXxrX',
  appRedirectPage: 'inbox://app/callback',
  sentry_dns:
  'https://adb505cfb2284cbdb52fec0e728a352d@o414844.ingest.sentry.io/6143711',
};
const prod = {
  apiIdentifier: 'chatgenie',
  auth0Domain: 'chatgenie.auth0.com',
  clientId: 'XZiI7dJHZ07YeFuFD5BKK2Ex4MC4rwcR',
  appRedirectPage: 'inbox://app/callback',
  sentry_dns:
  'https://adb505cfb2284cbdb52fec0e728a352d@o414844.ingest.sentry.io/6143711',
};

module.exports = process.env.DESKTOP_ENV === 'staging' || process.env.DESKTOP_ENV === 'local' ? staging : prod;
