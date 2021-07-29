const dwf = require('../main');
 
describe('dirty words', function() {
    it('filter of dirty words', function() {
        
        console.log(dwf.clean(""));
        console.log(dwf.clean(" "));
        console.log(dwf.clean("fucking bad!"));
        console.log(dwf.clean("他妈的"));
        console.log(dwf.clean("他妈的你是个小垃圾啊，what the hell"));
        
    });
  });
  