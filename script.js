const box=document.querySelector('.outer');
function outerr(){
   let v='#';
v+=Math.random().toString(16).slice(2,8);
// document.write(v);
  box.style.backgroundColor=v;
};
