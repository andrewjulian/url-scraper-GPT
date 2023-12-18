import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://rooms.xyz/docs",
  match: "https://rooms.xyz/docs#**",
  maxPagesToCrawl: 100,
  outputFileName: "output.json",
};
