const jigyasa={
    name:'Jigyasa Yadav',
about:'Backend Developer | Node.js | Express.js | TypeScript | REST APIs

Backend Developer with 6 months of onsite industry experience at Enyard Private Limited, focused on designing and developing backend services, RESTful APIs, database-driven applications, and application-level business logic.

Hands-on experience across API development, database integration, authentication and authorization, validation, user and role management, permissions, API integration, debugging, testing, and multi-tenant application functionality. Contributed to real-world projects including TimeX, Database Visualization, and XPos, with practical experience in developing and maintaining backend functionality. '
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
