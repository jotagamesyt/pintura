window.addEventListener('dfMessengerLoaded',function(event)
{
    console.log("Chatbot iniciado"+ event);

    const dfMessenger = document.querySelector('df-messenger');
    dfMessenger.renderCustomText('Buenos días');

    dfMessenger.addEventListener('df-list-element-clicked', function (event)
    {
        console.log("df-list-element-clicked"+ event.detail.element.title);
        alert("pulsaste la opción"+  event.detail.element.title);
    }   );
    dfMessenger.addEventListener('df-user-input-entered', function(event)
    {
        console.log("df-user-input-entered"+ event.detail.input);
    });
});