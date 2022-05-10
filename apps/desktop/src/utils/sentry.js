import * as Sentry from '@sentry/electron';
import { sentry_dns } from '../config/env-variables';

export const initializeSentry = () => {
  const env = process.env.DEKSTOP_ENV === 'staging' ? 'staging' : 'production';

  Sentry.init({
    dsn: sentry_dns,
    autoSessionTracking: false,
    environment: env,
    release: `inbox-desktop@${process.env.npm_package_version}`,
    onFatalError: () => {},
  });
};
