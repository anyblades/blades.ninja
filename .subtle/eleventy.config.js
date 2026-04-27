import baseConfig from "@anyblades/eleventy-blades/base-config";

export default function (eleventyConfig) {
  eleventyConfig.setIncludesDirectory(".subtle/_includes/");

  baseConfig(eleventyConfig);
}
