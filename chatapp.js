/**
 * Created by galmaor on 09/04/14.
 */

var newMessageArea = document.getElementById("newMsg");
var messagesSection = document.getElementById("messagesSection");

newMessageArea.addEventListener('keyup',function (e){
    if (e.keyCode == 13) {
        var textNew = document.createElement("div");
        textNew.setAttribute("class","chatMessage");
        textNew.textContent=newMessageArea.value;
        messagesSection.appendChild(textNew);
        newMessageArea.value="";
    }
});