const naughtywords =require('naughty-words')   
const en=require('./words/en.js')
const cn=require('./words/cn.js')

//const trickywords=["dam","hello","cu","am","ass"]

const english = /^[A-Za-z0-9]*$/;


class dirtyWordFilter{

    static allwords=[]

    constructor(){
        dirtyWordFilter.allwords= dirtyWordFilter.allwords.concat(en);
        dirtyWordFilter.allwords= dirtyWordFilter.allwords.concat(cn);
        for (const key in naughtywords) {
            dirtyWordFilter.allwords=
            dirtyWordFilter.allwords.concat(naughtywords[key]);
        }
    }



     splitMulti(str, tokens){
        var tempChar = tokens[0]; // We can use the first token as a temporary join character
        for(var i = 1; i < tokens.length; i++){
            str = str.split(tokens[i]).join(tempChar);
        }
        str = str.split(tempChar);
        return str;
    }

    clean(badwordsinput) {
        let hitwords=[];
        let badsplits= this.splitMulti(badwordsinput,[" ", ".",",",":","'","\"","，","!"])   

        badsplits.forEach(badwords=>{
            if(english.test(badwords)){
                if(dirtyWordFilter.allwords.includes(badwords)){
                    hitwords.push(badwords);
                }
                
            }else{
                for(var i=0;i<badwords.length+1;i++){
                    for(var j=i;j<badwords.length+1;j++){
                        let subw=badwords.substring(i, j)
                        if(dirtyWordFilter.allwords.includes(subw)){
                            hitwords.push(badwords.substring(i, j));
                        }
                        if(j>10){
                            break;
                        }
                    }
                }

            }    
        });

        hitwords.forEach(element => {
            badwordsinput=badwordsinput.replace(element,"**");
        });

        //console.log(hitwords);
 
        return badwordsinput;
    }

} 

module.exports=new dirtyWordFilter();