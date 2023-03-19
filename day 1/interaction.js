let hamMenu = document.querySelector('#hamMenu');
let cross = document.querySelector('#cross');
let nav = document.querySelector('.nav');

hamMenu.addEventListener('click',()=>{
    nav.classList.add('active')
});
cross.addEventListener('click',()=>{
    nav.classList.remove('active')
})





// hamMenu.onclick = ()=>{
//     nav.classList.add('active');
// }
// cross.onclick = ()=> {
//     nav.classList.remove('active');
// }




// console.log(hamMenu,cross);
// hamMenu.onclick = function () {
//     nav.classList.add('active');
// }
// cross.onclick = function () {
//     nav.classList.remove('active')
// }