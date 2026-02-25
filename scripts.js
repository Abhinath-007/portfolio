function calculate(){
   const mainTextElement=document.getElementById("main-txt");
   if(mainTextElement.innerText === "Enter your date of birth")
   {
    mainTextElement.innerText= "Your age is";    
   }
   else
   {
    mainTextElement.innerText= "Enter your date of birth"  ;
   }
}
