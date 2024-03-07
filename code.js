let numberbar=document.getElementById('numberbar')
let tofarenhite=document.getElementById('tofarenhite')
let tocalcius=document.getElementById('tocalcius')
let result=document.getElementById('resultbox')
let temp;

function calculate(){

if(tofarenhite.checked)
{
temp=Number(numberbar.value)
temp=temp*9/5+32;
result.textContent=temp.toFixed(1)+"F"
}

else if(tocalcius.checked)
{
temp=Number(numberbar.value)
temp=(temp-32)*(5/9);
result.textContent=temp.toFixed(1)+"C"
}
else{
    result.textContent="select any unit "
}


}