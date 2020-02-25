//1. Задание второе
for (var count = 0; count <= 10; count++);
	console.log(count);

//2. Задание третье
const post = {             
	author: "John", //вывести этот текст             
	postId: 23,             
	comments: [                 
	{                    
		 userId: 10,                     
		 userName: "Alex",                     
		 text: "lorem ipsum",                     
		 rating: {                         
			 likes: 10,                         
			 dislikes: 2 //вывести это число                     
	 		}                 
	 	},                 
	 {                     
	 	userId: 5,//вывести это число                     
	 	userName: "Jane",                     
		text: "lorem ipsum 2", //вывести этот текст                     
		rating: {                         
		 	likes: 3,                         
		 	dislikes: 1                     
	 }                 
	},             
]         
} 

console.log(post.author);
console.log(post.comments[0].rating.dislikes)
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//3. Задание четвертое
	const products = [             
		{                 
			id: 3,                 
			price: 200,             
		},             
		{                 
			id: 4,                 
			price: 900,             
		},             
		{                 
			id: 1,                 
			price: 1000,             
		},         
	]; 

	products.forEach(item => {
		item.price = item.price - item.price * 0.15
	});

	console.log(products);


//5. Задание шестое

for (let i = 0; i < 9; console.log(i++)){}

//6. Задание седьмое

//Рисунок пирамиды

for (let x = 'x'; x.length <=20; x +='x') {
	console.log(x);
}


