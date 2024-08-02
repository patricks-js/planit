import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets";

export const env = createEnv({
  extends: [vercel()],
  server: {},
  client: {},
  shared: {},
  runtimeEnv: {},
  emptyStringAsUndefined: true
});
