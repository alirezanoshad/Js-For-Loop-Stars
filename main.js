//basic Number To Test The Function
let selectedNumber = 7;
//a Function That Can Repeat Srars Based On The Input Number
function SkyStars(number) {
    //first Part:Increasing Stars Started
    //for Loop Is For Adding 1 (*=*) Every Time
    for (let i = 1; i <= number; i++) {
        //defining The Star Be Like:
        let str = "*=* "; 
        //Used For Repeating The Process
        console.log(str.repeat(i)); 
    }
    //first Part:Increasing Stars Done
    //second Par:decreasing Stars started
    for (let i = number-1; number >= i ; i--) {
        //defining The Star Be Like:
        let str = "*=* "; 
        //Used For Repeating The Process
        console.log(str.repeat(i)); 
    }
    //second Par:decreasing Stars Done
}
SkyStars(selectedNumber);