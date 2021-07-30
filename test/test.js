const dwf = require('../main');
 
describe('dirty words', function() {
    it('filter of dirty words', function() {
        
        console.log(dwf.clean("hi i am jack who is tomorrow sun ?"));
        console.log(dwf.clean(" 傻逼东西"));
        console.log(dwf.clean("fucking bad! hell hello"));
        console.log(dwf.clean("他妈的"));
         console.log(dwf.clean("hello hell fucking damn"));
        

        const english = /^[A-Za-z0-9]*$/;

        if(english.test(" damage ")){
            console.log("right");
        }


        
    });
  });
  