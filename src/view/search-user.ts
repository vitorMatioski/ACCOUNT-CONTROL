const filterField = document.querySelector(".filter-form")! as HTMLInputElement;

filterField.addEventListener("input", function(){
    var userCards = document.querySelectorAll(".ul-lists");

    if (filterField.value.length > 0){
        for (var i = 0; i < userCards.length; i++){
            var userCard = userCards[i] as HTMLElement;
            var allLi = userCard.querySelectorAll("li")!;
            var searchString = "";
            let regex = new RegExp(this.value, "i");

            for(let i = 0; i < allLi.length; i++){
                searchString += allLi[i].textContent?.split(": ")[1] as string;
            }

            !regex.test(searchString) ? 
                userCard.style.display = "none" : 
                    userCard.style.display = "flex";
        }
    }else{
        for (var i = 0; i < userCards.length; i++) {
            var userCard = userCards[i] as HTMLElement;
            userCard.style.display = "flex";
        }
    }
});