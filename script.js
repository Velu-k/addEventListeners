// const grandParent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// grandParent.addEventListener('click',
//      e=>{
//     console.log('Grandparent capture')
//     },
//     {capture: true}
// );
// grandParent.addEventListener('click',e=>{
//     console.log('Grandparent bubble')
// })
// parent.addEventListener('click',
//     e=>{
//     console.log('Parent capture');
//     },
//     {once:true} //run only once, never repeat again
// );
// parent.addEventListener('click', e=>{
//     console.log('Parent bubble');
// });
// child.addEventListener('click',
//     e=>{
//    console.log('Child capture')
//    },
//    {capture: true}
// );
// child.addEventListener('click',e=>{
//     console.log('Child bubble');
// })

const allDiv = document.querySelectorAll('div');
// allDiv.forEach(div =>{
//     div.addEventListener('click',()=>{
//         console.log('hi');
//     })
// })
//Delegation
addGlobalEventListener('click', 'div',e=>{
    console.log('hi');
})
//creating a separate fun for add event listener
function addGlobalEventListener(type, selector, callback){
    document.addEventListener('click',e=>{
        if(e.target.matches(selector)) callback(e)
    })
}

// //Create new div
const newDiv = document.createElement('div');
newDiv.style.width = "200px";
newDiv.style.height = "200px";
newDiv.style.backgroundColor = "red";
document.body.append(newDiv);
// newDiv.addEventListener('click',()=>{
//     console.log('hi');
// })

