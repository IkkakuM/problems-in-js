function telephoneCheck(number){
    if(startsWithOne(number)){
        number = number?.substring(1);
        number = number?.trim();
    }
    if(!hasTenDigits){
        console.log("it does not has 10 digits")
        return false;
    }else{
        return isCompeleteNo(number) || checkHyphens(number) || checkBracket(number) || checkSpaces(number);
    }
}

function startsWithOne(number){
    return number?.substring(0,1)==="1";
}

function isCompeleteNo(number){
    number = number.trim();
    return Number(number)!=NaN && number.length===10;
}

function hasTenDigits(number){
    let arr = number?.split('');
    let count = 0;
    for(let a in arr){
        if(Number(a)!=NaN)  count++;
        console.log(count);
    }
    return count===10;
}

function checkBracket(number){
    let f1 = number?.substring(0,1) === '(';
    let f2 = number?.substring(4,5) === ')';
    let f3 = number?.substring(number.length-5,number.length-4)==='-';
    let f4 = number?.substring(5)?.trim()?.length === 8;
    return f1 && f2 && f3 && f4;
}

function checkHyphens(number){
    let arr = number?.split("-");
    return arr[0]?.length===3 && arr[1]?.length===3 && arr[2]?.length===4;
}

function checkSpaces(number){
    let arr = number?.split(" ");
    return arr[0]?.length===3 && arr[1]?.length===3 && arr[2]?.length===4;
}

function checkMessage(number){
    let message = `[${number}] is not a valid no`;
    if(telephoneCheck(number)){
        message = `[${number}] is a valid no`;
    }
    console.log(message);
}

function checkNumber(){
     readline.question("enter a number to check and enter \q to quit: ", number=>{
        if(number!='\q'){
            checkMessage(number);
            checkNumber();
        }else{
            readline.close()
        }
    })
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let args = process.argv;
let len = args.length;
let flag = true;
if(len>2){
    for(let i=2; i<len;i++){
        checkMessage(args[i]);
    }
}else{
    checkNumber();
}

