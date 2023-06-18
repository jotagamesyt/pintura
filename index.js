const express =regquire('express');
const app = express();
app.use(express.static(_dirname + "/public/"));
app.listen('3000', function()
{
    console.log("servidor web iniciado escuchando en puerto 3000. http//localhost:3000/");
})