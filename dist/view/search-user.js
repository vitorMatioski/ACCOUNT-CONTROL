"use strict";
const filterField = document.querySelector(".filter-form");
filterField.addEventListener("input", function () {
    var _a;
    var userCards = document.querySelectorAll(".ul-lists");
    if (filterField.value.length > 0) {
        for (var i = 0; i < userCards.length; i++) {
            var userCard = userCards[i];
            var allLi = userCard.querySelectorAll("li");
            var searchString = "";
            let regex = new RegExp(this.value, "i");
            for (let i = 0; i < allLi.length; i++) {
                searchString += (_a = allLi[i].textContent) === null || _a === void 0 ? void 0 : _a.split(": ")[1];
            }
            !regex.test(searchString) ?
                userCard.style.display = "none" :
                userCard.style.display = "flex";
        }
    }
    else {
        for (var i = 0; i < userCards.length; i++) {
            var userCard = userCards[i];
            userCard.style.display = "flex";
        }
    }
});
