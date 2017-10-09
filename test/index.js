var assert = require('assert');

describe('App Index', function() {
  context('content', function() {
    before(function() {
        browser.url('/');
    });

    it('should say hello', function() {
        var content = $('p*=Hello').getText();
        assert.equal(content, 'Hello world!');
    });
  });
});
