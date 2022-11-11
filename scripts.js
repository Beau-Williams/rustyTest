$(function(){
    let shoppingList = [];
    let resultList =[];
    let products = [
        {
            "name" : "Apples",
            "dept" : "Produce",
            "price" : 1.25,
            "qty" : "In Stock",
            "img" : "imgs/apple.jpg"
        },
        {
            "name" : "Bananas",
            "dept" : "Produce",
            "price" : 0.69,
            "qty" : "In Stock",
            "img" : "imgs/banana.jpg"
        },
        {
            "name" : "Carrots",
            "dept" : "Produce",
            "price" : 1.55,
            "qty" : "In Stock",
            "img" : "imgs/carrots.jpg"
        },
        {
            "name" : "Broccoli",
            "dept" : "Produce",
            "price" : 4.99,
            "qty" : "In Stock",
            "img" : "imgs/broc.jpg"
        },
        {
            "name" : "Hiland Whole Milk",
            "dept" : "Dairy",
            "price" : 4.25,
            "qty" : 30,
            "img" : "imgs/milk.jpg"
        },
        {
            "name" : "Hiland 2% Milk",
            "dept" : "Dairy",
            "price" : 4.25,
            "qty" : 20,
            "img" : "imgs/2milk.jpg"
        },
        {
            "name" : "Nesquik Chocolate Milk - Single Serving",
            "dept" : "Dairy",
            "price" : 1.55,
            "qty" : 20,
            "img" : "imgs/nes.jpg"
        },
        {
            "name" : "Farm Fresh Eggs",
            "dept" : "Dairy",
            "price" : 3.25,
            "qty" : 20,
            "img" : "imgs/eggs.jpg"
        },
        {
            "name" : "Digiorno Frozen Pizza",
            "dept" : "Frozen",
            "price" : 6.99,
            "qty" : 20,
            "img" : "imgs/dig.jpg"
        },
        {
            "name" : "Ben and Jerry's Ice Cream",
            "dept" : "Frozen",
            "price" : 5.25,
            "qty" : 20,
            "img" : "imgs/ben.jpg"
        },
        {
            "name" : "Gordon's Fish Fillets",
            "dept" : "Frozen",
            "price" : 4.25,
            "qty" : 20,
            "img" : "imgs/gordons.jpg"
        },
        {
            "name" : "Bird's Eye Frozen Broccoli",
            "dept" : "Frozen",
            "price" : 2.15,
            "qty" : 20,
            "img" : "imgs/frozbroc.jpg"
        },
        {
            "name" : "Sweet Baby Ray's Barbecue Sauce - BBQ",
            "dept" : "Dry Goods",
            "price" : 3.25,
            "qty" : 20,
            "img" : "imgs/bbq.jpg"
        },
        {
            "name" : "Ranch Style Canned Beans",
            "dept" : "Dry Goods",
            "price" : 1.25,
            "qty" : 20,
            "img" : "imgs/ranch.jpg"
        },
        {
            "name" : "Hidden Valley Ranch",
            "dept" : "Dry Goods",
            "price" : 3.75,
            "qty" : 20,
            "img" : "imgs/hvranch.jpg"
        },
        {
            "name" : "Prego Spaghetti Sauce",
            "dept" : "Dry Goods",
            "price" : 4.25,
            "qty" : 20,
            "img" : "imgs/prego.jpg"
        },
        {
            "name" : "Mahatma Grain Rice",
            "dept" : "Dry Goods",
            "price" : 2.85,
            "qty" : 20,
            "img" : "imgs/rice.jpg"
        },
        {
            "name" : "Barilla Spaghetti Noodles",
            "dept" : "Dry Goods",
            "price" : 1.75,
            "qty" : 20,
            "img" : "imgs/spa.jpg"
        },
        {
            "name" : "Dawn Dish Soap",
            "dept" : "Home Goods",
            "price" : 3.65,
            "qty" : 20,
            "img" : "imgs/dawn.jpg"
        },
        {
            "name" : "Charmin Extra Soft Toilet Paper",
            "dept" : "Home Goods",
            "price" : 4.75,
            "qty" : 20,
            "img" : "imgs/charmin.jpg"
        },
        {
            "name" : "Snuggle Dryer Sheets",
            "dept" : "Home Goods",
            "price" : 4.00,
            "qty" : 20,
            "img" : "imgs/snug.jpg"
        },
        {
            "name" : "Tide Pods",
            "dept" : "Home Goods",
            "price" : 4.99,
            "qty" : 20,
            "img" : "imgs/tide.jpg"
        },
        {
            "name" : "Lean Ground Beef",
            "dept" : "Meat",
            "price" : 3.00,
            "qty" : "In Stock",
            "img" : "imgs/ground.jpg"
        },
        {
            "name" : "Ham",
            "dept" : "Meat",
            "price" : 4.00,
            "qty" : "In Stock",
            "img" : "imgs/ham.jpg"
        },
        {
            "name" : "Turkey",
            "dept" : "Meat",
            "price" : 6.00,
            "qty" : "In Stock",
            "img" : "imgs/turkey.jpg"
        },
        {
            "name" : "Pork Chop",
            "dept" : "Meat",
            "price" : 4.25,
            "qty" : "In Stock",
            "img" : "imgs/porkchop.jpg"
        }
        
    ];
    
    let quotes = [
        {
            "quote": "I love spending my time at Rusty's!",
            "name": "Diana King"
        },
        {
            "quote": "I can get in and out, no problem!",
            "name": "John Smith"
        }
    ]
    //Product Search Functionality
    $("#sub").on("click", function(){
        $("#result").empty();
        let search = $("#search").val();
        //had to add a variable for the addList ID to allow the click events to register and record value properly
        //to format in css #prodInfo button {}
        let j =0;
        for(let i in products){
            
            if(products[i].name.toLowerCase().includes(search.toLowerCase())){
                
                $("#result").append(
                    "<div id='prodDisp'>" +
                    "<img src='" + products[i].img + "' id='prodImg'>" + 
                        '<div id=prodInfo">' +
                            "<p id='prodName'>&emsp;" + products[i].name + "</p>" +
                            "<p id='prodDept'>&emsp;Dept: " +products[i].dept + "</p>" +
                            "<p id='prodPric'>&emsp;Price: " + products[i].price + "</p>" +
                            "<p id='prodQty'>&emsp;Qty in Stock: " + products[i].qty + "</p>" +
                            "<button id='addList"+j+"' value='' >Add to Shopping List</button>" +
                        "</div>" +
                    "</div>"
                    );
                    //adds button that pushes that item to shopping list
                $('#addList' + j).on('click', event => {
                    let n = products[i].name;
                    shoppingList.push(n);
                    
                    
                })
                j++;
                    
            }
        }
        if($("#result").length == 0){
            $("#resultList").append(
                "<p style='color:red'>No matching items</p>"
            )
         }
        
        
    })
  

  //Department Search Functionality
  $("#meat").on("click", function(){
    $("#departmentResult").empty();
    for(let i in products){
        if(products[i].dept.includes("Meat")){
            $("#departmentResult").append(
                "<div id='prodDisp'>" +
                    "<img src='" + products[i].img + "' id='prodImg'>" + 
                        '<div id="prodInfo">' +
                            "<p id='prodName'>&emsp;" + products[i].name + "</p>" +
                            "<p id='prodDept'>&emsp;Dept: " +products[i].dept + "</p>" +
                            "<p id='prodPric'>&emsp;Price: " + products[i].price + "</p>" +
                            "<p id='prodQty'>&emsp;Qty in Stock: " + products[i].qty + "</p>" +
                        "</div>" +
                "</div>"
            )
            
        }
    }
  })
  $("#home").on("click", function(){
    $("#departmentResult").empty();
    for(let i in products){
        if(products[i].dept.includes("Home")){
            $("#departmentResult").append(
                "<div id='prodDisp'>" +
                    "<img src='" + products[i].img + "' id='prodImg'>" + 
                        '<div id="prodInfo">' +
                            "<p id='prodName'>&emsp;" + products[i].name + "</p>" +
                            "<p id='prodDept'>&emsp;Dept: " +products[i].dept + "</p>" +
                            "<p id='prodPric'>&emsp;Price: " + products[i].price + "</p>" +
                            "<p id='prodQty'>&emsp;Qty in Stock: " + products[i].qty + "</p>" +
                        "</div>" +
                "</div>"
            )
            
        }
    }
  })
  $("#dairy").on("click", function(){
    $("#departmentResult").empty();
    for(let i in products){
        if(products[i].dept.includes("Dairy")){
            $("#departmentResult").append(
                "<div id='prodDisp'>" +
                    "<img src='" + products[i].img + "' id='prodImg'>" + 
                        '<div id="prodInfo">' +
                            "<p id='prodName'>&emsp;" + products[i].name + "</p>" +
                            "<p id='prodDept'>&emsp;Dept: " +products[i].dept + "</p>" +
                            "<p id='prodPric'>&emsp;Price: " + products[i].price + "</p>" +
                            "<p id='prodQty'>&emsp;Qty in Stock: " + products[i].qty + "</p>" +
                        "</div>" +
                "</div>"
            )
            
        }
    }
  })
  $("#frozen").on("click", function(){
    $("#departmentResult").empty();
    for(let i in products){
        if(products[i].dept.includes("Frozen")){
            $("#departmentResult").append(
                "<div id='prodDisp'>" +
                    "<img src='" + products[i].img + "' id='prodImg'>" + 
                        '<div id="prodInfo">' +
                            "<p id='prodName'>&emsp;" + products[i].name + "</p>" +
                            "<p id='prodDept'>&emsp;Dept: " +products[i].dept + "</p>" +
                            "<p id='prodPric'>&emsp;Price: " + products[i].price + "</p>" +
                            "<p id='prodQty'>&emsp;Qty in Stock: " + products[i].qty + "</p>" +
                        "</div>" +
                "</div>"
            )
            
        }
    }
  })
  $("#produce").on("click", function(){
    $("#departmentResult").empty();
    for(let i in products){
        if(products[i].dept.includes("Produce")){
            $("#departmentResult").append(
                "<div id='prodDisp'>" +
                    "<img src='" + products[i].img + "' id='prodImg'>" + 
                        '<div id="prodInfo">' +
                            "<p id='prodName'>&emsp;" + products[i].name + "</p>" +
                            "<p id='prodDept'>&emsp;Dept: " +products[i].dept + "</p>" +
                            "<p id='prodPric'>&emsp;Price: " + products[i].price + "</p>" +
                            "<p id='prodQty'>&emsp;Qty in Stock: " + products[i].qty + "</p>" +
                        "</div>" +
                "</div>"
            )
            
        }
    }
  })
//show shopping list array
  $("#showList").on("click",function(){
   // window.localStorage.setItem('item', JSON.stringify(shoppingList))
    for(let i of shoppingList){
        console.log(i);
        
    }
   // console.log(JSON.parse(window.localStorage.getItem('item')))
  })



})
