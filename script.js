let c = document.getElementById( 'value')
let even=document.getElementById('eo')
let value=0
function incr(){
   if(value<20)
     value++
    c.textContent=value;
    eo();
    
}
function decr()
    {
        if(value>0)
    value--
    c.textContent=value;
    eo();

    }
    function reset()
        {
     value=0
     c.textContent=value
      
        }

function eo(){
    if(value%2==0)
    {
        even.textContent='even';
    }
    else
    even.textContent='odd';
}
//model
let isOpen=false
function myOpen(){
    const model=document.getElementById('model')
    if(isOpen){
        model.style.display="none";
        isOpen=false
    }
    else{
        model.style.display="block";
        isOpen =true
        document.body.style.backgroundColor="rgba(0,0,0,0.4)"
    }
}
