const loadCategory=()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res=>res.json())
    .then(d=>displayCategory(d.categories))
}
const loadAllPlants=()=>{
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res=>res.json())
    .then(d=>displayAllPlants(d.plants))
}


const displayAllPlants=(plants)=>{
    // console.log(plants)
    
    const cartContainer=document.getElementById("cart-container")

    plants.forEach(plant=>{
        // console.log(plant.id)

        const cartDiv=document.createElement('div')
        cartDiv.innerHTML=`
        <div class="w-[320px] max-md:w-full h-full rounded-2xl shadow-2xl ">
            <img class="w-[320px] max-md:w-full rounded-t-xl h-[200px]" src="${plant.image}" alt="">
            <div class="p-2">
                <h1 class="text-xl font-bold my-2">${plant.name}</h1>
                <p class="text-gray-500 line-clamp-3">${plant.description}</p>
                <div class="flex justify-between my-2">
                    <button class="bg-[#dcfce7] rounded-2xl p-1 font-medium text-green-700 hover:cursor-pointer">${plant.category}</button>
                    <p class="font-bold mr-3">$<span>${plant.price}</span></p>
                </div>
                <button class="bg-green-800 w-full rounded-full text-white p-1 font-semibold mb-2 hover:cursor-pointer">add to cart</button>
            </div>
        </div>
        `
        cartContainer.append(cartDiv)
    })
}
loadAllPlants()

const removeActiveBtn=()=>{
    const lessonBtn=document.querySelectorAll(".lesson-btn")
    // console.log(lessonBtn)
    lessonBtn.forEach(btn=>{
        btn.classList.remove("active")
    })
}

const loadSeparatePlant=(id)=>{
    // console.log(id)
    const url=`https://openapi.programming-hero.com/api/category/${id}`
    // console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(info=>{
        removeActiveBtn()
        const lessonBtn=document.getElementById(`lesson-btn-${id}`)
        // console.log(lessonBtn)
        lessonBtn.classList.add("active")
        displaySeparatePlant(info.plants)
    })
}




const displaySeparatePlant=(d)=>{
    // console.log(d)
    const cartContainer=document.getElementById("cart-container")
    cartContainer.innerHTML=""

    d.forEach(p=>{
        // console.log(p.name)

        const cD=document.createElement('div')
        cD.innerHTML=`
        <div class="w-[320px] max-md:w-full h-[420px] rounded-2xl shadow-2xl ">
            <img class="w-[320px] max-md:w-full rounded-t-xl h-[200px]" src="${p.image}" alt="">
            <div class="p-2">
                <h1 class="text-xl font-bold my-2">${p.name}</h1>
                <p class="text-gray-500 line-clamp-3">${p.description}</p>
                <div class="flex justify-between my-2">
                    <button class="bg-[#dcfce7] rounded-2xl p-1 font-medium text-green-700 hover:cursor-pointer">${p.category}</button>
                    <p class="font-bold mr-3">$<span>${p.price}</span></p>
                </div>
                <button class="bg-green-800 w-full rounded-full text-white p-1 font-semibold mb-2 hover:cursor-pointer">add to cart</button>
            </div>
        </div>
        `
        cartContainer.append(cD)
    })
}


const displayCategory=(data)=>{
    // console.log(data)
    const categoryBtn=document.getElementById("category-btn")
    categoryBtn.innerHTML=""
    data.forEach(d=>{
        // console.log(d.category_name)

        const btn=document.createElement("button")
        btn.innerHTML=`
            <button id="lesson-btn-${d.id}" onClick="loadSeparatePlant(${d.id})" class=" w-full text-start text-xl p-1 rounded-lg hover:bg-green-800 hover:text-white lesson-btn">${d.category_name}</button>
        `
        categoryBtn.append(btn)
    })
}
loadCategory()