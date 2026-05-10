export default {
  eleventyComputed: {
    iframe: (data) => data.eleventyNavigation.data.iframe,
    bricks: (data) => data.eleventyNavigation.data.bricks,
  },
};
