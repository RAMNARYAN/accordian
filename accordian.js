const accordians=document.querySelectorAll('.accordian');

accordians.forEach(accordian=>{  //ham accordian ki  jagah or koi sa variable bhi le sakte he 
    const icon=accordian.querySelector('.icon');
    const answer=accordian.querySelector('.answer');

    accordian.addEventListener('click',()=>{
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight=null;
        }
        else{
            icon.classList.add('active');
            answer.style.maxHeight=answer.scrollHeight +"px";
        }
    })
})