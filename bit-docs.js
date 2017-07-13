var processMustache = require("./process-mustache");

/**
 * @parent plugins
 * @module {function} bit-docs-process-mustache
 * @group bit-docs-process-mustache/modules modules
 *
 * @description Process content in mustache files.
 *
 * @body
 *
 * This plugin registers onto the `processor` hook.
 * 
 * Registering the processor hook adds a processor for `.mustache` and
 * `.handlebars` files.
 * 
 * Processing a `.mustache` file, for example, will output a generated page,
 * and that `.mustache` file can do things like:
 * 
 * @codestart html
 * <h1>My Sweet Homepage</h1>
 * {{#each something}}
 * ...
 * {{/each}}
 * @codeend
 * 
 * The mustache processor is [bit-docs-process-mustache/process-mustache].
 */
module.exports = function(bitDocs) {
  bitDocs.register("processor", processMustache);
};
