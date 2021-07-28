const badwfilter = require('../main');
 
describe('dirty words', function() {
    it('filter of dirty words', function() {
        
        console.log(badwfilter.clean(""));
        console.log(badwfilter.clean(" "));
        console.log(badwfilter.clean("fucking bad!"));
        console.log(badwfilter.clean("他妈的"));
        
    });
  });
  