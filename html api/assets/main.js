let container = document.querySelector(".apple")

let page=1;
let limit=4;
let Alldata;
async function getApi() {
    try {
      let loading=true;
      if(loading){
        container.innerHTML=`<h1>loading..</h1>`
      }
      limit=limit+4
        let { data } = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss?page=${page}&limit=${limit}`)
        loading=false
        Alldata=data;
        
        container.innerHTML=""
        data.forEach((item) => {
            let div = document.createElement("div");
            div.classList.add("apple")
            div.innerHTML = `<div class="succes">
                             <img src="${item.image}" alt="">
                             <p>bell pepper</p>
                             <p>&20000</p>
                             <button onclick="addTocart('${item.id}')">cc</button>
                            `
            container.appendChild(div)
        })
    } catch (error) {
        console.log(error);

    }
}
getApi()

let button=document.getElementById("button")
button.addEventListener("click",getApi)

function addTocart(id){
  
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  if(id){
    let result = Alldata.find((item)=>item.id==id);
    if(result){
      cart.push(result)
      localStorage.setItem("cart",JSON.stringify(cart))
    }
  }

}