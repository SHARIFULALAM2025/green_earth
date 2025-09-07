const allPlant = () => {
    const url = 'https://openapi.programming-hero.com/api/plants';
    fetch(url)
        .then(res => res.json())
        .then(data => displayFunction(data.plants)
    )
}
allPlant();

const displayFunction = (plant) => {
    plant.forEach(tree => {
        const cardTree = document.getElementById('all_cards');
        const newCard = document.createElement("div");
        newCard.innerHTML = `

            <div class="bg-[rgba(255,255,255,1)] rounded-lg p-4">
                <figure><img src="${tree.image}" alt="" class="w-full h-60 rounded-lg" /></figure>
                <h1 class=""> ${tree.name}</h1>
                <p class="">${tree.description}</p>
                <div class="flex justify-between items-center mt-2">
                    <button class="px-3 py-1 rounded bg-[rgba(220,252,231,1)] text-[rgba(21,128,61,1)]">${tree.category}</button>
                    <span class="text-[rgba(21,128,61,1)] font-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${tree.price}</span>
                </div>
                <button onclick="addPrice('${tree.category}','${tree.price}')" class="w-full bg-[rgba(21,128,61,1)] mt-2 text-[rgba(255,255,255,1)] text-base font-medium rounded-[999px]">add to cart</button>
            </div>



        `
        cardTree.appendChild(newCard);

   })


}
//
let total = 0;
const addPrice = (category, price)=>{
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
const categoriesFun = (cate) => {
    cate.forEach(cate => {
        const OldCategories = document.getElementById('all_categories');
        const newCategories = document.createElement("div");
        newCategories.innerHTML = `
            <button onclick="loadCategoryPlant(${cate.id})" class="mt-4 ">${cate.category_name}</button>


        `
        OldCategories.appendChild(newCategories);

    })


}
const loadCategoryPlant = (id) => {
    const load = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(load)
        .then(res => res.json())
        .then(data => displayPlant(data.plants)
    )
}
const displayPlant = (plants) => {


    const myAllCard2 = document.getElementById("all_cards");
    myAllCard2.innerHTML = " ";
    plants.forEach(plant => {
        const newCard = document.createElement("div");
        newCard.innerHTML = `
        <div class="bg-[rgba(255,255,255,1)] rounded-lg p-4">
                <figure><img src="${plant.image}" alt="" class="w-full h-60 rounded-lg" /></figure>
                <h1 class=""> ${plant.name}</h1>
                <p class="">${plant.description}</p>
                <div class="flex justify-between items-center mt-2">
                    <button class="px-3 py-1 rounded bg-[rgba(220,252,231,1)] text-[rgba(21,128,61,1)]">${plant.category}</button>
                    <span class="text-[rgba(21,128,61,1)] font-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}</span>
                </div>
                <button onclick="addPrice('${plant.category}','${plant.price}')"  class="w-full bg-[rgba(21,128,61,1)] mt-2 text-[rgba(255,255,255,1)] text-base font-medium rounded-[999px]">add to cart</button>
            </div>


        `
        myAllCard2.appendChild(newCard);

    })

}