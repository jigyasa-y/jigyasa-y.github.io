
window.addEventListener('load', async function() {

  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';

    

//   try{
// const response=await axios.get("http://localhost:5000/api/response/skills")
// console.log(response.data)
//   }
//   catch(error){
//     console.log("error in message",error.message);
//   }


});


const front_end_details={
    details:[{img:'../images/html-5.png' , id:'html'},
  {img:'../images/css-3.png',id:'css'},
  {img:'../images/js.png',id:'js'},
  {img:'../images/atom.png',id:'react'},
  {img:'../images/node-js.png',id:'node'}
  
    ]
  }
  const back_end_details={
    details:[{img:'../images/node-js.png' , id:'html'},
        {img:'../images/backend.png',id:'css'},
        {img:'../images/python.png',id:'js'},
        {img:'../images/java.png',id:'react'},
        {img:'../images/c-sharp.png',id:'node'},

        {img:'../images/ruby.png',id:'node'}


        
      
        ]
  }
  const other_details={
    details:[{img:'../images/docker.png' , id:'docker'},
        {img:'../images/github.png',id:'css'},
  
        {img:'../images/atom.png',id:'react'},
        {img:'../images/bootstrap.png',id:'react'},
        {img:'../images/angular.png',id:'react'},
        {img:'../images/kotlin.png',id:'react'},
       
        
      
        ]
  }
  
  function front_end(data){
    const image=new Image();
     image.src=`${data.img}`;
     image.id=`${data.id}`;
     document.querySelector('.front-end-wrapper').appendChild(image);
  
  }
  
  for(let i =0;i<front_end_details.details.length;i++){
    front_end(front_end_details.details[i]);
  }
  
  function back_end(data){
    const image=new Image();
    image.src=`${data.img}`;
    image.id=`${data.id}`;
    document.querySelector('.back-end-wrapper').appendChild(image);
  
  }
  for(let i =0;i<back_end_details.details.length;i++){
    back_end(back_end_details.details[i]);
  }
  
  function other(data){
    const image=new Image();
    image.src=`${data.img}`;
    image.id=`${data.id}`;
    document.querySelector('.other-wrapper').appendChild(image);
  
  }
  for(let i =0;i<other_details.details.length;i++){
    other(other_details.details[i]);
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
