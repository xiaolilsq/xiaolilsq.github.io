var cnt = 0;
function clickCalc(){
    ++cnt;
    document.getElementById("count").innerHTML=cnt;
    if(cnt>=100){
        document.getElementById("ImBut").onclick=stoImakf();
    }
}
function stoImakf(){
    document.getElementById("ImBut").innerHTML="stO Imakf Orz";
}
function clickCalc10(){
    cnt+=10;
    document.getElementById("count").innerHTML=cnt;
}