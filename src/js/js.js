let tab= document.querySelectorAll(".tab")
let main= document.querySelectorAll(".content")
console.log(main)
console.log(tab)
 tab.forEach((item,index)=>{
    item.addEventListener('click',()=>{
       document.querySelector('.active').classList.remove('active');
        main[index].classList.add('active');    
    })
 })