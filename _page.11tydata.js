//TODO: add as "Virtual pages" feature in 11ty-blades

import fs from "fs";
import yaml from "js-yaml";

// Load YAML directly using a relative string path
const pages = yaml.load(fs.readFileSync("../_data/pages.yml", "utf8"));
const allKeys = [...new Set(pages.flatMap((obj) => Object.keys(obj)))].filter(
  (key) => key !== "permalink",
);
console.log("Data fields to be auto-mapped:", allKeys);

export default class {
  data() {
    return {
      pagination: {
        data: "pages",
        size: 1,
        alias: "_",
        addAllPagesToCollections: true,
      },
      permalink: (data) => {
        return (
          data._.permalink ??
          data._.iframe
            ?.replace("https://picocss.com/", "/")
            ?.replace("/docs/", "/css/") + "/"
        );
      },
      eleventyComputed: {
        layout: (data) => {
          return data._.iframe ? "./iframe.njk" : "./default.njk";
        },
        ...allKeys.reduce((acc, key) => {
          acc[key] = (data) => data._?.[key];
          return acc;
        }, {}),
      },
    };
  }
}
