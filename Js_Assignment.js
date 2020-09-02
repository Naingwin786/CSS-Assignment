function hoursAttended(attended , length ){

    if(
    (typeof attended == 'string' && typeof length == 'number' && attended.trim().length > 0) || 
    (typeof attended == 'number' && typeof length == 'string' && length.trim().length > 0)){

        attended = Number(attended);
        length = Number(length);
        if(((attended - Math.floor(attended)) ===0) && ((length - Math.floor(length)) ===0)){
        if(attended >= 0 && length >= 0 && attended <= length){
            return true;
        }
        else return false;
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
