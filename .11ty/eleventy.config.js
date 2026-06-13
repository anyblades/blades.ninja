import baseConfig from "@anyblades/eleventy-blades-base";
import { readFileSync } from "node:fs";
import YAML from "yaml";

export default async function (eleventyConfig) {
  await baseConfig(eleventyConfig);

  eleventyConfig.addFilter("split", (str, sep) => str.split(sep));

  // Virtual pages
  const pages = YAML.parse(readFileSync(eleventyConfig.directories.input + "pages.yaml", "utf8"));
  for (const [index, data] of pages.entries()) {
    const virtualSlug = data.permalink ? data.permalink + "index" : index;
    if (data.iframe) {
      data.layout = "./iframe.njk";
    }
    // console.log(data, virtualSlug);
    eleventyConfig.addTemplate("." + virtualSlug + ".md", "", data);
  }
}
