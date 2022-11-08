// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
// 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

// 제한사항
// - numbers는 소문자로만 구성되어 있습니다.
// - numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
// - 1 ≤ numbers의 길이 ≤ 50
// - "zero"는 numbers의 맨 앞에 올 수 없습니다.

function solution(numbers) {
    const nums = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    
    /*
    const nums = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
    */
    
    for(let i = 0; i < nums.length; i++){
        while( numbers.includes(nums[i]) ){
            // 0. zero 부터 시작하여 nine 까지, numbers에 숫자 영문표기가 포함되어 있다면  반복문이 계속해서 돈다. 
            numbers = numbers.replace(nums[i], i)
            // 1. numbers에 있는 숫자 영문표기가 nums의 인덱스 순서로 대체된다. (replace() 메소드 사용)
        }
    }

    // 2. 현재 numbers의 타입은 string이므로 숫자로 변환하여 return한다.
    // console.log(typeof numbers); // string 출력
    return Number(numbers);
}