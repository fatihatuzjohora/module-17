
 //task-1

let burger=500;
let coke=30;
if(burger>400){
    console.log("free coke");
}
else{
    console.log(coke, "tk coke price");
}

//task-2

let BMI=39;
if(BMI<18.5){
    console.log("underweight");
}
else if(BMI>=18.5 && BMI<=24.9){
    console.log('normal');
}
else if(BMI>=25 && BMI<=29.9){
    console.log('overweight');
}
else{
    console.log("obese");
}



//task-3

let subMark=95;
if(subMark>=90 &&subMark<=100){
    console.log("A");
}
else if(subMark>=80 &&subMark<=89){
    console.log("B");
}
else if(subMark>=70 && subMark<=79){
    console.log("C");
}
else if(subMark>60 && subMark<=69){
    console.log("D");
}
else{
    console.log("F");
}
//task-4
let myMark=95;
let friendMark=85;
if(myMark>80){
    if(friendMark>80){
        console.log("lunch")
    }
    else{
        if(friendMark>=60){
            console.log("good luck");
        }
        else{
            if(friendMark>=40){
                console.log("unseen");
            }
            else{
                if(friendMark<40){
                    console.log("block");
                }
            }
        }

    }
}
else{
    console.log("sleep");
}

// task-5

let number1=500;
let nummber2=300;
if(number1>nummber2){
    console.log("result",number1*2);
}
else{
    console.log("result",number1+nummber2);
}

//ternary-
let resutl=number1>nummber2? console.log("result",number1*2): console.log("result",number1+nummber2);


// task-6

let age=9;
let ticket=800;
// let student=ticket*50/100;
// let senior=ticket*15/100;
if(age<10){
    console.log("free ticket");
}
else if(age>10 &&age<=60){
    console.log('student:',ticket*50/100);
}
else if(age>=60){
    console.log("senior:", ticket*15/100);
}

//----------------














