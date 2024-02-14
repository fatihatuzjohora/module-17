/**
 * 17.1 module...
 * comparison
 * 
 * bigger: >
 * less: <
 * equal: ==
 * greater than or equal: >=
 * less than or equl: <=
 * not equal: !=
 * ---------------------------
 * 
 * 
 * and: &&
 * or: ||
 * 
 * 
 * 
 * module  17_2 Introduction To Conditionals
 * 
 * 
 * 
 */

console.log(10<=10);
console.log(10 >= 10);
console.log(10 >= 100);






//------------ if --------------

/**
 * structure
 * 
 * if(condition) {       }
 *
 */
if(10<15) {
    console.log('you smile')
}




/**
 * structure if
 * 
 * 
 * 
 * if (condition) {
 * exexute code if the condition above is true
 * }
 * 
 * else {
 * exexute code if the condition is false
 * }
 * 
 */

var weight =40;
if (weight < 20) {
    console.log('i will carry it by my hand')
}
else {
   console.log ('i will rent a recksha')
}



// ---------17_4 Multiple Condition Logical Operators----------



const salary=25000;
const isbcs=true;
const height=78;
const hascar=false;



if(salary> 24000 && height>66) {

    console.log('bia yes')
}
else{
    console.log('bia no')
}



if(salary> 24000 || height>66) {

    console.log('bia borbo')
}
else{
    console.log('bia borbo no')
}

//--------------- complex condition---------

if( (salary>25000 && hascar== true) || isbcs==true ) {
    console.log('raji')
}

 if( (salary>25000 || hascar== true) && isbcs==true ) {
    console.log('raji hobe na')
}
else{

}


//-------------------------- 17_5 Multi Level If-Else If-Else Condition--------------------


const prices=5000;

if( prices>=5000) {
    // 10%discound

    const discount = prices *10/100;
    const payAmont = prices - discount;
    console.log(payAmont);
}

else if( price>=5000) {
    // 5%discound

    const discount = prices *5/100;
    const payAmont = prices - discount;
    console.log(payAmont);
}

else {
    console.log(price);
}


const age =62;
const price =500;
if(age <= 12)
{
    console.log('you can eat fore free')
}
else if (age >=60) {
    // 50%discount
    const discount=price *50/500;
    const payAmont=price - discount;
    console.log (payAmont)
}

else if (age >=50) {
    // 25%discount
    const discount=price *25/500;
    const payAmont=price - discount;
    console.log (payAmont)
}

else if (age >=40) {
    // 10%discount
    const discount=price *10/500;
    const payAmont=price - discount;
    console.log (payAmont)
}

else{
    console.log(price)
}



//=--------------------- 17_6 (Optional) Nested If-Else Condition-----------------




const money=500;

if (money>300) {
    console.log('rich')

}

else{
    if (money>100){
        console.log('gorib')
    }
    else{
        if (money>0){
            console.log('kola kha')
        }
        else{
                console.log('bondhu na')
            }
    }
    }



    /**
     * 17_7 (Advanced )If-Else Shorthand Ternary Operator
     * 
     */


    /**
     * ternary --> three parts
     * short structure
     * ? :
     * condition ? do something when true : do somthing when somthing false
     * 
     */

    const ages= 12;
    if (ages>= 18){
        console.log('vot deo')
    }
    else {
        console.log('gumaw')
    }

    // short vbe
    ages>=18? console.log('vot deo') : console.log('gumaw');


    //-------------------- 
    let tk=500;
    const isLeader=true;
    if(isLeader===true){
        tk=0
    }
    else{
        tk +=100;
    }


  tk=isLeader===true? 0: tk +100;  //short ternary structure
    console.log(tk)


    //semi-ternary

    if(isLeader===true){
        if(tk>1000){
            tk=tk/2;
        }
        else{
            tk=0;
        }
    }
    else{
        tk=tk+1000;
    }
    //--------

    tk=isLeader=== true ?
tk>1000?
tk/2 :0
: tk +1000;


///17_8 (Advanced) Logical Not Operator
!true
!!false

