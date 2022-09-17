const pizzas = [
    {
        id:1,
        nombre:'Primavera',
        ingredientes:['salsa de tomate','tomates en rodajas', 'mozzarella','huevo duro','provolone','oregano','aceituna'],
        precio : 1100,
        imagen:'https://images.deliveryhero.io/image/pedidosya/products/7726723e-8c39-4e8d-af6e-43e3c93c5db1.jpg?quality=90&width=864&webp=1',
    },
    {
        
        id:2,
        nombre:'Mozzarella',
        ingredientes:['salsa de tomate','queso mozzarella','aceitunas verdes'],
        precio:800,
        imagen:'https://images.deliveryhero.io/image/pedidosya/products/a3e778ea-b560-46ac-a1df-413d7bf9668b.jpg?quality=90&width=864&webp=1',
    },
    {
        id:3,
        nombre:'Rúcula con jamón crudo',
        ingredientes:['salsa de tomate','mozzarella','jamón crudo','rúcula fresca','tomates secos','queso parmesano'],
        precio:1100,
        imagen:'https://images.deliveryhero.io/image/pedidosya/products/e266f804-b154-4b90-af78-acbed6f7fff6.jpg?quality=90&width=864&webp=1',
    },
    {
        id:4,
        nombre:'Especial',
        ingredientes:['salsa de tomate','jamón cocido','mozzarella','pimiento rojo asado'],
        precio:950,
        imagen:'https://images.deliveryhero.io/image/pedidosya/products/f17a9436-eeff-4183-9b64-7ec80513f8c5.jpg?quality=90&width=864&webp=1',
    },
    {
        id:6,
        nombre:'4 Quesos',
        ingredientes:['salsa de tomate','queso mozzarella','queso sardo','queso roquefort','queso pategrás','aceitunas verdes'],
        precio:1100,
    },
    {
        id:7,
        nombre:'Napolitana',
        ingredientes:['salsa de tomate','mozzarella','tomates frescos','aceitunas verdes'],
        precio:900,
        imagen:'https://images.deliveryhero.io/image/pedidosya/products/0534694b-5661-444e-b4de-c3b537905547.jpg?quality=90&width=864&webp=1',
    },
    {
        id:8,
        nombre:'Fugazzeta',
        ingrediente:['salsa de tomate','cebolla','mozzarella','aceitunas negras'],
        precio:950,
        imagen:'https://images.deliveryhero.io/image/pedidosya/products/2da1c446-a45c-4564-8f61-e378b570c371.jpg?quality=90&width=864&webp=1',
    },
    {
        id:9,
        nombre:'Calabresa',
        ingredientes:['salsa de tomate','queso mozzarella','longaniza calabresa en rodajas','queso provolone rallado','aceitunas verdes'],
        precio:950,
        imagen:'https://images.deliveryhero.io/image/pedidosya/products/fd2df113-6e5a-4906-b2dc-6a6e4c2ae92b.jpg?quality=90&width=864&webp=1',
    },
];

const listPizza = document.querySelector('.pizza-list');
const input = document.querySelector('.input-number');
const form = document.querySelector('.add-form');

const saveLocalStorage = listPizza =>{
    localStorage.setItem('pizzas' ,JSON.stringify (listPizza));
};



function searchPizza(value) {
    const laPizza = pizzas.find((pizza) => pizza.id == value);
    return laPizza;
};

const renderCard = pizza =>{
    const {nombre, imagen, ingredientes, precio} = pizza;
    return `
    <div class="card">
    <h3>${nombre}</h3>
    <img src="${imagen}" alt="" class="img-pizza"/>
    <p>${ingredientes}</p>
    <p>$${precio}</p>
    </div>
    `
}
const showPizza = (value) => {
    if(!value){
        listPizza.innerHTML = `<h2>Ingrese un número mayor a 0</h2>`;
    }else if (!pizzas.some((pizza) => pizza.id === value)){
        console.log(value);
        listPizza.innerHTML = `<h2>No existe una pizza con ese ID</h2>`;
    }else{
        const pizza = searchPizza(value);
        listPizza.innerHTML = renderCard(pizza);
    }
};

const renderMessage = (e) =>{
    e.preventDefault();
    const valor = Number(input.value);
    showPizza(valor);
};

const init = () =>{
    
    form.addEventListener("submit", renderMessage);
    saveLocalStorage(pizzas);
};

init();


/*const renderCards = pizzas =>{
    cards.innerHTML = pizzas.map(renderCard).join('');
};
renderCards(pizzas);*/