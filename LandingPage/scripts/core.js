import createCookieHide from "./cookies.js";
const cookie = createCookieHide();

function createCore(){

  function start(){
    console.log("> [core] Starting core...");
    cookie.start();
    console.log("> [core] Started done!");
    
  }


  return{
    start
  }
}
export default createCore;