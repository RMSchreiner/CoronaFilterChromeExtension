replaceText(document.body)


function replaceText(element){
if(element.hasChildNodes()){
    element.childNodes.forEach(replaceText)
}else if (element.nodeType === Text.TEXT_NODE){
    if(element.textContent.match(/coronavirus/gi)) {
    const newElement =document.createElement('span')
    newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
    '<span class = "rainbow">$1</span>')
    element.replaceWith(newElement)
    }
}
}

//blacks out word
// if(element.textContent.match(/coronavirus/gi)) {
//     const newElement =document.createElement('span')
//     newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
//     '<span style = "background-color: black; color: black;">$1</span>')
//     element.replaceWith(newElement)


//removes parentElements
//element.parentElement.remove()

//chrome://extensions/
//load unpacked extension into your folder then run the extension in the browser
//loading the unpacked pull the folder into the cloud and you reload when updating