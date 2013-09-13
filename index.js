
module.exports = previous;


/**
 * Get the previous element sibling of the given `element`
 *
 * @api public
 * @param {[HTMLElement} element
 * @return {[HTMLElement}
 */

function previous(element) {
  if (element.previousElementSibling) {
    return element.previousElementSibling;
  }

  while (element = element.previousSibling) {
    if (element.nodeType === 1) {
      return element;
    }
  }

  return null;
}
