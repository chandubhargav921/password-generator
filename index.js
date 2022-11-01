const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"," "];

let len=15
let pwdel=document.getElementById("pwd")
let pwddel=document.getElementById("pwdd")
length1=pwddel.textContent.length
length1=0
function getpasswd(){
    length1+=15
    if(length1<16){
    for(let i=0;i<15;i++){
    // pwdel.textContent=" "
    // pwddel.textContent=" "
    rand=Math.floor(Math.random()*characters.length)
    rand1=Math.floor(Math.random()*characters.length)
    pwdel.textContent+=characters[rand]
    pwddel.textContent+=characters[rand1]
    console.log(pwddel.textContent.length)
    
}
    }else{
 }
    
}
function reset(){
    pwddel.textContent=" "
    pwdel.textContent=" "
    length1=0

}
console.log(pwddel.textContent.length)

