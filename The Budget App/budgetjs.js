var budgetController = (function(){ 

	function Expenses(id, description,value) {
		this.id = id,
		this.description = description,
		this.value = value
		this.percentage = -1
	}

		Expenses.prototype.calcPercentage = function(totalIncome) {


			if (totalIncome > 0) {

			this.percentage =  Math.round((this.value / totalIncome) * 100)

			} else {
				this.percentage = -1
			}
			
		}

		Expenses.prototype.getPercentage =  function() {
			return this.percentage
		}



	function Income(id, description,value) {
		this.id = id,
		this.description = description,
		this.value = value
	}

	function calculateTotal(type) {
		var sum = 0;

		 data.allItems[type].forEach(function(cur){
		 	sum = sum + cur.value
		 })

		 data.totals[type] = sum
	}
	
	var data = {
		allItems : {
			exp: [],
			inc:[]
		},

		totals: {
			exp: 0,
			inc: 0

		},
		budget: 0,
		percentage: 0
	}

		return {
			addItem : function(type,des,val){

				console.log( this)

				var newItem,ID
				if (data.allItems[type].length > 0) {

					ID = data.allItems[type][data.allItems[type].length-1].id + 1

				}  else {

					ID = 0;
				}	

				if(type === 'exp') {

					newItem = new Expenses(ID, des, val)

				} 

				else if (type === 'inc') 

				{
					newItem = new Income (ID, des, val)
				}
				
				data.allItems[type].push(newItem)
				return newItem 

			},

			calculateBudget : function () {

				//calculate total income and expenses
				 calculateTotal('inc')
				 calculateTotal('exp')

				//calculate budget income - expenses
				data.budget = data.totals.inc - data.totals.exp

				//calculate percentage

				if (data.totals.inc > 0) {

				data.percentage = Math.round((data.totals.exp/data.totals.inc) * 100)	
				} else {
					data.percentage = -1
				}
				

			},

			calculatePercentage: function() {
				data.allItems.exp.forEach(function(curr) {
					curr.calcPercentage(data.totals.inc)
				})
			},

			getPercent: function() {
				var allPerc
				allPerc = data.allItems.exp.map(function(curr){
					return curr.percentage
				})

				return allPerc

			},

			getBudget : function() {

				return {
					budget: data.budget,
					totalInc: data.totals.inc,
					totalExp: data.totals.exp,
					percentage: data.percentage
				}
			},

			deleteItem: function(type, id) {

				var ids,index

				ids = data.allItems[type].map(function(current){
					return current.id
				})

				index = ids.indexOf(id)

				if (index !== -1) {
					data.allItems[type].splice(index, 1)
				}

			},

			testing: function () {
				console.log(data)
			}
		}
	

})()


