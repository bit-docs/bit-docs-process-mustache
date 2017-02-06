var path = require("path");

/**
 * Whether the filename has mustache or handlebars extension
 *
 * @param {string} filename The filename with its extension
 * @return {booelan} True is the filename ends with `.mustache` or `.handlebars`
 */
function isMustache(filename) {
  var ext = path.extname(filename);

  return (ext === ".mustache" || ext === ".handlebars");
}

/**
 * Returns the filename without the extension
 *
 * @param {string} filename The filename with its extension
 * @return {string} The actual filename
 */
function getDocMapName(filename) {
  return path.basename(filename, path.extname(filename));
}

module.exports = function(filename, source, docMap, siteConfig, addToDocMap) {
  if (isMustache(filename)) {
    addToDocMap({
      body: source,
      type: "template",
      name: getDocMapName(filename)
    });
  }
};
