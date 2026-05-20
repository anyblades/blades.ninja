import baseConfig from "@anyblades/eleventy-blades-base";
import { readFileSync } from "node:fs";
import YAML from "yaml";

export default function (eleventyConfig) {
  baseConfig(eleventyConfig);

  eleventyConfig.setIncludesDirectory("./.11ty/_includes/");
  eleventyConfig.addPassthroughCopy({ "./.11ty/_public/": "." });
  eleventyConfig.addPassthroughCopy("../**/*.png");
  eleventyConfig.addFilter("split", (str, sep) => str.split(sep));

  //TODO: move to 11ty-blades?
  for (const line of readFileSync("./.gitignore", "utf8").split("\n"))
    if (line && !line.startsWith("#"))
      eleventyConfig.watchIgnores.add(`../.11ty/${line}`);

  // Virtual pages
  const pages = YAML.parse(
    readFileSync(eleventyConfig.directories.input + "pages.yaml", "utf8"),
  );
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
