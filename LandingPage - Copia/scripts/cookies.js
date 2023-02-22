function createCookieHide(){

  function start(){
    console.log("> [cookie] Starting cookie-hider... ");

    function hide(i){
      const cookieDiv = document.querySelector("div.cookies-wrapper");  
      cookieDiv.style.display="none";
      console.log("> [cookie] Element is Hidden!");
    }

    console.log("> [cookie] Started done! ");

    document.body.querySelector("button.cookies-button").addEventListener('click',hide);
    }
    
  return{
    start
  }
}
export default createCookieHide;