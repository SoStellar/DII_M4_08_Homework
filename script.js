var submitButton = document.getElementById('submitButton')
var inputText = document.getElementById('inputText')
var output = document.getElementById('output')
var prefix = document.getElementById('autoSizingSelect')
var name1 = document.getElementById('autoSizingInputName')
var username = document.getElementById('autoSizingInputUsername')
var counter = 0;

function addText(){
    let usernameText = username.value
    let nameText = name1.value
    let prefixText = prefix.value
    let notification = document.getElementById('notification')
    console.log(usernameText)
    console.log(nameText)
    console.log(prefixText)
    counter +=1
    notification.innerText = counter
}
submitButton.addEventListener('click',addText)