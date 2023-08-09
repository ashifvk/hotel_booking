function validate(){
    let hname=document.getElementById("hname").value
    let item=document.getElementById("item").value
    let price=document.getElementById("price").value
    let contact=document.getElementById("contact").value
    let address=document.getElementById("address").value
var finame=/^([A-Za-z]+)$/
var laname=/^([A-Za-z]+)$/
var regtel=/^\d{10}$/
var pr=/^([0-9]+)$/



//////firstname
    if(hname==""){
        document.getElementById("hname").value="Cannot be null"
        document.getElementById("hname").style.color="red"
    }
    else if(finame.test(hname))
    {
        document.getElementById("hname").value="valid"
        
    }
    else{
        document.getElementById("hname").value="please enter a valid name"
        document.getElementById("hname").style.color="red"
    }

/////last name
    if(item==""){
        document.getElementById("item").value="Cannot be null"
        document.getElementById("item").style.color="red"
    }
    else if(laname.test(item))
    {
        document.getElementById("item").value="valid"
 
    }
    else{
        document.getElementById("item").value="please enter a valid last name"
        document.getElementById("item").style.color="red"
    }
    /////price
    if(price==""){
        document.getElementById("price").value="Cannot be null"
        document.getElementById("price").style.color="red"
    }
    else if(pr.test(price))
    {
        document.getElementById("price").value="valid"
 
    }
    else{
        document.getElementById("price").value="please enter a valid last name"
        document.getElementById("price").style.color="red"
    }


    
////////////phone no

        if(contact=="") {
                document.getElementById("contact").value="Cannot be null"
                document.getElementById("contact").style.color="red"
            }
        else if(regtel.test(contact))
            {
                document.getElementById("contact").value="valid"
                
            }
         else{
                document.getElementById("contact").value="enter a valid phone number"
                document.getElementById("contact").style.color="red"
            }

  
   /////address
   if(address=="") {
        document.getElementById("address").value="Cannot be null"
        document.getElementById("address").style.color="red"
    }
   

}