function addMeal(foodName, price) {
    //create a new list to store the names of the dishes selected
    const order = document.createElement('li');
    order.textContent = `${foodName} $${price}`;

    //store the parent element to append to
    const list = document.getElementById('meal_plan');

    //append child element to parent element
    list.appendChild(order);

    
    //Calculate the price
    const total = document.getElementById('total_amount').textContent;
    //convert the string to number
    const currentTotal = parseFloat(total);
    //add the cost of the dish added
    const newTotal = currentTotal + price;
    //store the new total
    document.getElementById('total_amount').textContent = newTotal.toFixed(2);
    order.onclick = function() {
        list.removeChild(list.firstElementChild);
        const subtract = newTotal - price;
        document.getElementById('total_amount').textContent = subtract.toFixed(2);
    }
}

