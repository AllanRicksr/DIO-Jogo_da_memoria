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
        if (clickedOrder[i] != order { i }) {
            lose();
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
    })

    checkOrder();
}