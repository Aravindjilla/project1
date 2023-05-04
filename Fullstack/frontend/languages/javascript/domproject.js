let disArray = [
    
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false,
    "img":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false,
    "img":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false,
    "img":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true,
    "img":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false,
    "img":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  }];
    
    let newArray = JSON.parse(JSON.stringify(disArray));
    console.log(newArray);
    newArray.map((ele)=>{
        let para = document.createElement('p');
        para.innerHTML = ele.title;
        let div = document.getElementById("container");
        div.appendChild(para);
         let image = document.createElement('img');
        image.src=ele.img;
        image.style.width='200px'
        div.appendChild(image);
    });