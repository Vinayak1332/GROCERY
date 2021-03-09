var index;
fetch("grocery.json")
.then(function(response){
    return response.json();
})
.then((data)=>{
    let param= new URL(document.location).searchParams;
    index=param.get("id")-1;
    appendData(data);
})
.catch(function (err){
    console.log(err);
});

function appendData(data){
    
    //var index=localStorage.getItem("prdId")-1;
    document.getElementById("image").src=data[index].image;
    document.getElementById("name").innerHTML=data[index].name;
    document.getElementById("price").innerHTML="MRP : "+data[index].price+ (" rs");
    document.getElementById("seller").innerHTML="Seller :   "+data[index].seller;
    document.getElementById("rating").innerHTML="Rating :   "+data[index].rating+`<i class="fa fa-star" style="color:gold"></i>`;
}