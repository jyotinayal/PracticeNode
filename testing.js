var assert = require('assert');  
function add (a, b) {  
  return a + b;  
}  
var expected = add(1,5);  
assert( expected === 3, 'one plus two is three');  