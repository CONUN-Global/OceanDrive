/* eslint-disable */
require('dotenv').config();

const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;

  if (electronPlatformName !== 'darwin') {
    return;
  }

  if (!(process.env.APPLE_ID && process.env.APPLE_ID_PASSWORD)) {
    console.warn(
      'Skipping macOS app notarization.' +
        ' Missing one or more environment vars (APPLE_ID, APPLE_ID_PASSWORD).'
    );
    return;
  }

  const appName = context.packager.appInfo.productFilename;

  return await notarize({
    appBundleId: 'inbox.chatgenie.io',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_ID_PASSWORD,
    ascProvider: process.env.APPLE_ASC_PROVIDER,
  });
};
