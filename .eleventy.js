const EsBuild = require('esbuild');

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src");
  
  eleventyConfig.addPassthroughCopy({
    "src/public": "/"
  });

  eleventyConfig.on('afterBuild', () => {
    EsBuild.buildSync({
      entryPoints: ["./src/scripts/index.js"],
      bundle: true,
      outfile: "_site/index.js",
    });
  })

  eleventyConfig.addShortcode('figure', (src, alt, caption) => `<figure><img src="${ src }" alt="${ alt }" ><figcaption>${ caption }</figcaption></figure>`)

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "/components",
    },
  }
}