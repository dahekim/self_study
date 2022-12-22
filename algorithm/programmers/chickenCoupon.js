// 프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다. 
// 쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고, 서비스 치킨에도 쿠폰이 발급됩니다. 
// 시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때 받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// - chicken은 정수입니다.
// - 0 ≤ chicken ≤ 1,000,000

function solution(chicken) {
    // 0. 받을 수 있는 최대 서비스 치킨의 수 answer 를 선언한다. 
    let answer = 0;
    
    // 1. 쿠폰 수량 coupons을 선언한다. 
    // 초기 쿠폰의 수량은 시켜먹은 치킨의 수와 동일하다. 
    let coupons = chicken;
    
    // 2. 쿠폰의 수량이 10장 이상인 경우 아래의 반복문 구문을 수행한다. 
    while(coupons>=10){
        // 3. 쿠폰으로 먹은 치킨의 수 result를 선언한다. 
        // 쿠폰으로 먹을 수 있는 치킨의 수는 현재 보유하고 있는 쿠폰의 수량에서 10을 나눈 값과 같다.
        // (소수점 이하가 있을 경우 그 수를 버린다.)
        let result = Math.floor(coupons/10);
        
        // 4. answer에 현재 남은 쿠폰으로 먹을 수 있는 치킨의 수를 더한다. 
        answer += result;

        // 5. 남은 쿠폰의 수량(coupons%10)과 서비스 치킨을 시키고 받은 새로운 쿠폰(result)의 값을 더해 쿠폰의 수량에 대입한다.
        coupons = coupons%10 + result;

    }
    // 7. 쿠폰의 수량이 10장 아래로 떨어질 경우 반복문을 종료하고 answer를 리턴한다.
    return answer;
}