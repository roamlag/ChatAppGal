(function () {
    'use strict'
//    var newMessageArea = document.getElementById("newMsg");
//    var messagesSection = document.getElementById("messagesSection");
//    newMessageArea.focus();
//    newMessageArea.addEventListener('keyup', function (e) {
//        if (e.keyCode == 13 && newMessageArea.value.trim() != "") {
//            sendToServer(newMessageArea.value);
//            newMessageArea.value = "";
//        }
//    });

//    debugger;
//    $('#messagesHeader').css('color','red');

    $('#newMsg').focus();
    $('#newMsg').keyup(function (event) {
        if (event.keyCode == 13 && $('#newMsg').val().trim() != "") {
            sendToServer($('#newMsg').val());
            $('#newMsg').val("");
        }
    });


    function sendToServer(msg) {
        $.ajax({ type: 'post',
        url: '/chat',
//        contentType: 'application/json;charset=UTF-8',
//        data: JSON.stringify({message: msg})
        data: {message: msg}
        });
//        var request = new XMLHttpRequest();
//        request.open('post', '/chat');
//        request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//        request.send(JSON.stringify({message: msg}));
    }

    function updateChatBox() {
        $.ajax({url: '/chat'}).done(function (response) {
            $('#messagesSection').html(response.join('<br/>'));
        });

//        var request = new XMLHttpRequest();
//        request.onload = updateMessagesSection;
//        request.open('get', '/chat');
//        request.send(null);
    }

    setInterval(updateChatBox, 1000);

//    function updateMessagesSection() {
//        var allMessages = JSON.parse(this.responseText);
//        messagesSection.innerText = allMessages.join('\n');
//    }
}());