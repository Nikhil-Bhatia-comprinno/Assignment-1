            // Getting amount through prompt on clicking "get a loan" button




 var bankbalance=document.getElementById('bankbalance')

      

var numberofloan=0
document.getElementById('loanbtn').addEventListener('click',  ()=>{
    
    
   
    loanamount=parseInt( prompt("Enter the amount of Loan you need."))
    


    var loanbalance=parseInt(document.getElementById('loanbalance').innerHTML);

    
                // constraint number-1 and constraint number-2 for get a loan button

    if (loanamount<=2*parseInt((bankbalance).innerHTML)){

        

        if( loanbalance==0){
            numberofloan=numberofloan+1
            if (!buylaptop && numberofloan>1){
                alert("You cannot get more than one loan before buying a laptop")
            }
   document.getElementById('loanbalance').innerHTML=loanamount+"Rs.";

   document.getElementById('loancard').style.display='block';}
            else{
                alert("Please repay your previous loan amount")
            }
    }
    else{
        alert("You can't take loan more than double of your bank balance ")
    }

})


                                // increase pay balance by 100 on clicking "work" button




document.getElementById('workbtn').addEventListener('click',()=>{
    
    document.getElementById('paybalance').innerHTML=parseInt( document.getElementById('paybalance').innerHTML)+100;
    
     document.getElementById('paybalance').innerHTML=document.getElementById('paybalance').innerHTML+"Rs.";

     paybalance=parseInt(document.getElementById('paybalance').innerHTML)
    
    

});



                                    // Transfering paybalance to bankbalance on clicking "bank" button




document.getElementById('bankbtn').addEventListener('click',()=>{

    if( parseInt( document.getElementById('loanbalance').innerHTML)>0){

        document.getElementById('bankbalance').innerHTML=parseInt(document.getElementById('bankbalance').innerHTML)+(0.9)*parseInt((document.getElementById('paybalance').innerHTML))+"Rs.";

        document.getElementById('loanbalance').innerHTML=parseInt(document.getElementById('loanbalance').innerHTML)-(0.1)*parseInt((document.getElementById('paybalance').innerHTML))+"Rs.";
    }
    else{
    document.getElementById('bankbalance').innerHTML=parseInt(document.getElementById('bankbalance').innerHTML)+parseInt( document.getElementById('paybalance').innerHTML)+"Rs."}
    //Reseting the amount of pay after transfering it to bank balance
    document.getElementById('paybalance').innerHTML=0;
 });




                            // Repay Button


document.getElementById('repaybtn').addEventListener('click',()=>{
    if(parseInt(document.getElementById('loanbalance').innerHTML)> parseInt(document.getElementById('paybalance').innerHTML)){
    document.getElementById('loanbalance').innerHTML=parseInt(document.getElementById('loanbalance').innerHTML)-parseInt(document.getElementById('paybalance').innerHTML)+"Rs."}
    
    else{
        document.getElementById('paybalance').innerHTML=parseInt(document.getElementById('paybalance').innerHTML)-parseInt(document.getElementById('loanbalance').innerHTML)+"Rs.";
         document.getElementById('loanbalance').innerHTML=0+"Rs."
    }
});



                                        // Laptops dropdown list



function getlist(){
    url="https://noroff-komputer-store-api.herokuapp.com/computers";
    fetch(url).then((response)=>{
        return response.json()
    }).then((data)=>{

        // console.log(data)
        
        for (var i=0;i<(data.length);i++){
            var opt=data[i]['title']
            var ele=document.createElement("option")
            ele.textContent=opt;
            ele.value=opt;
            document.getElementById('select').appendChild(ele);
            }})}
getlist()



        function selected(){
            document.getElementById('msgbox1').style.display='none' 
            document.getElementById('msgbox2').style.display='none' 
            
            url="https://noroff-komputer-store-api.herokuapp.com/computers";
    fetch(url).then((response)=>{
        return response.json()
    }).then((data)=>{





        var e=document.getElementById('select')    
        var selectedItem=e.options[e.selectedIndex].text
        var price= data[e.selectedIndex-1]['price']
        var specs= data[e.selectedIndex-1]['specs']
        var des= data[e.selectedIndex-1]['description']
        var img= data[e.selectedIndex-1]['image']
        


        document.getElementById('title').innerHTML=selectedItem;
        document.getElementById('special').innerHTML=specs
        document.getElementById('price').innerHTML=price + "Rs." // price of the laptop
        document.getElementById('description').innerHTML=des
        document.getElementById('title2').innerHTML=selectedItem
        document.getElementById('image').src="https://noroff-komputer-store-api.herokuapp.com/"+img  
    
    })}



                                // Buying a laptop

var buylaptop=false    // boolean variable to check whether the laptop is bought or not and use it in loan getting section
document.getElementById('buybtn').addEventListener('click',()=>{

    document.getElementById('msgbox1').style.display='none'
    document.getElementById('msgbox2').style.display='none'
    if (parseInt(price.innerHTML)<=parseInt(document.getElementById('bankbalance').innerHTML)){
        buylaptop=true
        document.getElementById('bankbalance').innerHTML=parseInt(document.getElementById('bankbalance').innerHTML)-parseInt(price.innerHTML)+"Rs."
        document.getElementById('msgbox1').style.display='block'
    }
    else{
        document.getElementById('msgbox2').style.display='block'



    }







})









    


























