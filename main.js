// Создать функцию-конструктор Product, которая принимает на вход аргументы category, type, price и присваивать их полям объекта c соответствующим названием ключа.

// Каждому объекту созданному с помощью функции-конструктор Product доступна функция render, которая возвращает строку вида: 

// `<tr>
// 	<td><img src="images/furniture/bed.svg" alt="bed" width="50" height="50"></td>
// 	<td>bed</td>
// 	<td><b>239.99 USD</b></td>
// </tr>`
// Все заданные продукты создаем с помощью функции-конструктор Product и для всех вызываем метод render().



// например если использовать оператор new то создается один продукт, то есть один объект в массиве является одним продуктом

// const product = new Product('furniture', 'bed', 239.99);
// console.log(product.category); // furniture
// console.log(product.type); // bed
// console.log(product.price); // 239.99
// console.log(product.render()); 
// // `<tr>
// 	<td><img src="images/furniture/bed.svg" alt="bed" width="50" height="50"></td>
// 	<td>bed</td>
// 	<td><b>239.99 USD</b></td>
// </tr>`

// Функция-конструктор Product не принимает массив на вход, а метод render() не перебирает этот массив. Он возвращает строку html для одного продукта

// В результате необходимо отрендерить на странице таблицу с выводом данных о всех продуктах.

// Совет: есть несколько способов создать таблицу. Один из них создать другую функцию-конструктор например Category или Products, которая принимает массив и внутри себя перебирает его создавая объекты через new Product()
// Дизайн и стили можете выбирать сами.
// Картинки в архиве.
// Также, есть пример таблицы.

let furniture = [
	{
		type: 'desk',
		price: 27.87
	},
	{
		type: 'closet',
		price: 187.32
	},
	{
		type: 'chair',
		price: 79.29
	},
	{
		type: 'bed',
		price: 239.99
	}
];

let devices = [
	{
		type: 'desktop',
		price: [272, 769]
	},
	{
		type: 'laptop',
		price: [499, 1800]
	},
	{
		type: 'smartphone',
		price: [100, 800]
	},
	{
		type: 'tablet',
		price: [185, 1000]
	},
    {
		type: 'console',
		price: 889
	}
];

let appliances = [
	{
		type: 'oven',
		price: 780
	},
	{
		type: 'microwave',
		price: [50, 1400]
	},
	{
		type: 'mixer',
		price: 215.17
	}
];



for (value of devices) {
	if (isNaN(value.price)) {
		value.price = value.price[0] + '-' +  value.price[1];
		console.log(value.price)
	} else value.price;
}; 

for (value of appliances) {
	if (isNaN(value.price)) {
		value.price = value.price[0] + '-' +  value.price[1];
		console.log(value.price)
	} else value.price;
}; 


function Product(category, type, price) {
	this.category = category,
	this.type = type,
	this.price = price,
	this.render = function Render() {
		return `
		<tr>
			<td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
			<td style="padding: 20px">${this.type}</td>
			<td style="padding: 20px">${this.price} $</td>
		</tr>`
	};
};


const result = furniture.map((value) => {
	const product = new Product('furniture', value.type, value.price);
	return product.render();
  }).join(" ");
  
console.log(result);
  
  
const result1 = devices.map((value) => {
	const product = new Product('devices', value.type, value.price);
	return product.render();
  }).join(" ");
  
console.log(result1);
  

  
const result2 = appliances.map((value) => {
	const product = new Product('appliances', value.type, value.price);
	return product.render();
  }).join(" ");
  
console.log(result2);
document.write(`
<table border="1" style="border-collapse: collapse; text-align: center">
    <thead>
        <tr>
			<th style=" padding: 20px">Icon</th>
            <th style=" padding: 20px">Type</th>
            <th style=" padding: 20px">Price</th>
        </tr>
    </thead>
    <tbody>
  		${result}
		${result1}
		${result2}
	</tbody>
</table>
`   
);
