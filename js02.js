// 조건문 

/* let userId=prompt('아이디를 입력하세요');
if(userId==='whj001'){
    console.log(`${userId} 방문해 주셔서 감사합니다1.`);
}else if(userId==='whj002'){
    console.log(`${userId} 방문해 주셔서 감사합니다2.`);
}else if(userId==='whj003'){
    console.log(`${userId} 방문해 주셔서 감사합니다3.`);
}else{
    console.log(`잘못된 아이디 입니다`);
} */

// 아이디를 입력 받아서 user123 이면 관리자라고 콘솔에 출력 
// user456 이면 부관리자 
// 나머지 일반회원

let userName = prompt('아이디를 입력하세요');
//console.log(userName)
if(userName==='user123'){
    console.log(userName+'관리자')
}else if(userName==='user456'){
    console.log(`${userName}부관리자`)
}else{
    console.log('일반회원')
}
