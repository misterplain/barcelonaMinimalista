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
    nameInput.value = ""
    commentInput.value = ""
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
    nameInput.value = ""
    commentInput.value = ""
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
        nameInput.value = ""
        commentInput.value = ""
        }

/*suggest button*/

const suggestButton = document.body.querySelector("#suggestButton")
const suggestButton2 = document.body.querySelector("#suggestButton2")
const suggestButton3 = document.body.querySelector("#suggestButton3")
const suggestButton4 = document.body.querySelector("#suggestButton4")
const suggestButton5 = document.body.querySelector("#suggestButton5")
const collabButton = document.body.querySelector("#collabButton")
const submitted = document.body.querySelector("#submitted")

$(function() {
    $("#suggestButton").click(function() {
        $("#suggestionModal").modal("show");
    });
})
$(function() {
    $("#suggestButton2").click(function() {
        $("#suggestionModal").modal("show");
    });
})
$(function() {
    $("#suggestButton3").click(function() {
        $("#suggestionModal").modal("show");
    });
})
$(function() {
    $("#suggestButton4").click(function() {
        $("#suggestionModal").modal("show");
    });
})
$(function() {
    $("#suggestButton5").click(function() {
        $("#suggestionModal").modal("show");
    });
})
$(function() {
    $("#collabButton").click(function() {
        $("#collabModal").modal("show");
    });
})
$(function() {
    $("#submitted").click(function() {
        $("#suggestionModal").modal("hide");
        $("#submittedModal").modal("show");
    });
})


/*water footprint script */
const kilometers = document.body.querySelector("#kilometers");
    const fastFashion = document.body.querySelector("#fastFashion");
    const meat = document.body.querySelector("#meat");
    const fly = document.body.querySelector("#fly");
    const calculate = document.body.querySelector("#calculate");
    const reset = document.body.querySelector("#reset");
    calculate.addEventListener('click', totalWater);
    reset.addEventListener('click', clearForm);
    let total = 0


    function totalWater () {
        //kilometers per week at 1.2 gal/km, FF per week at 5,250 avg year, meat per week 125 gal/serving, fly 24 per week if x amount of hours per year 
        total = total + (kilometers.value * 1.2) + (fastFashion.value * 100.96) + (meat.value * 125) + (fly.value * 24);
        $("#footprintModal").modal("show");
        let monthly = total * 4
        let yearly = total * 52
        let totalDisplay = "Your weekly water footprint is " + total + " gallons" 
        let monthlyDisplay = "Which is " + monthly + " over the course of a month"
        let yearlyDisplay = "And " + yearly + " over the course of a year"
        $("#footprintText").html(totalDisplay);
        $("#monthlyText").html(monthlyDisplay);
        $("#yearlyText").html(yearlyDisplay);
    }

    function clearForm() {
        console.log("attempt");
        kilometers.value = "";
        fastFashion.value = "";
        meat.value = "";
        fly.value = "";
        total = 0;
    }