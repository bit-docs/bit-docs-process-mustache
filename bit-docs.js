var processMustache = require("./process-mustache");

/**
 * @module {function} bit-docs-process-mustache
 * @parent plugins
 *
 * @description Process content in mustache files.
 *
 * @body
 *
 * TBD
 */
module.exports = function(bitDocs) {
  bitDocs.register("processor", processMustache);
};
