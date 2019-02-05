# jquery.commonparent.js
jQuery plugin for finding a common parent element from a set of elements

Full documentation coming soon! For now, there are notes in the code itself.

Usage:

Return the parent element that is closest to the elements in the collection

$('.element-class').commonParent();


Return all of the parents going all the way up the DOM tree

$('.element-class').commonParents();


Exclude the matched elements from the return result in case one of the elements in the collection is the parent of the rest

$('.element-class').commonParent(true);
$('.element-class').commonParents(true);

