let celsius =document.getElementById('cel'); 
let fahrenheit =document.getElementById('fah'); 
let kelvin =document.getElementById('kel'); 

//convert celsius temperature in farenhite and kelvin

celsius.oninput = function () 
{ 
    let f = (parseFloat(celsius.value) * 9) / 5 + 32; 
    fahrenheit.value = parseFloat(f.toFixed(2)); 
    let k = (parseFloat(celsius.value) + 273.15); 
    kelvin.value = parseFloat(k.toFixed(2)); 
} 

//convert farenhite temperture in celsius and kelvin

fahrenheit.oninput = function () 
{ 
    let c = ((parseFloat( 
    fahrenheit.value) - 32) * 5) / 9; 
    celsius.value = parseFloat(c.toFixed(2)); 
  
    let k = (parseFloat( 
    fahrenheit.value) - 32) * 5 / 9 + 273.15; 
    kelvin.value = parseFloat(k.toFixed(2)); 
} 

//convert kelvin temperature in celsius and farenhite

kelvin.oninput = function ()
{ 
    let f = (parseFloat( 
    kelvin.value) - 273.15) * 9 / 5 + 32; 
    fahrenheit.value = parseFloat(f.toFixed(2)); 
  
    let c = (parseFloat(kelvin.value) - 273.15); 
    celsius.value = parseFloat(c.toFixed(2)); 
}

function cls()
{
    document.getElementById('cel').value='';
    document.getElementById('fah').value='';
    document.getElementById('kel').value='';
}