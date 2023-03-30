let smartPhones=['iphone','ipod','ipad','android','opera mini','opera mobi','nokia','webos','windows ce','blackberry','iemobile','sonyericssion'];
//스마트 폰 구분
for(let i in smartPhones){
    //정규화식
    if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhones[i]))){
        document.location='http://http://usa112233.dothome.co.kr/mindex.html';
        //모바일 화면인걸 인지하면 mindex.html로 연결을 해준다.
    }
}