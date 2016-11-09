// JavaScript File
window.onload = function(){
    var search = document.getElementById("search");
    search.addEventListener("click", function(e){
       e.preventDefault();
       var xmlhttp= new XMLHttpRequest();
       xmlhttp.onreadystatechange = getHTML;
        
        xmlhttp.open("GET", "request.php?q=definition");
        xmlhttp.send();
        
        
        function getHTML(){
            if(xmlhttp.readyState === XMLHttpRequest.DONE){
                if (xmlhttp.status === 200) {
                    alert(xmlhttp.responseText);
                }
                
            }
        }
        
    });
};