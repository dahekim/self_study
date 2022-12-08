function solution(spell, dic) {
    // 1. spell에 있는 문자들을 오름차순 정렬해서 한 단어로 재선언한다.
    spell = spell.sort().join("");
    // 2. dic에 있는 단어를 오름차순으로 재정렬한후 spell과 동일한 단어를 찾는다.
    dic = dic.map(a => a.split("").sort().join("")).find( e => e === spell);

    // 3. 일치하는 단어가 있다면 1, 일치하는 단어가 없었다면(undefined라면) 2를 리턴한다.
    return dic === undefined? 2 : 1;
}