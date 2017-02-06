var processMustache = require("./process-mustache");

module.exports = function(bitDocs) {
    bitDocs.register("processor", processMustache);
};
