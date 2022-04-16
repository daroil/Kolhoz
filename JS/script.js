'use strict';
window.onload = function()
{
    let main = document.querySelector("#main");
    main.innerHTML = `<label for="form">input your request:</label>
		<input type="text" id="form" name="form">
        <button class="button-5" role="button" id="request">Send request</button>`

    let img = document.querySelector('#img');
    let notification = document.querySelector("#notification");
    let back = document.querySelector("#back");
    let request = document.querySelector("#request");

    let circle = document.createElement('div');
    let notificationsArray = [];
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
        let input = document.createElement('div');
        let link = document.createElement('a');
        let status = "";
        link.innerHTML = 'see details';
        link.className = 'link'
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
        notificationsArray.push({
            id: notificationsArray.length +1,
            info: val,
            status: status,
        });
        notification.append(wrap);
        text.append(input);
        text.append(link);
        wrap.append(text);
    }

    document.addEventListener("click", handler);

    function handler(event)
    {
        if(event.target.className === "link")
        {
            let localId = event.target.getAttribute("id");
            let result = notificationsArray.find((notification)=>{
                return(notification.id == localId)
            });
            console.log(result);
        }
    }


}