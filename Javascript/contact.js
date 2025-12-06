const fb=document.querySelector("#instagram");
const gh=document.querySelector("#github");
const li=document.querySelector("#linked_in");
const email=document.querySelector("#email");


window.addEventListener('load', async function () {

    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    try{
const response=await axios.get("https://admin-server-2.onrender.com/api/response/contacts");
console.log(response.data.contact);
fb.href=response.data.contact.facebook;
gh.href=response.data.contact.github;
li.href=response.data.contact.linkedln;
email.textContent=response.data.contact.mobile;
email.href=`mailto:${response.data.contact.mobile}`;



    }
    catch(error){
      console.log("error in message",error.message);
    }







 
  
  });
  

const open=document.querySelector('#navList');
const close=document.querySelector('#close_image');
const navigation =document.querySelector(".navigators");
let isDisplay=false;
open.addEventListener('click',(e)=>{
    e.stopPropagation();
 navigation.classList.toggle('pop_up');
 open.classList.toggle('shift');
 open.classList.toggle('open_image');
  
  })

  document.addEventListener('click',()=>{
    if(navigation.classList.contains('pop_up')){
      navigation.classList.remove('pop_up');
      open.classList.remove('shift');
      open.classList.add('open_image');
      
    }
  })
