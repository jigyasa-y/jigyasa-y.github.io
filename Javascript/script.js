// const jigyasa={
//   image:'../images/jigyasapic.png',
//   suffix_title:'Jigyasa',
//   name_title:'Yadav',
//   name:'Jigyasa'
//  }
//  let name="Jigyasa";
const hireMe=document.querySelector("#hire_me");
const resumeLink=document.querySelector("#resumeDownload");
const image=document.querySelector(".image_section");

 window.addEventListener('load', async function () {

  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';

    


  try{
const response=await axios.get("https://admin-server-2.onrender.com/api/response/details");

const [name1,name2]=response.data.user.name.split(" ");
 user_name.textContent=:+name1;
 suffix.textContent=`<${name1}>`;
 tname.textContent=`</${name2}>`;


 about_me.textContent=response.data.user.about;
image.src=response.data.user.image;
resumeLink.href=response.data.user.resume;


 console.log(response.data.user);
  }
  catch(error){
    console.log("error in message",error.message);
  }

});


  


const user_image=document.querySelector('.image_section');

const pr_image=document.querySelector("#pr1_image");
const pr_details=document.querySelector("#pr1_details");
const user_name=document.querySelector('#user_name');
const suffix=document.querySelector("#suffix");
const tname=document.querySelector('#name');
tname.textContent=`Yadav`
suffix.textContent=`Jigyasa`

const about_me=document.querySelector("#about_me");




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

