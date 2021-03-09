fetch("grocery.json")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    appendData(data);
})


function appendData(data){
    var main=document.getElementById("vinayak");
    
    for(var i=0;i<data.length;i++){
       
        
        var p=document.createElement("div");
        p.classList.add("p-3","cards")
        let product=`
        <a onclick="setId(${data[i].id})"> 
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${data[i].image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">MRP: ${data[i].price}</p>
        </div>
        </div>
      </a>`
        p.innerHTML+=product;
        main.appendChild(p);
        
    }    
}    
function setId(id){
    //localStorage.setItem("prdId",id);
    window.document.location="landing.html"+"?id="+id;
}

var noti = document.querySelector