<!-- 자바스크립트 기초
2장 자바스크립트 기초 문법과 활용

    01 연산자
    증감연산자 ++ 1씩 증가, -- 1씩 감소
    == 값이 같다
    === 데이터 타입과 값이 같다
    !== 값이 같지 않다
------------------
document.write(20 + 10);  
document.write(20 - 10);  
document.write(20 * 10);  
document.write(20 / 10); 
document.write(20 % 10); 


document.write("20" + "10"); 
document.write("20" - "10"); 
document.write("20" * "10"); 
document.write("20" / "10"); 
document.write("20" % "10"); 

document.write("Elice " + "Lee"); 
-----------------------
var num = 20;

document.write(++num);
document.write(--num);
document.write(num++);
document.write(num--);
------------------
document.write(10 == 10);
document.write(10 === 10);
document.write(10 == "10");
document.write(10 === "10");

document.write(10 !== 20);

document.write(10 > 20);
document.write(10 >= 20);
document.write(10 < 20);
document.write(10 <= 20);
------------------------
document.write(10 === 10 && 20 === 30);
document.write(10 === 10 || 20=== 30);

    02 조건문
    if
    else if

var a = 20;
var b = 40;

if ( a < b ) {
    document.write("a < b");
}
------------------------------------
var a = 20;
var b = 40;
var c = 60;

if ( a > b ) { 
 document.write("a > b");
} else if ( b > c ) { 
 document.write("b > c");
} else if ( a < c ) { 
 document.write("a < c");
} else if ( b < c ) { 
 document.write("b < c");
} else { 
 document.write("모든 조건을 만족하지 않는다.");
}
--------------------------------------------
var a = 20;
var b = 40;

if ( a !== b ) {
      if (a > b) {
        document.write("a > b");
    } else {
        document.write("a < b");
    }
} else {
    document.write("a === b");
}

----------------------------------------
    03 반복문
        for 문
        while 문 참일 동안 중괄호 안의 코드 실행
        do while 문 while 조건과 관계없이, do 의 명령을 한번은 무조건 실행한다
-------------------
var num = 0;

while (num < 10) {
    document.write(num);
    num++;
}
----------------
var i = 12;

do {
    document.write(i);
    i++;
} while (i < 10);
------------
for (var i = 0; i < 10; i++) {
    document.write(2 * i);
}
----------------------
    04 자바스크립트 활용
        주사위 게임
var dice = Math.floor ( Math.random() * 6 ) + 1:
--------------------------
function rand(maxNum) {
    var dice = Math.floor(Math.random() * maxNum) + 1;
    document.write(dice);
}

rand(6);
-------------------------------------
function isPrime(n){
    var divisor = 2;
    if ( n == 1 ) {
        return false;
    }
    while (n > divisor) {
        if ( n % divisor == 0 ) {
            return false;
        } else {
            divisor++;
        }
    }
        return true;
    }
----------------------------
function reverse(str){

    var reverStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reverStr = reverStr + str.charAt(i);
    }
    return reverStr
}
console.log(reverse("Nice to meet you"));
document.write(reverse("Nice to meet you"));

----------구구단---------------
for(var n = 1; n <= 9; n++) {
    for(var i = 1; i <= 9; i++) {
        document.write(n + 'x' + i + ' = ' + (n*i));
        document.write('<br>');
    }
    
}






