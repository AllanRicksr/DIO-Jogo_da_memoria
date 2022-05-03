let order = [];
let clickedOrder = [];
let ecore = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
//cria ordem aleatoria
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende as cores
let lightColor = (element, number) => {
    time = time * 500;
    setTimeout(() => {
        element.classlist.add('selected');
    }, tempo);
    setTimeout(() => {
        element.classlist.remove('');
    })
}

//chaca se os botoes foram precionados certos
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextlevel();
    }
}

//funcao clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classlist.add('selected');

    setTimeout(() => {
        elementColor(color).classlist.remove('selected');
        checkOrder();
    })


}

//funcao que retorna a cor
let createColorElement = (color) => {
    if (color == 0) {
        return green
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//funcao prar proximo nivel
let nextlevel = () => {
        score++;
        shuffleOrder();
    }
    //funcao para derrota
let gamaOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextlevel();

}

green.addEventListener('click'.click(0));
red.addEventListener('click'.click(1));
yellow.addEventListener('click'.click(2));
blue.addEventListener('click'.click(3));

playGame();