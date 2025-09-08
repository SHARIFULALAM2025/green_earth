const allPlant = () => {
    const spin = document.getElementById("spine");
    spin.style.display = "flex";
    const url = 'https://openapi.programming-hero.com/api/plants';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayFunction(data.plants)
            spin.style.display="none"
        }
        )
}
allPlant();

const displayFunction = (plant) => {
    plant.forEach(tree => {
        const cardTree = document.getElementById('all_cards');
        const newCard = document.createElement("div");
        newCard.innerHTML = `

            <div class="bg-[rgba(255,255,255,1)] rounded-lg p-4">
                <figure><img src="${tree.image}" alt="" class="w-full h-56 rounded-lg" /></figure>
                <h1 onclick="cardHistory(${tree.id})" class="text-[#1F2937] mt-2 text-sm font-semibold"> ${tree.name}</h1>
                <p class="text-[#1F2937] text-xs mt-1">${tree.description}</p>
                <div class="flex justify-between items-center mt-2">
                    <button class="px-3 py-1 text-sm rounded bg-[rgba(220,252,231,1)] text-[#15803D]">${tree.category}</button>
                    <span class="text-[rgba(21,128,61,1)] font-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}</span>
                </div>
                <button onclick="addPrice('${tree.category}','${tree.price}')" class="w-full bg-[rgba(21,128,61,1)] py-1 mt-4 text-[rgba(255,255,255,1)] text-base font-medium rounded-[999px]">add to cart</button>
            </div>



        `
        cardTree.appendChild(newCard);

    })


}
//
let total = 0;
const addPrice = (category, price) => {
    const cartBox = document.getElementById("cart_item");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="flex justify-between items-center bg-[#F0FDF4] p-3 mb-2">
    <div class="">
    <h1 class="">${category}</h1>
    <p class="">${price}<i class="fa-solid fa-bangladeshi-taka-sign"></i></p>
    </div>
    <button class=" text-red-700" onclick="removePrice(this,${price})"><i class="fa-solid fa-xmark"></i></button>
    </div>
    `
    cartBox.appendChild(div);
    total += parseInt(price)
    document.getElementById("totalPrice").innerText = total;




}
const removePrice = (btn, price) => {
    btn.parentElement.remove();
    total -= price;
    document.getElementById("totalPrice").innerText = total;
}


// categories
const categories1 = () => {
    const data = 'https://openapi.programming-hero.com/api/categories';
    fetch(data)
        .then(res => res.json())
        .then(data => categoriesFun(data.categories)
        )
}
categories1()

const revColor = () => {
    const btn = document.querySelectorAll(".activeButton");

    btn.forEach((bun) => bun.classList.remove("active"));

}

const categoriesFun = (cate) => {
    const OldCategories = document.getElementById('all_categories');
    OldCategories.innerHTML = "";
    cate.forEach(cate => {

        const newCategories = document.createElement("div");
        newCategories.innerHTML = `
            <button  onclick="handleCategoryPlant(this,${cate.id})" class="mt-4 bg-[rgba(21,128,61,1)] text-[rgba(255,255,255,1)] activeButton p-2 rounded-lg">${cate.category_name}</button>


        `


        OldCategories.appendChild(newCategories);

    })

}
const handleCategoryPlant = (btn, categoryTd) => {
    revColor()
    btn.classList.add("active")
    loadCategoryPlant(categoryTd)
}

const loadCategoryPlant = (id) => {
    const spin = document.getElementById("spine");
    spin.style.display = "flex";
    const load = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(load)
        .then(res => res.json())
        .then(data => {
            displayPlant(data.plants)
            spin.style.display = "none";

        }
        )
}
const displayPlant = (plant) => {


    const myAllCard2 = document.getElementById("all_cards");
    myAllCard2.innerHTML = " ";
    plant.forEach(tree => {
        const newCard = document.createElement("div");
        newCard.innerHTML = `
        <div class="bg-[rgba(255,255,255,1)] rounded-lg p-4">
                <figure><img src="${tree.image}" alt="" class="w-full h-56 rounded-lg" /></figure>
                <h1 onclick="cardHistory(${tree.id})" class="text-[#1F2937] mt-2 text-sm font-semibold"> ${tree.name}</h1>
                <p class="text-[#1F2937] text-xs mt-1">${tree.description}</p>
                <div class="flex justify-between items-center mt-2">
                    <button class="px-3 py-1 rounded bg-[rgba(220,252,231,1)] text-[rgba(21,128,61,1)]">${tree.category}</button>
                    <span class="text-[rgba(21,128,61,1)] font-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}</span>
                </div>
                <button onclick="addPrice('${tree.category}','${tree.price}')"  class="w-full bg-[rgba(21,128,61,1)] mt-4 py-1 text-[rgba(255,255,255,1)] text-base font-medium rounded-[999px]">add to cart</button>
            </div>


        `
        myAllCard2.appendChild(newCard);

    })

}




//
const cardHistory = async (id) => {
    const spin = document.getElementById("spine");
    spin.style.display = "flex";
    const url = `https://openapi.programming-hero.com/api/plant/${id}`
    
    const res = await fetch(url)
    const details = await res.json()
    cardHistoryDisplay(details.plants);
    spin.style.display = "none";


}
const cardHistoryDisplay = (tree) => {
    const result = document.getElementById("card_details");
    result.innerHTML = `
    <figure><img src="${tree.image}" alt="" class="w-full h-60 rounded-lg" /></figure>
                <h1  class=""> ${tree.name}</h1>
                <p class="">${tree.description}</p>
                <div class="flex justify-between items-center mt-2">
                    <button class="px-3 py-1 rounded bg-[rgba(220,252,231,1)] text-[rgba(21,128,61,1)]">${tree.category}</button>
                    <span class="text-[rgba(21,128,61,1)] font-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}</span>
                </div>

    `
    document.getElementById("word_modal").showModal();
    console.log(tree);


}