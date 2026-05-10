export default {
  eleventyComputed: {
    eleventyNavigation: (data) => data._.eleventyNavigation,
    iframe: (data) => data._.iframe,
  },
};
