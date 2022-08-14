let Discriminating1;
let Structure1;

function Selected1(x) {
        if ((Discriminating1 === true) && (Structure1 !== x)) {
        Discriminating1 = Structure1.classList.toggle('Marking');
        Structure1.querySelector('ion-icon').classList.toggle('Ocult');
    }

    Discriminating1 = x.classList.toggle('Marking');
    Structure1 = x;
    Structure1.querySelector('ion-icon').classList.toggle('Ocult');

    ButtonCondition();
}


let Discriminating2;
let Structure2;

function Selected2(x) {
    if ((Discriminating2 === true) && (Structure2 !== x)) {
        Discriminating2 = Structure2.classList.toggle('Marking');
        Structure2.querySelector('ion-icon').classList.toggle('Ocult');
    }

    Discriminating2 = x.classList.toggle('Marking');
    Structure2 = x;
    Structure2.querySelector('ion-icon').classList.toggle('Ocult');

    ButtonCondition();
}


let Discriminating3;
let Structure3;

function Selected3(x) {
    if ((Discriminating3 === true) && (Structure3 !== x)) {
        Discriminating3 = Structure3.classList.toggle('Marking');
        Structure3.querySelector('ion-icon').classList.toggle('Ocult');
    }

    Discriminating3 = x.classList.toggle('Marking');
    Structure3 = x;
    Structure3.querySelector('ion-icon').classList.toggle('Ocult');

    ButtonCondition();
}


const Button_text = document.querySelector('span').innerHTML;

function ButtonCondition() {
    if (Discriminating1 && Discriminating2 && Discriminating3) {
        document.querySelector('button').classList.add('Activated');
        document.querySelector('span').innerHTML = 'Fechar pedido';
    } else {
        document.querySelector('button').classList.remove('Activated');
        document.querySelector('span').innerHTML = Button_text;
    }
}


function CalculationCost() {
    if (Discriminating1 && Discriminating2 && Discriminating3) {
        const Value1 = Number(Structure1.querySelector('h6').innerHTML.slice(3).replace(',', '.'));
        const Value2 = Number(Structure2.querySelector('h6').innerHTML.slice(3).replace(',', '.'));
        const Value3 = Number(Structure3.querySelector('h6').innerHTML.slice(3).replace(',', '.'));
    
        const Cost = (Value1 + Value2 + Value3).toFixed(2);

        const Dish = Structure1.querySelector('h4').innerHTML;
        const Drink = Structure2.querySelector('h4').innerHTML;
        const Dessert = Structure3.querySelector('h4').innerHTML;

        const Message = encodeURIComponent(
`Olá, gostaria de fazer o pedido:
- Prato: ${Dish}
- Bebida: ${Drink}
- Sobremesa: ${Dessert}
Total: R$ ${Cost}`);

        console.log(Cost);
        
        const Link = `https://wa.me/5571987101121?text=${Message}`;

        window.open(Link);
    }
}