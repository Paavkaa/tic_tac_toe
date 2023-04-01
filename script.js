function hrac(cell)
{
    if(cell.className.includes("white"))
    {
        cell.classList.add("blue");
        cell.classList.remove("white");
        setTimeout(bot, 200);
    }

}

function bot(cell)
{

    var whiteSquare = document.querySelectorAll('.white');
    if(whiteSquare.length > 0)
    {
        var randomSquare = whiteSquare[Math.floor(Math.random()*whiteSquare.length)];
        randomSquare.classList.remove("white");
        randomSquare.classList.add("red");
    }
}