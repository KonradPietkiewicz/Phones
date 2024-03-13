let phone = {
    data: [
       {
        roomName: "Dział Informatyki",
        dzial: "Administracja",
        roomNumber: "1"
       },
       {
        roomName: "Sekretariat Neurologii",
        dzial: "Sekretariat",
        roomNumber: "2"
       },
       {
        roomName: "Oddział Urologii",
        dzial: "Oddział",
        roomNumber: "50"
       },
    ],
};

for (let i of phone.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.dzial, "hide");

    let container = document.createElement('div');
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("room-name");
    name.innerText = i.roomName.toUpperCase();
    container.appendChild(name);

    let phnumber = document.createElement("h4");
    phnumber.classList.add("phnumber");
    phnumber.innerText = i.roomNumber.toUpperCase();
    container.appendChild(phnumber);
    
    card.appendChild(container);
    document.getElementById("hospital").appendChild(card)
}

function filterPhone(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add('active');
        } else {
            button.classList.remove('active')
        }
    })

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if(value == "all") {
            element.classList.remove("hide") 
        } else {
          if (element.classList.contains(value)) {
                element.classList.remove("hide")
          } else {
                element.classList.add("hide")
          }
        }
    })
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById
    ("search-input").value;
    let elements = document.querySelectorAll(".room-name");
    let cards = document.querySelectorAll('.card');

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide")
        }
    })
})

/*window.onload = () => {
    filterPhone("all");
}*/