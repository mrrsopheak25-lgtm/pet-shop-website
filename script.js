/* HISTORY CLICK */
const imgs = document.querySelectorAll('.history-images img');
const items = document.querySelectorAll('.history-item');

imgs.forEach(img=>{
  img.addEventListener('click', ()=>{

    const target = img.dataset.target;

    imgs.forEach(i=>i.classList.remove('active'));
    items.forEach(t=>t.classList.remove('active'));

    img.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});


/* REELS */
const reels = document.querySelectorAll('.reel');

window.addEventListener('load', () => {
  const first = document.querySelector('.reel.active video');
  if (first) first.play().catch(()=>{});
});

reels.forEach(reel => {
  reel.addEventListener('click', () => {
    reels.forEach(r => {
      r.classList.remove('active');
      const v = r.querySelector('video');
      v.pause();
      v.currentTime = 0;
    });

    reel.classList.add('active');
    reel.querySelector('video').play();
  });
});

/* PRICE CLICK → PAYMENT */
/* PRICE CLICK → UPDATE PAYMENT */
document.querySelectorAll('.price').forEach(btn => {
  btn.addEventListener('click', () => {

    const card = btn.closest('.pet-card');

    // update text
    document.getElementById('petName').innerText =
      card.dataset.name;

    document.getElementById('totalPrice').innerText =
      card.dataset.price;

    document.getElementById('totalPrice2').innerText =
      card.dataset.price;

    // update image
    document.getElementById('orderImg').src =
      card.dataset.img;

    // scroll to payment
    document.getElementById('payment')
      .scrollIntoView({ behavior: 'smooth' });

  });
});


/* PAYMENT METHOD */
document.querySelectorAll('.method').forEach(m=>{
  m.onclick=()=>{
    document.querySelectorAll('.method').forEach(x=>x.classList.remove('active'));
    m.classList.add('active');
  }
});
/*conntact form*/
document.getElementById('sendMsg').addEventListener('click', ()=>{
  const name = cName.value.trim();
  const email = cEmail.value.trim();
  const msg = cMsg.value.trim();

  if(!name || !email || !msg){
    alert('Please fill in all fields');
    return;
  }

  alert('✅ Message sent successfully!');
  cName.value = cEmail.value = cMsg.value = '';
});
