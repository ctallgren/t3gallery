// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://7e156fc7d55c2045b9ec277d90bc4764@o4506976215498753.ingest.us.sentry.io/4508092980199424",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
