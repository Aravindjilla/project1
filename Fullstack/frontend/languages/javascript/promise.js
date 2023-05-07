
async function apiFetch(){
    let dataApi=await fetch('https://fakestoreapi.com/products')
    dataApi=await dataApi.json()
    let newArray = JSON.parse(JSON.stringify(dataApi));
    console.log(newArray)
    newArray.map((ele)=>{
        let para = document.createElement('p');
        para.innerHTML = ele.title;
        let div = document.getElementById("container");
        div.appendChild(para);
         
    });    
}
apiFetch()