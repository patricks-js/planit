import sharedConfig from "@planit/tailwind";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  presets: [sharedConfig]
};

export default config;
