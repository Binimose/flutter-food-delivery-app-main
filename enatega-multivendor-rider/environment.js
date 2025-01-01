import * as Updates from "expo-updates";
import { useContext } from "react";
import ConfigurationContext from "./src/context/configuration";

const getEnvVars = (env = Updates.releaseChannel) => {
  const configuration = useContext(ConfigurationContext);

  // console.log('configuration', configuration)

  if (env === "production" || env === "staging") {
    return {
      GRAPHQL_URL: "https://enatega-multivendor.up.railway.app/graphql",
      WS_GRAPHQL_URL: "wss://enatega-multivendor.up.railway.app/graphql",
      SENTRY_DSN: configuration.riderAppSentryUrl,
      GOOGLE_MAPS_KEY: configuration.googleApiKey
    };
  }
  return {
    GRAPHQL_URL: "https://enatega-multivendor.up.railway.app/graphql",
    WS_GRAPHQL_URL: "wss://enatega-multivendor.up.railway.app/graphql",
    SENTRY_DSN: configuration.riderAppSentryUrl,
    GOOGLE_MAPS_KEY: configuration.googleApiKey
    // SENTRY_DSN:
    //   'https://e963731ba0f84e5d823a2bbe2968ea4d@o1103026.ingest.sentry.io/6135261', // [Add your own Sentry DSN link][example: https://e963731ba0f84e5d823a2bbe2968ea4d@o1103026.ingest.sentry.io/5135261]
    // GOOGLE_MAPS_KEY: 'YOUR_GOOGLE_API_KEY_HERE'
  };
};

export default getEnvVars;
