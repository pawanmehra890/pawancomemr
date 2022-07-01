let screen=document.getElementById('screen')

function display(num){
   screen.value += num

}


function calculate(){
   try{
      screen.value=eval(screen.value)
   }
   catch{
      alert("pawan")
   }
}
 


function del(){
   screen.value=screen.value.slice(0,-1)
}

const clear=document.getElementById('clear')
clear.addEventListener('click',()=>{
   screen.value=""
})


