function bitwise_and(bitwise_string,adder){
    var and= bitwise_string.split("&");
    var x= ["5&13"];
    var y= ["13&11"];

    for(x=0;x<y.length;x++){
        and[x]=parseInt(and[x])+adder;

    }
    return and;
}