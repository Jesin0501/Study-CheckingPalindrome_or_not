var a = "EYE";
var b = [];
var c = "";



for ( i=0; i< a.length;i++) {
    b.push(a[i]);
}



for ( i=0; i<a.length;i++) {
    c+=b.pop();
}


if(a===c){
    document.write(a + " is a palindrome")
} else{
    document.write(a + " is not a palindrome")
}

