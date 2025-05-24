
const projects={
    item:[{img:"../images/pr1.jpeg", about:"First project",link:''}
      ,
      {
        img:"../images/pr2.jpeg",about:"second project",link:''
      } ,
      {
        img:"../images/pr3.jpeg",about:"Three project",link:''
      } ,
      {
        img:"../images/pr4.jpeg",about:"Fourth project",link:''
      } ,
      {
        img:"../images/pr5.jpeg",about:"Fifth project",link:''
      } ,
      {
        img:"../images/pr6.jpeg",about:"Sixth project",link:''
      },{
        img:"../images/pr1.jpeg",about:"Seventh project",link:''
      }
      ,
      {
        img:"../images/pr2.jpeg",about:"second project",link:''
      } ,
      {
        img:"../images/pr3.jpeg",about:"Three project",link:''
      } ,
      {
        img:"../images/pr4.jpeg",about:"Fourth project",link:''
      } 
    ]
      
    };
  

    window.addEventListener('load', function () {

      const preloader = document.getElementById('preloader');
      preloader.style.display = 'none';
    
        
    
    
    });
    


function createSection(user){

    const image=new Image();
    image.src=`${user.img}`;
    image.id='project_image';
  
    const project=document.createElement('div');
    project.className='web_apps';
  const detailsDiv=document.createElement('div');
  detailsDiv.id='project_details';
  const anch =document.createElement('a');
  anch.href=`${user.link}`;
  anch.textContent='Visit'; 
  const h1=document.createElement('h1');
  h1.id='project_name';
   h1.textContent=`${user.about}
   `;
   detailsDiv.appendChild(h1);
   detailsDiv.appendChild(anch);
  project.appendChild(image);
  project.appendChild(detailsDiv);

  document.querySelector('.wrapper').appendChild(project);
  console.log(project);
  console.log(detailsDiv);
  
  
  }
  
  for(let i=0;i<projects.item.length;i++){
    createSection(projects.item[i]);
  }

 
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
