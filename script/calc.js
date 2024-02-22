var cnt = 0;
function clickCalc(){
    ++cnt;
    document.getElementById("count").innerHTML=cnt;
}
function clickCalc10(){
    cnt+=10;
    document.getElementById("count").innerHTML=cnt;
}