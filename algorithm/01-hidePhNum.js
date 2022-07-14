// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.

function solution(phone_number) {
    let answer = [];
    for(let i = 0; i < phone_number.length; i++){
        if(i < phone_number.length - 4 ) answer.push("*")
        else answer.push(phone_number[i])
    }

    return answer.join("");
}

function solution(phone_number) {
    
    let lastNum = phone_number.slice(-4);
    console.log(phone_number) // slice() 사용으로 phone_number 자체에 변화는 없다!
    return lastNum.padStart(phone_number.length, "*");
    // 주어진 phone_number의 길이만큼의 문자열을 반환, 전화번호 뒷 4자리(lastNum)를 제외한 나머지는 *로 채워 넣어진다!
}