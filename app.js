window.addEventListener('scroll',() =>{
   const scrolled=document.documentElement.scrollTop;
   document.getElementById("active1").onmouseenter=function()
   {
    document.getElementById("active1").style.background="#ddb892"; 
   }
   document.getElementById("active1").onmouseleave=function()
   {
    document.getElementById("active1").style.background="none"; 
   }


   document.getElementById("active2").onmouseenter=function()
   {
    document.getElementById("active2").style.background="#ddb892"; 
   }
   document.getElementById("active2").onmouseleave=function()
   {
    document.getElementById("active2").style.background="none"; 
   }


   document.getElementById("active3").onmouseenter=function()
   {
    document.getElementById("active3").style.background="#ddb892"; 
   }
   document.getElementById("active3").onmouseleave=function()
   {
    document.getElementById("active3").style.background="none"; 
   }

   
    if(scrolled>-1 && scrolled<617)
    {
        document.getElementById("active1").style.background="#ddb892";
        document.getElementById("active2").style.background="none";
       document.getElementById("active3").style.background="none";
    }else if(scrolled<1668)
    {
        document.getElementById("active2").style.background="#ddb892";
        document.getElementById("active1").style.background="none";
       document.getElementById("active3").style.background="none";
    }else{
        document.getElementById("active3").style.background="#ddb892";
       document.getElementById("active1").style.background="none";
       document.getElementById("active2").style.background="none";
    }
  console.log(document.documentElement.scrollTop);
});