
var prev = require('previous-element-sibling');
var assert = require('assert');

describe('previous-element-sibling', function () {

  before(function () {
    document.getElementById('fixture').innerHTML = [
      ' hello world',
      ' <span id=one>span1</span>',
      ' cool stuff',
      ' <span id=two>span2</span>'
    ].join('');
  });

  it('should return the previous element sibling', function () {
    var one = document.getElementById('one');
    var two = document.getElementById('two');

    assert(prev(two) === one);
  });

  it('should return null if there is no previous element', function () {
    var one = document.getElementById('one');
    assert(prev(one) === null);
  });

});
