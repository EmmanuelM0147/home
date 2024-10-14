import { defineConfig } from "astro/config";
import sentry from "@sentry/astro";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [
    sentry({
      dsn: "https://e0730e67ee927bbbaa3ff84b4e4d2b96@o4508122048757760.ingest.us.sentry.io/4508122058850304",
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
    tailwind(),
    compress(),
  ],
});
