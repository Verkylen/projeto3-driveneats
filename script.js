let Discriminating1;
let Structure1;

function Selected1(x) {
        if ((Discriminating1 === true) && (Structure1 !== x)) {
        Discriminating1 = Structure1.classList.toggle('Marking');
    }

    Discriminating1 = x.classList.toggle('Marking');
    Structure1 = x;

    ButtonCondition()
}


let Discriminating2;
let Structure2;

function Selected2(x) {
    if ((Discriminating2 === true) && (Structure2 !== x)) {
        Discriminating2 = Structure2.classList.toggle('Marking');
    }

    Discriminating2 = x.classList.toggle('Marking');
    Structure2 = x;

    ButtonCondition()
}


let Discriminating3;
let Structure3;

function Selected3(x) {
    if ((Discriminating3 === true) && (Structure3 !== x)) {
        Discriminating3 = Structure3.classList.toggle('Marking');
    }

    Discriminating3 = x.classList.toggle('Marking');
    Structure3 = x;

    ButtonCondition()
}


const Button_text = document.querySelector('span').innerHTML;

function ButtonCondition() {
    if (Discriminating1 == Discriminating2 == Discriminating3 == true) {
        document.querySelector('button').classList.add('Activated');
        document.querySelector('span').innerHTML = 'Fechar pedido';
    } else {
        document.querySelector('button').classList.remove('Activated');
        document.querySelector('span').innerHTML = Button_text;
    }
}