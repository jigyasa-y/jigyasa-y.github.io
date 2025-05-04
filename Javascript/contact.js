window.addEventListener('load', function () {

    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
 
  
  });
  

const open=document.querySelector('#navList');
const close=document.querySelector('#close_image');
const navigation =document.querySelector(".navigators");
let isDisplay=false;
open.addEventListener('click',()=>{
    if(isDisplay){
        navigation.classList.remove('pop_up');
        open.classList.remove('shift');
        open.classList.add('open_image');
      
        isDisplay=false;
    }
    else{

        navigation.classList.add('pop_up');
        open.classList.remove('open_image');
        open.classList.add('shift');
       
    
        isDisplay=true;
    }

})