
function validateForm() { //redirect to shop.html
	 window.name = document.forms["myForm"]["fname"].value;
	 window.zip = document.forms["myForm"]["fzip"].value;
	 window.credit = document.forms["myForm"]["fcredit"].value;

	 if  ( (name!="") && ( zip != "") && ( credit != "") ){
	 	window.location.href = 'shop.html';
	 }
	 else{
	 	alert("All Queries must be filled ! ")
	 }
	
}


// main program
let cartArray = document.querySelectorAll('.add-to-cart'); // returns array of queries with add-to-cart class 

let items = [  //all items with details
	{
		name:'Faux Red Jacket',
		tag: 'faux_red',
		price: 120,
		inCart: 0
	},

	{
		name:'Grey Fleece Puff Jacket',
		tag: 'grey_fleece_womans',
		price: 70,
		inCart: 0
	},

		{
		name:'Classic Black Sweatshirt',
		tag: 'black_sweatshirt',
		price: 30,
		inCart: 0
	},

		{
		name:'Versace Polygon sunglasses',
		tag: 'green_glasses',
		price: 80,
		inCart: 0
	},

		{
		name:'Converse Purple Flame',
		tag: 'purple_flames',
		price: 60,
		inCart: 0
	},

		{
		name:'Ironik Spike Chain',
		tag: 'spike_chain',
		price: 40,
		inCart: 0
	}
]



displayItems(); // items in shopping cart
for (let ctr=0; ctr < cartArray.length; ctr++){ // event set for each add to cart btn
	cartArray[ctr].addEventListener('click', () =>{
		onClickCartAdd(items[ctr]);
		total(items[ctr]);
		window.location.reload();
	})
}

  
		
// functions



function onClickCartAdd(currentProduct){
	
	let itemNum = localStorage.getItem('onClickCartAdd');

	itemNum = parseInt(itemNum);
	if( itemNum ){
			localStorage.setItem('onClickCartAdd', itemNum + 1);

	} else{
		localStorage.setItem('onClickCartAdd', 1); //setting in local storage

	}	

	setItems(currentProduct);
}

function setItems(currentProduct){
	let cartItems = localStorage.getItem('itemInCart'); //product that has been clicked with all details
	cartItems = JSON.parse(cartItems);

	if (cartItems != null){ // not first time being added

		if (cartItems[currentProduct.tag] == undefined) { 
			cartItems = {
				...cartItems,
				[currentProduct.tag]: currentProduct 
			}
		}

		cartItems[currentProduct.tag].inCart += 1; 


	} else{ //first time being added
			currentProduct.inCart = 1;

			cartItems = {
			[currentProduct.tag]: currentProduct 
		}
	}

	localStorage.setItem('itemInCart', JSON.stringify(cartItems)); //need to json.stringify this bcause cartItems it is an object type

}



function total(currentProduct){

	let currentTot = localStorage.getItem('total'); // when getting from local it returns string so need to convert to int

	if ( currentTot != null ){
		currentTot = parseInt(currentTot);
		localStorage.setItem('total', currentTot + currentProduct.price);


	} else{ // total doesnt exist

		localStorage.setItem('total', currentProduct.price);
	}
	
}


function displayItems() {
	let cartItems = localStorage.getItem('itemInCart');
	let currentTot = localStorage.getItem('total');
	cartItems = JSON.parse(cartItems);

	let itemContainer = document.querySelector(".items");


	if (cartItems && itemContainer){
		itemContainer.innerHTML = '';
		Object.values(cartItems).map(item => {
			 itemContainer.innerHTML +=  `
			 <div class="inCartItem">  
			 	<div class="wrapper">
				 <div class="itemAndName">
				 
				 	<img src = "shop_images/${item.tag}.jfif">
				 	<br><br><br>
				 	<span>${item.name}</span>
				 </div>	
			
				<div class="price">
				 	<small>£${item.price}.00</small>
				</div>	
				 
				<div class="itemNumInCart">
				 	<ion-icon class="subtractItemFromCart" name="caret-back-outline"></ion-icon>
				 	<strong>${item.inCart}</strong>
				 	<ion-icon class="addItemToCart" name="caret-forward-outline"></ion-icon>
				</div>
			 	
			 	<div class="itemTot">
				 	<strong>£${item.inCart*item.price}.00</strong>
				 </div>
			`;
		})

		Object.values(cartItems).map(item => {
			if ('span'){
			 itemContainer.innerHTML +=  `
			 	<br><br>
				 <div class='clearAllDisplay'>
					<ion-icon onclick="clearAll(${item.inCart}, ${item.inCart*item.price})" class="remove" name="trash-outline"></ion-icon>
					<span id="delete">Delete All</span> 
				</div>
			`;
			}else{

			}
	})


		itemContainer.innerHTML += `
				<div class="totDisplayContainer">
					<h4 class="totDisplayTitle">Total:</h4>
					<h4 class="totDisplay">£${currentTot}.00</h4>
		 		</div>

		`;
	}
}



function clearAll(numOfItems, itemPrice){
		let cartItems = localStorage.getItem('itemInCart');
		let cartTot = localStorage.getItem('total');
		cartItems = JSON.parse(cartItems);

		let itemContainer = document.querySelector(".items");
		console.log(itemContainer);
		let itemArray = Object.values(cartItems);

		for (let i=0; i < (itemArray.length); i++){
			let foundItem = Object.values(itemArray[i]);
			let foundItemPrice = foundItem[2];
			let foundItemQuantity = foundItem[3];
			let foundItemTotal = foundItemPrice * foundItemQuantity
			if( (foundItemQuantity == numOfItems) && (foundItemTotal == itemPrice) ){
				itemContainer.innerHTML = ""
			}
		}
		localStorage.clear();
}


function buy(){
	let cartItems = localStorage.getItem('itemInCart');
	cartItems = JSON.parse(cartItems)
	let itemName = Object.keys(cartItems, null, 2);
	let itemsPurchased = localStorage.getItem('onClickCartAdd');
	alert(window.name + ' you have purchased ' + itemsPurchased + ' items:  ' + itemName + ". Thank you for your purchase.");

}