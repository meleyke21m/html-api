let container=document.querySelector(".addTo")

window.onload=()=>{
    let cart=JSON.parse(localStorage.getItem("cart"));
    cart.forEach((item) => {
        let div = document.createElement("div");
        div.classList.add("apple")
        div.innerHTML = `<div class="succes">
                         <img src="${item.image}" alt="">
                         <p>bell pepper</p>
                         <p>&20000</p>
                         <button onclick="addTocart('${item.id}')">cc</button>
                        `;
        container.appendChild(div)
    });
}