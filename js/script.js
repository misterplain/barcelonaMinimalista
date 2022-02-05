function myFunctionChat() {
    let nameInput = document.querySelector("#nameInput");
    let commentInput = document.querySelector("#commentInput")
    const newComment = document.createElement("div");
    const name = document.createElement("h3");
    const body = document.createElement("p");
    name.innerText= nameInput.value + ' says:';
    body.innerText= commentInput.value;
    newComment.appendChild(name);
    newComment.appendChild(body);
  
    const element = document.getElementById("comment-chat");
    element.appendChild(newComment);
    function reverseOrder(){
      for (i = 0; i <= element.children.length; i++);
          element.insertBefore(element.childNodes[i], element.firstChild);
        }
    reverseOrder();
    }

function myFunctionTrade() {
    let nameInput = document.querySelector("#nameInputTrade");
    let commentInput = document.querySelector("#commentInputTrade")
    const newComment = document.createElement("div");
    const name = document.createElement("h3");
    const body = document.createElement("p");
    name.innerText= nameInput.value + ' says:';
    body.innerText= commentInput.value;
    newComment.appendChild(name);
    newComment.appendChild(body);
    
    const element = document.getElementById("comment-trade");
    element.appendChild(newComment);
    function reverseOrder(){
        for (i = 0; i <= element.children.length; i++);
            element.insertBefore(element.childNodes[i], element.firstChild);
        }
    reverseOrder();
    }

    function myFunctionOther() {
        let nameInput = document.querySelector("#nameInputOther");
        let commentInput = document.querySelector("#commentInputOther")
        const newComment = document.createElement("div");
        const name = document.createElement("h3");
        const body = document.createElement("p");
        name.innerText= nameInput.value + ' says:';
        body.innerText= commentInput.value;
        newComment.appendChild(name);
        newComment.appendChild(body);
        
        const element = document.getElementById("comment-other");
        element.appendChild(newComment);
        function reverseOrder(){
            for (i = 0; i <= element.children.length; i++);
                element.insertBefore(element.childNodes[i], element.firstChild);
            }
        reverseOrder();
        }