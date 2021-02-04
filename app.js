

window.onload = () => {
    var numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var shape = ["Diamonds", "Spades", "Hearts", "Clubs"];
    var randomCardNumber = Math.floor(Math.random() * numbers.length);
    var randomShapeNumber = Math.floor(Math.random() * shape.length);
    var choseShape = shape[randomShapeNumber];

    //Obtiene el div para agregar el content alm card
    document.getElementById('cardContent').innerHTML = numbers[randomCardNumber];
    document.getElementById('theCard').className = "";
    document.getElementById('theCard').classList.add("card");
    document.getElementById('theCard').classList.add(getShape(choseShape));
}

//Retorna la clase que se usará para el numero y shape elegido aleatoriamente
getShape = (shape) => {
    switch (shape) {
        case "Diamonds": return "shape-diamonds"; break;
        case "Spades": return "shape-spades"; break;
        case "Hearts": return "shape-hearts"; break;
        case "Clubs": return "shape-clubs"; break;
    }
}