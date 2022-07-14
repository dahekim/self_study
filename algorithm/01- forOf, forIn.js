// 숫자로만 이루어진 배열이 있습니다.
// for-of를 이용해 숫자의 총합을 구해주세요.

const arr = [11, 22, 33, 44, 55];
let sum = 0;
for(let e of arr){
  sum +=e
  // console.log(sum)
}

console.log(sum); // 165

// 객체를 순회하며 key가 title이거나
// name일 경우 value를 대문자로 바꿔주세요.

const obj = {
  title: 'The Title',
  name: 'Jane',
  contents: 'Nothing to say'
};

for (let key in obj) {
  if(key=== 'name' || key ==='title'){
    obj[key] = obj[key].toUpperCase()

  }
}

console.log(obj);
// {
//   title : "THE TITLE",
//   name : "JANE",
//   contents: "Nothing to say"
// }