var UIController = (function(){ //because this is an IFFE, we are putting everything in return otherwise everything will be comsidered private and we won't be able to access it from controller
	var DomStrings = {

		inputType: ".add_type",
		inputDescription: ".add_description",
		inputValue: ".add_value",
		inputBtn: ".add_btn",
		incomeContainer: ".income_list",
		expensesContainer: ".expenses_list",
		budgetLabel: ".budget_value",
		incomeLabel: ".budget_income_value",
		expenseLabel: ".budget_expenses_value",
		percentageLabel: ".budget_expenses_percentage",
		container: ".container",
		expensePercLabel: ".item_percentage",
		dateLabel: ".budget__title--month"
	}

	var formatNumber= function(num,type) {

					var numSplit,int,dec
					
					num = Math.abs(num)
					num = num.toFixed(2)

					numSplit = num.split(".")
					int = numSplit[0]
					if (int.length > 3) {

						int = int.substr(0,int.length -3) + "," + int.substr(int.length - 3 , 3)
 					}

 					dec = numSplit[1]

 					return (type === 'exp' ? '-' : "+") + int + "." + dec
				}


		var nodeListForEach = function(nodelist,callback) {
					//looping inside percentage array
					for (var i =0; i<nodelist.length; i++) {
					callback(nodelist[i], i)
						}
					}


	return {
			getInput : function() { 
		return {

			 type : document.querySelector(DomStrings.inputType).value,
			 description : document.querySelector(DomStrings.inputDescription).value,
			 value : parseFloat(document.querySelector(DomStrings.inputValue).value)
				}			
			
			},

			addListItem : function(obj, type) {

				console.log(this)
				var html, newHtml,element



				if (type === 'inc') {
					element = DomStrings.incomeContainer

					html =	'<div class = "item clearfix" id="inc-%id%"> <div class = "item_description"> %description%</div><div class = "right clearfix"> <div class = "item_value">%value%</div> <div class = "item_delete"> <button class = "item_delete-button"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
				}
				 
				 else if (type === 'exp') {
				 	element = DomStrings.expensesContainer
				 	html = '<div class = "item clearfix" id="exp-%id%"> <div class = "item_description"> %description% </div> <div class = "right clearfix"> <div class = "item_value">%value%</div> <div class = "item_percentage"> 10%</div> <div class = "item_delete"> <button class = "item_delete-button"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>'
				 }

				 newHtml = html.replace('%id%', obj.id)
				 newHtml = newHtml.replace('%description%' , obj.description)
				 newHtml = newHtml.replace('%value%', formatNumber(obj.value,type))

				 document.querySelector(element).insertAdjacentHTML('beforeend', newHtml) //afterbegin works but it sends test2 above test1.

				 

			},

			clearFields: function() {

				var fields

				fields = document.querySelectorAll(DomStrings.inputDescription + ',' + DomStrings.inputValue)
				// for( var i =0; i < fields.length; i++) {
				// 	fields[i].value = ""
				// }

				fields.forEach(function(current, index, array) {

					current.value = ""

				})

				fields[0].focus()
				
			},

			displayBudget: function(obj) {

				var type

				obj.budget > 0 ? type = 'inc' : type = 'exp'

				document.querySelector(DomStrings.budgetLabel).textContent = formatNumber(obj.budget,type)
				document.querySelector(DomStrings.incomeLabel).textContent = obj.totalInc
				document.querySelector(DomStrings.expenseLabel).textContent = obj.totalExp

				if (obj.percentage > 0 ) {

						document.querySelector(DomStrings.percentageLabel).textContent = obj.percentage + "%"
				} 
			
					else {
						document.querySelector(DomStrings.percentageLabel).textContent = "---"
					}

			},

			deleteListItem: function(selectorID) { //cannot delete an element. reach parent first then delete child.

				var el = document.getElementById(selectorID)

				el.parentNode.removeChild(el)

			},

				displayPercentage: function(percentage) {



					//this will give a list as o/p so we need queryselectorall
					var fields = document.querySelectorAll(DomStrings.expensePercLabel)

					nodeListForEach (fields, function(current,index) {
						if (percentage[index] > 0) {
							current.textContent = percentage[index] + "%"
							}
						else {
							current.textContent = "---"
						}

					})	


				},


				displayMonth: function() {
					var now, month, year, months

					now = new Date()

					month = now.getMonth()

					year = now.getFullYear()

					months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

					document.querySelector(DomStrings.dateLabel).textContent = months[month] + " " + year


				},


				changeBorder: function() {
					var fields = document.querySelectorAll(DomStrings.inputValue + "," + DomStrings.inputDescription + "," + DomStrings.inputType)
					nodeListForEach(fields, function(curr){
						curr.classList.toggle('red-focus')
					}) 


					document.querySelector(DomStrings.inputBtn).classList.toggle('red')


				},
				

				// formatNumber: function(num,type) {

				// 	var numSplit,int,dec
					
				// 	num = Math.abs(num)
				// 	num = num.toFixed(2)

				// 	numSplit = num.split(".")
				// 	int = numSplit[0]
				// 	if (int.length > 3) {

				// 		int = int.substr(0,int.length -3) + "," + int.substr(int.length - 3 , 3)
 			// 		}

 			// 		dec = numSplit[1]

 			// 		return (type === 'exp' ? '-' : "+") + int + "." + dec
				// },



	getDomStrings : function() {
		return DomStrings
	}
			


		}


})()



var Controller = (function(budgetcntrl, UIcntrl){


var setUpEventListeners = function() {

var DOM = UIcntrl.getDomStrings() 

document.querySelector(DOM.inputBtn).addEventListener("click", cntrlAddItem)

document.addEventListener("keypress", function(event){

if (event.keyCode === 13 || event.which === 13) {
	event.preventDefault(); // prevents the enter key from also triggering a click event
	cntrlAddItem()
		}
	})

 document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem)

 document.querySelector(DOM.inputType).addEventListener("change", UIcntrl.changeBorder)

}

	
	var updatePercentage = function() {

		budgetcntrl.calculatePercentage()

		var percentages = budgetcntrl.getPercent()

		UIcntrl.displayPercentage(percentages)
	}
		


	var updateBudget = function() {


		//1. Calculate budget

		budgetcntrl.calculateBudget()
		//2, Return Budget

		var budget = budgetcntrl.getBudget() // returned so now w ned a variable to store it

		//5. Display budget on UI
		UIcntrl.displayBudget(budget)
	}

	
	var cntrlAddItem = function() {

		var input, newItem


		//1. Get the field input data
		 input = UIcntrl.getInput()
		

		if (input.description !== ""  && !isNaN(input.value) && input.value > 0) {

			//2. Add item to budget controller
		newItem = budgetcntrl.addItem(input.type, input.description, input.value)


		//3. add item to UI
		UIcntrl.addListItem(newItem, input.type)
		UIcntrl.clearFields()

		//4. Calculate and update the budget
		updateBudget()

		//Calculate and update percentage
		updatePercentage()

		}

}
	

	var ctrlDeleteItem = function(event) {

		var itemID,type,ID,splitID

		itemID = event.target.parentNode.parentNode.parentNode.parentNode.id


		if (itemID)
		{

			splitID = itemID.split('-')
			type = splitID[0]
			ID = parseInt(splitID[1])

			//delete the item from data structure

			budgetcntrl.deleteItem(type, ID)

			// delete the item from UI

			UIcntrl.deleteListItem(itemID)


			// calculate the final budget after deletions
			updateBudget()

			//Calculate and update percentage
			updatePercentage()

		}

			

	}

		
	

return{



	init: function() {
		console.log("Application has started")
		UIcntrl.displayMonth()

		UIcntrl.displayBudget({

			budget: 0,
			totalInc: 0,
			totalExp: 0,
			percentage: -1

		})
		setUpEventListeners()
	}
}

})(budgetController,UIController )

Controller.init()
