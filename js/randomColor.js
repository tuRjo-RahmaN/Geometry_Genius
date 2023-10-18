var card = document.getElementsByClassName('card')

for(const i of card)
{
    i.addEventListener('mouseenter',function(event){

        getRandomColor(event);
    })
}

// Function-3 [Random Color For Cards]
function getRandomColor(event)
{
    var letters = "0123456789ABCDEF";
    var color = "#";

    for(var i=0;i<6;i++)
    {
        color += letters[Math.floor(Math.random()*16)];
    }

    event.target.style.background = color;

}