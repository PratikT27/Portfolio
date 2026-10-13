// The Golden Feather Hampers - page switching
const views=[...document.querySelectorAll('.view')];
const links=[...document.querySelectorAll('nav a')];
const valid=views.map(v=>v.id.replace('view-',''));
function show(page,scrollId){
  if(!valid.includes(page)) page='home';
  views.forEach(v=>v.classList.toggle('active',v.id==='view-'+page));
  links.forEach(a=>a.classList.toggle('on',a.dataset.page===page));
  try{history.replaceState(null,'','#'+page)}catch(e){}
  const t=scrollId&&document.getElementById(scrollId);
  if(t){t.scrollIntoView({behavior:'smooth'})}else{window.scrollTo({top:0})}
}
document.addEventListener('click',e=>{
  const a=e.target.closest('[data-page]'); if(!a) return;
  e.preventDefault(); show(a.dataset.page,a.dataset.scroll);
});
show(location.hash.replace('#',''));
