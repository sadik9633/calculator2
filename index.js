function displaydata(data){
    result.value+=data
}
function allclear(){
    result.value=""
}
function equal(){
    exp=result.value
    result.value=eval(exp)
}
function backspace(){
    data=result.value
    result.value=data.slice(0,-1)
}