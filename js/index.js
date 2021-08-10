const display = document.getElementById('display');
const buttons = document.getElementsByClassName('.button');

var getNum = () =>{
    var key = event.target.innerText;
    print(key);
}
display.innerHTML = '0';
var print = (value) =>{
    
    if(display.innerHTML == '0'){
        if(!isNaN(value) || value == '-')
        display.innerHTML = '';
        if(value != '=' && value != 'C')
        display.innerHTML += value;
    
    } else{
        if(value == 'C'){
            display.innerHTML = '0';
        }
        if(value == '='){
            display.innerHTML = eval(display.innerHTML);
        }else{   
                if(value != 'C'){
                display.innerHTML += value;
                check(display.innerHTML);
                if(display.innerHTML.length > 15){
                display.innerHTML = 'Digit Limit Met'
                }
            }
        }  
    }
}

var check = (val) =>{
    var lastChar = val[val.length-1];
    var prevChar = val[val.length-2];
    if (typeof(lastChar) ==typeof(prevChar) && isNaN(lastChar) && isNaN(prevChar)){
        display.innerHTML = val.slice(0,-1);
  }
}

