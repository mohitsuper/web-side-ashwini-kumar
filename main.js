



console.log('Hello World!');
var sidemeu = document.getElementById('sidemenu');
  
  function openemenu(){
    sidemenu.style.right ='-100%';
  }
  
  function closemenu(){
        sidemenu.style.right ='0px';

  }
  
  var mainImg = document.getElementById('mainImg');
  
  

var smallimg = document.getElementsByClassName('sallImg');
  
  
  smallimg[0].onclick = function(){
  mainImg.src = smallimg[0].src;
    
  }
  

    smallimg[1].onclick = function() {
      mainImg.src = smallimg[1].src;
    }  
    smallimg[2].onclick = function() {
        mainImg.src = smallimg[2].src;
      } 
      smallimg[3].onclick = function() {
          mainImg.src = smallimg[3].src;
        }

/*------------------------slider js----*/

