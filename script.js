let input=document.querySelector('.input');
function btnClick(val) {
    input.value += val;}
function btnClear() {
   input.value = ""
}
function btnDelete() {
    input.value = input.value.slice(0,-1);
}

function equalClick(){
    var text=input.value
    var result=eval(text)
    input.value=result
}