"use strict";

window.onload = function () {
    const foodSelection = document.getElementById("foodSelection");
    const foodItems = document.getElementById("foodItems");

    function foodSection(category) {
        const selectedCategory = menu[category];

        foodItems.innerHTML = "";

        selectedCategory.forEach(item => {
            const option = document.createElement("option");
            option.textContent = item;
            foodItems.appendChild(option);
        });
    }

    foodSelection.addEventListener("change", function () {
        const selectedCategory = foodSelection.value;
        foodSection(selectedCategory);
    });
};
