/* javascript 20220118

1장 자바스크립트 소개--------------------------------------------------
01 자바스크립트 소개
    - 이미지 슬라이드 효과, 팝업 효과 등의 기능을 포함한 동적인 웹사이트 제작 시 사용
    - 활용 범위 : Iot, 하이브리드 앱, 서버 개발
02 자바스크립트의 변수
    변수: 데이터를 담는 공간
---------
var fruit;        변수 선언
fruit = "apple"         변수 초기화
var fruit = "apple";      변수 선언 및 초기화
----------
    데이터 변경
fruit = "apple" 
fruit = "banana"; 
-----------
    변수 안의 데이터 확인 방법
var fruit = "app;e";
console.log(fruit);        apple 출력된다
-------------
    변수 생성시 주의사항
    1. 변수명은 숫자로 시작할 수 없음
    2. 변수명은 최대한 자세하게 작성
    3. 의미가 불명확한 단어들의 조합은 피해야 한다

document.write()
-------------
03 자바스크립트 데이터 타입
    8가지
        1. string 문자열
        2. number 숫자
        3. function 함수
        4. array 배열
        5. object 객체 프로퍼티, 메서드, 값
        6. boolean 불린 true or false
        7. undefined 정의되지 않음, 변수 안에 데이터를 입력하지 않은 상태(데이터 없는 것)
        8. null 널 (임의로 변수 안에 빈 데이터를 삽입한 상태)
-------------1
var str1 = "Hello World";
var str2 = 'Nice to meet you';
var str3 = "She's a girl";

document.write(str1);
document.writeln(str2);
document.writeln(str3);
-----------------------2
var sum = function(num1, num2) {
    return num1 + num2;
}
document.write(sum(10, 20));

function mul(num3, num4) {
    return num3 * num4;
}
document.write(mul(3, 4));
--------------------------3
var fruit = ["Apple", "Banana"];
document.write(fruit);
document.write(fruit[0]);

fruit[0]= "Tomato";
document.write(fruit);
-------------------------------4
var student = {
    name: "Elice",
    age: 20,
    skills: ["Java", "HTML", "CSS", "JavaScript"],
    sum: function(num1, num2) {
        return num1 + num2;
    }
}
student["name"] = "park";
document.write(student.name);
document.write(student.sum(10, 20));
------------------5null
var str1;
document.write(str1);

var empty = null;
document.write(empty);
------------------------------------------------------
04 자바스크립의 프로포티와 메서드
    사용자를 위해 사전에 작성된 편의 기능
    
    문자열
        1. legth;          문자열 길이
        2. charAt(0);        문자열을 0번째 추출
        3. split("");        공백 기준으로 문자 나눈 후 배열 출력
    배열
        1. length;          데이터 개수
        2. push("딸기");    배열 뒤에 데이터 삽입
        3. unshift("레몬";    배열 앞에 삽입
        5. .pop();         배열 뒤의 데이터 제거
        6. .shift();        배열 앞의 데이터 제거
    math
        1. .abs();     절대값
        2. .ceil(0.3);     올림
        3. .floor();       내림
        4. .random();     임의의 숫자 출력
    문자를 숫자로 변환하는
        1. parseInt(:20.6");     정수 형태로 20 변환, 소수는 버리게 된다
        2. parseFloat("20.6");     실수 형태의 20.6변환
-------------------1
var str1 = "Hello World";
document.write(str1.length);
document.write(str1.charAt(0));
document.write(str1.split(" "));
-----------------------3
var str1 = "20.14";
document.write(parseInt(str1));
document.write(parseFloat(str1));
--------------4
function triangle(width, height) {
    return (width * height) / 2
}
document.write(triangle(5, 7));
-------------
var fruit = ["Apple", "Banana", "Tomato"]

document.write(fruit.length);
document.write(fruit.push("A"));
document.write(fruit.unshift("B"));
document.write(fruit);

document.write(fruit.pop());
document.write(fruit.shift());
document.write(fruit);



















