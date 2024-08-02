import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Omit<Config, "content"> = {
  presets: [],
  theme: {},
  plugins: [animate]
};

export default config;
