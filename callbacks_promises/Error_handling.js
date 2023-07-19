// We won't worry about catching the syntax errors becasuse javascript is going to catch those and will stop the code from execting furter. however reference type errors are the one which we can catch in our code

try{
    // try expression
}
catch(err){
    // if there is an error, it will be found HERE!, or to handle your error
}
finally{
    // this gets executed anyway    
}





"use strict";

// catching the err

const makeError = () => {
    try{
        const name = "sudhanshu";
        name = "krishan gopal";
    }
    catch(err){
        console.error(err);
    }
}

makeError();

// making our custom error

const custom = () => {

}