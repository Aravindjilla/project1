let image = document.createElement('img');
image.setAttribute('src', "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" );
let div = document.getElementById("container");
div.appendChild(image);

let para = document.createElement('p');
para.innerHTML = "this is a paragraph"
div.appendChild(para)

let heading = document.createElement("h1")
heading.innerHTML = "Document Object Model"
div.appendChild(heading)