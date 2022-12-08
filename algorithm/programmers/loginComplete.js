function solution(id_pw, db) {
    let answer = "fail"
    const [id, pw] = id_pw;
    let check = false;
    
    for(let i = 0; i < db.length; i++){
        if(id===db[i][0] && pw===db[i][1]) check = true  
        if(id===db[i][0] && pw!=db[i][1]) answer = "wrong pw"
        
        if(check) answer = "login"
    }

    return answer;
}