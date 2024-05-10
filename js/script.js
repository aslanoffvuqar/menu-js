let tabButoons = document.querySelectorAll(".butoon-text")

for (let tabButoon of tabButoons) {
    tabButoon.addEventListener("click", function () {

        let currenActivetab = document.querySelector(`.tap-menu-text.active`);

        currenActivetab.classList.remove("active")

        let currentButoon = document.querySelector(".butoon-text.active")

        currentButoon.classList.remove("active")


        let butoonId = tabButoon.getAttribute("data-id")

        let nextTab = document.querySelector(`.tap-menu-text[data-id='${butoonId}']`)

        nextTab.classList.add("active")

        tabButoon.classList.add("active")
    });


}
