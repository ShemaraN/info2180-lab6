// JavaScript File
window.onload = function()
{
    var search = document.getElementById("search");
    
    var searchDic = document.querySelector("#searchb");
    
    var result= document.getElementById("result");
    
    var xmlhttp;
    
    searchDic.addEventListener("click", function(e){
       e.preventDefault();
       
       var textS= search.value;
       if (textS != ""){
       
              xmlhttp= new XMLHttpRequest();
              xmlhttp.onreadystatechange = getHTML;
              var link= "request.php?q=" + textS;
              xmlhttp.open("GET", link, true);
              xmlhttp.send();
       }
       else
       {
           
              result.innerHTML= xmlhttp.responseText;
       }
        
     
        
        function getHTML(){
            if (xmlhttp.readyState === XMLHttpRequest.DONE){
                if (xmlhttp.status === 200) {
                    //alert(xmlhttp.responseText);
                    result.innerHTML=xmlhttp.responseText;
                 
                    
                }
                
            }
    
        }
    });
};