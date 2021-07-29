const naughtywords =require('naughty-words')   
const en=require('./words/en.js')

class dirtyWordFilter{

    static allwords=[]

    constructor(){
        dirtyWordFilter.allwords=
        dirtyWordFilter.allwords.concat(en);
        for (const key in naughtywords) {
            dirtyWordFilter.allwords=
            dirtyWordFilter.allwords.concat(naughtywords[key]);
        }
    }

    clean(badwordsinput) {
        let hitwords=[];
        let badsplits=badwordsinput.split(" ");

        badsplits.forEach(badwords=>{
            for(var i=0;i<badwords.length+1;i++){
                for(var j=i;j<badwords.length+1;j++){
                    if(dirtyWordFilter.allwords.includes(badwords.substring(i, j))){
                        hitwords.push(badwords.substring(i, j));
                    }
                    if(j>10){
                        break;
                    }
                }
            }
        });

        hitwords.forEach(element => {
            badwordsinput=badwordsinput.replace(element,"**");
        });
 
        return badwordsinput;
    }

} 

module.exports=new dirtyWordFilter();