//Chessboard
let size = 8;
for(let i = 1;i<=size;i++){
    str="";
    for(let j = 1;j<=size;j++){
        if((i+j)%2==0)
        str+=" ";
        else
        str+="#";
    }
    console.log(str);
}