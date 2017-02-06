var assert = require("assert");
var processMustache = require("./process-mustache.js");

describe("bit-docs-process-mustache", function() {

  it("gets the filename correctly", function() {
    processMustache("apis.mustache", null, null, null, function(docObject) {
      assert.equal(docObject.name, "apis", "should remove the extension");
    });
  });

  it("only process mustache/handlebars files", function(done) {
    var testItems = [
      { name: "foo.js", expected: false },
      { name: "foo.md", expected: false },
      { name: "foo.mustache", expected: true },
      { name: "foo.handlebars", expected: true }
    ];

    testItems.forEach(function(item) {
      item.processed = false;

      processMustache(item.name, null, null, null, function(docObject) {
        item.processed = true;
      });
    });

    setTimeout(function() {
      testItems.forEach(function(item) {
        assert.equal(item.processed, item.expected, item.name);
      });
      done();
    }, 0);
  });

});
