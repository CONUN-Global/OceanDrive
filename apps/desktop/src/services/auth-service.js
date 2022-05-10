const Sentry = require('@sentry/electron');
const jwtDecode = require('jwt-decode');
const axios = require('axios');
const url = require('url');
const keytar = require('keytar');
const os = require('os');
const { logger } = require('../utils/logger');
const envVariables = require('../config/env-variables');

const { apiIdentifier, auth0Domain, clientId, appRedirectPage } = envVariables;

const redirectUri = appRedirectPage;

const keytarService = 'business-messenger';
const keytarAccount = os.userInfo().username;

let accessToken = null;
let profile = null;
let refreshToken = null;

function getAccessToken() {
  return accessToken;
}

function getProfile() {
  return profile;
}

async function logout() {
  await keytar.deletePassword(keytarService, keytarAccount);
  accessToken = null;
  profile = null;
  refreshToken = null;
}

function getAuthenticationURL() {
  return encodeURI(
    `https://${auth0Domain}/authorize?` +
      `audience=${apiIdentifier}&` +
      'scope=openid profile offline_access&' +
      'response_type=code&' +
      `client_id=${clientId}&` +
      `redirect_uri=${redirectUri}`
  );
}

async function refreshTokens() {
  const refreshToken = await keytar.getPassword(keytarService, keytarAccount);

  if (refreshToken) {
    const refreshOptions = {
      method: 'POST',
      url: `https://${auth0Domain}/oauth/token`,
      headers: { 'content-type': 'application/json' },
      data: {
        grant_type: 'refresh_token',
        client_id: clientId,
        refresh_token: refreshToken,
      },
    };

    try {
      const response = await axios(refreshOptions);
      accessToken = response.data.access_token;
      profile = jwtDecode(response.data.id_token);
    } catch (error) {
      logger(error);

      await logout();

      throw error;
    }
  } else {
    throw new Error('No available refresh token.');
  }
}

async function loadTokens(callbackURL) {
  const urlParts = url.parse(callbackURL, true);
  const { query } = urlParts;

  const exchangeOptions = {
    grant_type: 'authorization_code',
    client_id: clientId,
    code: query.code,
    redirect_uri: redirectUri,
  };

  const options = {
    method: 'POST',
    url: `https://${auth0Domain}/oauth/token`,
    headers: {
      'content-type': 'application/json',
    },
    data: JSON.stringify(exchangeOptions),
  };

  try {
    const response = await axios(options);

    accessToken = response.data.access_token;
    profile = jwtDecode(response.data.id_token);
    refreshToken = response.data.refresh_token;

    if (refreshToken) {
      await keytar.setPassword(keytarService, keytarAccount, refreshToken);
    }
  } catch (error) {
    logger(`load token error : ${error}`, 'error');
    await logout();

    throw error;
  }
}

function getLogOutUrl() {
  return `https://${auth0Domain}/v2/logout`;
}

module.exports = {
  getAccessToken,
  getAuthenticationURL,
  getLogOutUrl,
  getProfile,
  loadTokens,
  logout,
  refreshTokens,
};
