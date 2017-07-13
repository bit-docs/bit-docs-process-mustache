var path = require("path");

/**
 * @parent bit-docs-process-mustache/modules
 * @module {function} bit-docs-process-mustache/process-mustache
 *
 * @signature `processMustache(filename, source)`
 *
 * Processes a `.mustache` file and adds it as a template to the docMap.
 *
 * @param {String} filename The filename with its extension
 *
 * @param {String} source A files source
 *
 * @body
 */
module.exports = function(filename, source) {
  if (isMustache(filename)) {
    addToDocMap({
      body: source,
      type: "template",
      name: getDocMapName(filename)
    });
  }
};

/**
 * @function bit-docs-process-mustache/process-mustache.isMustache isMustache
 * 
 * Whether the filename has mustache or handlebars extension
 * 
 * @signature `isMustache(filename)`
 *
 * @param {String} filename The filename with its extension
 * 
 * @return {Boolean} True is the filename ends with `.mustache` or `.handlebars`
 */
function isMustache(filename) {
  var ext = path.extname(filename);

  return (ext === ".mustache" || ext === ".handlebars");
}

/**
 * @function bit-docs-process-mustache/process-mustache.getDocMapName getDocMapName
 * 
 * Returns the filename without the extension
 *
 * @signature `getDocMapName(filename)`
 * 
 * @param {String} filename The filename with its extension
 * 
 * @return {String} The actual filename
 */
function getDocMapName(filename) {
  return path.basename(filename, path.extname(filename));
}
