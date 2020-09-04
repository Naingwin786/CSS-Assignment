function hoursAttended(attended , length ){

    if(typeof attended == 'string' &&  attended.trim() != "" ){
        attended = Number(attended);
    }
     else if(typeof length == 'string' &&  length.trim() != "" ){
        length = Number(length);
    }
    else{
        return false;
        
    }

        if(Number.isInteger(attended)==true && Number.isInteger(length)==true){
        if(attended >= 0 && length >= 0 && attended <= length){
            return true;
        }
        else return false;
        
    }
        else return false;
    
    


}
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
//console.log(hoursAttended("6",10) === false);
