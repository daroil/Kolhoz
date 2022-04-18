'use strict';
window.onload = function()
{
    let main = document.querySelector("#main");    
    let img = document.querySelector('#img');
    let notification = document.querySelector("#notification");
    let arrowBack = document.querySelector('#return');
    let circle = document.createElement('div');
    let notificationsArray = [];
    let count = 0;

    function originalMain()
    {
        main.innerHTML = `<label for="form">input your request:</label>
        <input type="text" id="form" name="form">
        <button class="button-1" role="button" id="request">Send request</button>`
    }
    function showSideBar() 
    {
        notification.classList.remove("hidden");
        count = 0;
        if (document.getElementById("circle")) 
        {
            circle.remove();
        }
    }
    function hideSidebar() 
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
        let input = document.createElement('div');
        let link = document.createElement('a');
        let status = "";
        link.innerHTML = 'see details';
        link.className = 'link';
        if (val) 
        {
            text.className = 'success';
            text.innerHTML = 'Your request was succesfully processed!'
            status = "sucess"
        }
        else 
        {
            text.className = 'alert';
            text.innerHTML = 'Your request was declined, sorry'
            status = "failure"
        }
        input.innerHTML = val;
        wrap.className = 'wrapper';
        link.setAttribute('id', notificationsArray.length + 1)
        notificationsArray.push(
        {
            id: notificationsArray.length +1,
            info: val,
            status: status,
        });
        notification.append(wrap);
        text.append(input);
        text.append(link);
        wrap.append(text);
    }
    function handler(event)
    {
        if(event.target.className === "link")
        {
            let localId = event.target.getAttribute("id");
            notificationDetails(localId);
        }
        else if(event.target.className === "button-1")
        {
            sentReq();
        }
        else if(event.target.id === "back")
        {
            hideSidebar();
        }
        else if(event.target.className === "button-2")
        {
            originalMain();
            hideSidebar();
            arrowBack.classList.add('hidden');
        }
    }
    function notificationDetails(localId)
    {
        let header = document.querySelector('#header');
        // let arrowBack = document.createElement('div');
        let result = notificationsArray.find((notification)=>
            {
                return(notification.id == localId)
            });
        hideSidebar();
        main.innerHTML = `
        <div class="requestName">Request ${result.id} details:</div>
        <div>Request message:</div>
        <div>${result.info}</div>
        <div>Request results:</div>
        <div>${result.status}</div>
        <label for="form">Retry your request:</label>
        <input type="text" id="form" name="form">
        <button class="button-1" role="button" id="request">Send request</button>
        `;
        // arrowBack.innerHTML = `<button class="button-2" role="button" >return</button>`;
        arrowBack.classList.remove('hidden');
        // header.append(arrowBack);
        console.log(result);

    }


    originalMain();
    img.addEventListener("click", showSideBar);
    document.addEventListener("click", handler);

}