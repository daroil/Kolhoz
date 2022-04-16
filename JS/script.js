'use strict';
let img = document.querySelector('#img');
let notification = document.querySelector("#notification");
let back = document.querySelector("#back");


let circle = document.createElement('div');

let count = 0;

img.addEventListener("click",show);
back.addEventListener("click",hide);
request.addEventListener("click",sentReq);



function show() 
{
    notification.classList.remove("hidden");
    count = 0;
    if (document.getElementById("circle")) 
    {
        circle.remove();
    }
}

function hide() 
{
    notification.classList.add("hidden");
}

function sentReq() 
{
    if (document.getElementById("circle")) 
    {
        circle.remove();
    }
    count +=1;
    const val = document.querySelector('#form').value;
    let head = document.querySelector("header");
    circle.setAttribute('id', 'circle') 
    circle.innerHTML = count;
    document.querySelector('#form').value = "";
    console.log(val);
    circle.className =  'circle';
    head.append(circle);
    requestProccessing(val);
}

function requestProccessing(val) 
{
    let text = document.createElement('div');
    let wrap = document.createElement('div');   
    let input = document.createElement('div')
    if (val) 
    {
        text.className = 'success';
        text.innerHTML = 'Your request was succesfully processed!'
    }
    else 
    {
        text.className = 'alert';
        text.innerHTML = 'Your request was declined, sorry'
    }
    input.innerHTML = val;
    wrap.className = 'wrapper';
    notification.append(wrap);
    text.append(input);
    wrap.append(text);
    
}