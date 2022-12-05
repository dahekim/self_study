// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 
// 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 
// 같은 식이라면 가장 짧은 수식을 return 합니다.

// 제한사항
// - 0 < polynomial에 있는 수 < 100
// - polynomial에 변수는 'x'만 존재합니다.
// - polynomial은 0부터 9까지의 정수, 공백, ‘x’, ‘+'로 이루어져 있습니다.
// - 항과 연산기호 사이에는 항상 공백이 존재합니다.
// - 공백은 연속되지 않으며 시작이나 끝에는 공백이 없습니다.
// - 하나의 항에서 변수가 숫자 앞에 오는 경우는 없습니다.
// - " + 3xx + + x7 + "와 같은 잘못된 입력은 주어지지 않습니다.
// - "012x + 001"처럼 0을 제외하고는 0으로 시작하는 수는 없습니다.
// - 문자와 숫자 사이의 곱하기는 생략합니다.
// - polynomial에는 일차 항과 상수항만 존재합니다.
// - 계수 1은 생략합니다.
// - 결괏값에 상수항은 마지막에 둡니다.
// - 0 < polynomial의 길이 < 50

function solution(polynomial) {
    // 0. 일차항의 값과 상수항의 값을 담을 배열 answer, 일차항의 계수값을 담을 varX를 선언,
    // 주어진 polynomial을 "+"를 기준으로 나누고 공백을 제거해서 배열에 넣는다.
    let answer = ["",0];
    let varX = 0;
    let arr = polynomial.split("+ ").map(e => e.trim());
    
    for(let i = 0; i< arr.length; i++){
        // 1. 요소가 상수항인 경우 상수항끼리 계산한다.
        if(!arr[i].includes("x")){
            arr[i] = Number(arr[i]);
            answer[1] += arr[i];
        }

        // 2. 요소가 일차항 x인 경우 varX의 값을 1 올린다.
        else if (arr[i] ==="x"){
            varX++;
        }
        // 3. 일차항 x 앞에 계수가 붙어있는 경우 계수만큼의 수를 더한다.
        else {
            let tmp = Number(arr[i].split("x")[0]);
            varX += tmp;          
        }
    }

    // 4. x가 하나밖에 없었을 경우 출력 형태를 x로 변경한다.
    varX === 1 ? answer[0] = "x" : answer[0] = varX+"x";

    // 5. 주어진 다항식에 x항이 없었다면 상수항만 string 형태로 리턴한다.
    if(answer[0] === "0x") return String(answer[1]);   

     // 6. 주어신 다항식에 상수항이 없었다면 x항의 값만 리턴한다. 
    if(answer[1] === 0) return answer[0];

     // 7. 일차항이 없고, 상수항도 존재하지 않았다면 "0"을 리턴
    if(answer[0] === "" && answer[1] === 0) return "0";

      // 8. 주어진 다항식에 x항과 상수항이 모두 포함되어있었다면 " + "로 join하여 리턴한다.
    else return answer.join(" + ")
}