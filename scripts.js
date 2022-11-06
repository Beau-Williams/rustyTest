$(function(){
    let shoppingList = [];
    let products = [
        {
            "name" : "apples",
            "dept" : "produce",
            "price" : 1.25,
            "qty" : 25,
            "img" : "rustyTest/imgs/dig.jpg"
        },
        {
            "name" : "bananas",
            "dept" : "produce",
            "price" : 0.69,
            "qty" : 100,
            "img" : "/imgs/dig.jpg"
        },
        {
            "name" : "oranges",
            "dept" : "produce",
            "price" : 1.50,
            "qty" : 125,
            "img" : "/imgs/dig.jpg"
        },
        {
            "name" : "hiland whole milk",
            "dept" : "dairy",
            "price" : 4.99,
            "qty" : 25,
            "img" : "/imgs/dig.jpg"
        },
        {
            "name" : "hiland 2% milk",
            "dept" : "dairy",
            "price" : 4.25,
            "qty" : 30,
            "img" : "/imgs/dig.jpg"
        },
        {
            "name" : "digiorno frozen pizza",
            "dept" : "frozen",
            "price" : 5.25,
            "qty" : 20,
            "img" : "/imgs/dig.jpg"
        }
        
    ];
    
    $("#sub").on("click", function(){
        let search = $("#search").val();
        
        for(let i in products){
            if(products[i].name.includes(search)){
                $("#resultList").append(
                    
                    "<li id='items'>"+"<img src='" + products[i].img + "'>" +products[i].name +
                        "<br>&emsp;Department: " + products[i].dept +
                        "<br>&emsp;Price: " + products[i].price +
                        "<br>&emsp;Qty in Stock" + products[i].qty +
                    "</li>"   
                    );
            }
        }
        
    })
    $("#del").on("click", function(){
        $("#resultList").empty();
    })

  





})
