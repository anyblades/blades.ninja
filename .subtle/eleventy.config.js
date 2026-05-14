import baseConfig from "@anyblades/eleventy-blades/base-config";
import { readFileSync } from "node:fs";
import pkg from "./package.json" with { type: "json" };
import yaml from "js-yaml";

export default function (eleventyConfig) {
  baseConfig(eleventyConfig);

  eleventyConfig.setIncludesDirectory("./.subtle/_includes/");
  eleventyConfig.addPassthroughCopy({ "./.subtle/_public/": "." });
  eleventyConfig.addPassthroughCopy("../**/*.png");
  eleventyConfig.addGlobalData("site", pkg.site);
  eleventyConfig.addFilter("split", (str, sep) => str.split(sep));

  //TODO: move to 11ty-blades?
  for (const line of readFileSync("./.gitignore", "utf8").split("\n"))
    if (line && !line.startsWith("#"))
      eleventyConfig.watchIgnores.add(`../.subtle/${line}`);

  // Virtual pages
  const pages = yaml.load(readFileSync("../pages.yml", "utf8"));
  for (const [index, data] of pages.entries()) {
    const virtualSlug = data.permalink
      ? data.permalink + "index"
      : data.iframe
        ? data.iframe
            ?.replace("https://picocss.com/", "/")
            ?.replace("/docs/", "/css/")
        : index;
    if (data.iframe) {
      data.layout = "./iframe.njk";
    }
    // console.log(data, virtualSlug);
    eleventyConfig.addTemplate("." + virtualSlug + ".md", "", data);
  }
}
