import fs from "fs";
import yaml from "js-yaml";

// Load YAML directly using a relative string path
const pages = yaml.load(fs.readFileSync("../_data/pages.yml", "utf8"));
const allKeys = [...new Set(pages.flatMap((obj) => Object.keys(obj)))];
console.log("Data fields to be auto-mapped:", allKeys);

export default {
  eleventyComputed: {
    ...allKeys.reduce((acc, key) => {
      acc[key] = (data) => data._[key];
      return acc;
    }, {}),
  },
};
