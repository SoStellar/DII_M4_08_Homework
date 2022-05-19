var submitButton = document.getElementById('submitButton')
var inputText = document.getElementById('inputText')
var output = document.getElementById('output')
var notification = document.getElementById('notification')
var counter = 0
var prefix = document.getElementById('autoSizingSelect')
var name1 = document.getElementById('autoSizingInputName')
var userName = document.getElementById('autoSizingInputUsername')

function addText(){
    counter +=1
    notification.innerText = counter
    let prefixText = prefix.value
    let nameText = name1.value
    let userNameText = userName.value
    console.log(prefixText)
    console.log(nameText)
    console.log(userNameText)
    let newTable = document.createElement('tr')
    let newTable1 = document.createElement('td')
    newTable1.innerText = prefixText
    newTable.appendChild(newTable1)
    let newTable2 = document.createElement('td')
    newTable2.innerText = nameText
    newTable.appendChild(newTable2)
    let newTable3 = document.createElement('td')
    newTable3.innerText = userNameText
    newTable.appendChild(newTable3)
    output.appendChild(newTable)
}
submitButton.addEventListener('click',addText)
