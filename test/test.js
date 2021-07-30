const dwf = require('../main');
 
describe('dirty words', function() {
    it('filter of dirty words', function() {
        
        console.log(dwf.clean(""));
        console.log(dwf.clean(" 傻逼东西"));
        console.log(dwf.clean("fucking bad! hell hello"));
        console.log(dwf.clean("他妈的"));
         console.log(dwf.clean("The Alaska Earthquake Center said on its website that it was the largest quake in the U.S. since a magnitude 8.7 quake in the Aleutians in 1965. A year before that, the magnitude 9.2 Good Friday earthquake devastated parts of Anchorage and other Alaska communities. That quake and ensuing tsunami killed 131 people from Alaska to California. The late Wednesday quake produced a lot of shaking. But the director of the Alaska Division of Homeland Security and Emergency Management said Thursday no major damage was reported anywhere in the nation’s largest state.You could imagine if that earthquake happened in Anchorage or in Los Angeles the damage that would have occurred and the loss of life and injury and property damage and all of that. But so far, so good,” said the director, Bryan Fisher.He has been with the agency for 26 years, and this was the largest quake he has experienced.I was really assuming the worst, that there was going to be widespread catastrophic damage,” Fisher said.But as calls were made to coastal communities while they were evacuating during the tsunami warning, the calls were able to go through, a good initial sign. And local officials reported they didn’t see any structural or significant damage.Given how long the ground shook, up to two minutes in some places, they expected to have broken glasses or plates and items thrown out of pantries and refrigerators.“But to not have roads collapse, not have a damaging wave from the tsunami that was generated was just incredible,” Fisher said. “It’s really a miracle.”"));
        

        const english = /^[A-Za-z0-9]*$/;

        if(english.test(" damage ")){
            console.log("right");
        }


        
    });
  });
  