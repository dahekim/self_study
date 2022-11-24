// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 
// 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

// 제한사항 
// - dots의 길이 = 4
// - dots의 원소의 길이 = 2
// - -256 < dots[i]의 원소 < 256
// - 잘못된 입력은 주어지지 않습니다.

function solution(dots) {
    // 1. 가장 큰 x의 값에서 가장 작은 x의 값을 빼 가로의 길이를 구한다.
    const w = Math.max(...dots.map(a => a[0])) - Math.min(...dots.map(a => a[0])); 
    // 2. 가장 큰 y의 값에서 가장 작은 y의 값을 빼 세로의 길이를 구한다.
    const h = Math.max(...dots.map(a => a[1])) - Math.min(...dots.map(a => a[1])); 
    // 3. 가로와 세로를 곱하여 결과값을 리턴한다.
    return w * h;
}