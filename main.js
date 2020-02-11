function add1(para1,para2){
    let numValue1 = para1;
    let numValue2 = para2;

    console.log(numValue1 + numValue2);
}
add1(10,20);

add1("javascript","language");//javascriptlanguage
//in above function we want parameter in number
//data type but here we passed string. 

//to avoid this;

function add2(para1,para2){
    let numValue1 = para1;
    let numValue2 = para2;

    if(typeof(numValue1)=="number" && typeof(numValue2)=="number")
    {
        console.log( numValue1 + numValue2);
    }
    else{
        console.log("Input should be number");
    }
}

//passing number data type as parameter
add2(2,3);//5

//passing string data type as parameter
add2("javascript","language");//Input should be number

/* OR */

function add3(para1,para2){
    let numValue1 = para1;
    let numValue2 = para2;

    if(isNaN(numValue1)==false && isNaN(numValue2)==false)
    {
        console.log( numValue1 + numValue2);
    }
    else{
        console.log("Input should be number");
    }
}

//passing number data type as parameter
add3(2,3);//5

//passing string data type as parameter
add3("javascript","language");//Input should be number
