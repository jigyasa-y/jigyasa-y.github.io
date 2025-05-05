const jigyasa={
    name:'Jigyasa Yadav',
about:'Hello! I’m Jigyasa Yadav from Nepal, currently pursuing a B.Tech in Information Technology. I’m passionate about exploring the intersection of technology and creativity, with a growing interest in software development, web technologies, and artificial intelligence. '
};

window.addEventListener('load', function () {

    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  

  });
  

current_user=jigyasa;
const open=document.querySelector('#navList');
const close=document.querySelector('#close_image');
const navigation =document.querySelector(".navigators");
const aboutMe=document.querySelector('#aboutMe');
const user_name=document.querySelector('#user_name');

user_name.textContent=`${current_user.name}`;
aboutMe.textContent=`${current_user.about}`;




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
