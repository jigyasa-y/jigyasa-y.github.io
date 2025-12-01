const jigyasa={
  image:'../images/jigyasapic.png',
  suffix_title:'Jigyasa',
  name_title:'Yadav',
  name:'Jigyasa'
 }


 const sahil={
  image:'',
  suffix_title:'Md',
  name_title:'Sahil',
  name:'Sahil'
 }


 window.addEventListener('load', function () {

  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';

    


});


  

let currentUser =jigyasa;
const user_image=document.querySelector('.image_section');

const pr_image=document.querySelector("#pr1_image");
const pr_details=document.querySelector("#pr1_details");
const user_name=document.querySelector('#user_name');
const suffix=document.querySelector("#suffix");
const tname=document.querySelector('#name');
tname.textContent=`${currentUser.name_title}`
suffix.textContent=`${currentUser.suffix_title}`
 user_name.textContent=` ${currentUser.name}`;
const about_me=document.querySelector("#about_me");

about_me.textContent=`Currently learning to build dynamic and responsive web applications.I enjoy working with Web development technologies.
I'm passionate about solving problems through code and
 continuously improving my skills by working on personal 
 projects and exploring new tools and frameworks.`


const texts = ["Android Developer ", "Web Developer ", "Creative Coder ","Mern Stack developer "];
    const typingSpeed = 50;
    const deletingSpeed = 60;
    const delayBetween = 1000;

    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    const target = document.getElementById("profession");

    function type() {
      currentText = texts[index];

      if (isDeleting) {
        target.textContent = currentText.substring(0, charIndex--);
      } else {
        target.textContent = currentText.substring(0, charIndex++);
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, delayBetween);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        setTimeout(type, 300);
      } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
      }
    }
setTimeout(() => {
    type(); 
}, 2000);


 
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
