const box=document.querySelector('.outer');
function outerr(){
   let v='#';
v+=Math.random().toString(16).slice(2,8);
// document.write(v);
  box.style.backgroundColor=v;
};
document.getElementById("btn").onclick=changecolor;
const box=document.querySelector('#outer');

function changecolor(){
    let x='#';
    x+=Math.random().toString(16).slice(2,8);
    box.style.backgroundColor=x;
