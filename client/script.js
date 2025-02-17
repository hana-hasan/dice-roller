function rollDice()
{
    //generate 5 value for dice and send it to the html
    document.getElementById('d1').value = Math.floor(Math.random() * 6) + 1; 
    document.getElementById('d2').value= Math.floor(Math.random() * 6) + 1; 
    document.getElementById('d3').value = Math.floor(Math.random() * 6) + 1; 
    document.getElementById('d4').value = Math.floor(Math.random() * 6) + 1; 
    document.getElementById('d5').value = Math.floor(Math.random() * 6) + 1; 



}

//event listener to allow for reroll when enter is pressed
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        rollDice();
    }
});