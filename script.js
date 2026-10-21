/* =====================================================
   EMAILJS SETUP: paste your three keys below
   1) Public Key  -> emailjs.com > Account > General
   2) Service ID  -> emailjs.com > Email Services
   3) Template ID -> emailjs.com > Email Templates
   Template variables used: {{from_name}} {{from_email}} {{reply_to}}
   {{type}} {{budget}} {{message}} {{subject}}
   ===================================================== */
var EMAILJS_CONFIG={publicKey:'uKyqY3aBYCmwmKcS',serviceId:'RnYnbq_C6gjfcCi5a1G3f',templateId:'template_d0x2kmj'};

(function(){
var TO='darshan.gondaliya0261@gmail.com',R=document.documentElement,$=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
/* loader */
var pn=$('#pn'),t0=performance.now();
function ld(t){var p=Math.min((t-t0)/1400,1);pn.textContent=Math.round(p*100);if(p<1)requestAnimationFrame(ld);else setTimeout(function(){document.body.classList.add('ready');$('#pre').classList.add('go')},250)}
if(reduce)document.body.classList.add('ready');else requestAnimationFrame(ld);
$$('.win pre span').forEach(function(s,i){s.style.animationDelay=(1.9+i*.28)+'s'});
/* marquee */
var sk=['React','Next.js','Node.js','TypeScript','GraphQL','Angular','Tailwind CSS','MySQL','REST APIs','Express'],h='';
for(var i=0;i<2;i++)sk.forEach(function(s){h+='<span>'+s+'</span>'});
$('#mqi').innerHTML=h;
/* rotating word */
var rot=$('#rot'),rw=['scalable','fast','elegant','secure','reliable'],ri=0;
setInterval(function(){if(reduce)return;rot.classList.add('out');setTimeout(function(){ri=(ri+1)%rw.length;rot.textContent=rw[ri];rot.classList.add('pre');rot.classList.remove('out');void rot.offsetWidth;rot.classList.remove('pre')},450)},2400);
/* word reveal */
function sp(el){var k=0;(function w(n){[].slice.call(n.childNodes).forEach(function(c){if(c.nodeType===3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t))f.appendChild(document.createTextNode(' '));else{var s=document.createElement('span');s.className='w';var i=document.createElement('i');i.textContent=t;i.style.setProperty('--k',k++);s.appendChild(i);f.appendChild(s)}});n.replaceChild(f,c)}else w(c)})})(el)}
$$('.sp').forEach(sp);
/* scroll-filled statement */
var st=$('#st');st.innerHTML=st.textContent.split(' ').map(function(w){return '<span>'+w+'</span>'}).join(' ');var ws=$$('#st span');
/* chip index + footer letters + stagger */
$$('.chips').forEach(function(c){[].slice.call(c.children).forEach(function(s,i){s.style.setProperty('--c',i)})});
var g=$('.giant');g.innerHTML=g.textContent.split('').map(function(c,i){return '<span style="--j:'+i+'">'+(c===' '?'&nbsp;':c)+'</span>'}).join('');
$$('.rv').forEach(function(el){var sib=[].slice.call(el.parentNode.children).filter(function(x){return x.classList.contains('rv')});el.style.setProperty('--d',(sib.indexOf(el)%4)*.09+'s')});
/* eyebrow scramble */
var CH='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/';
function scr(el){var t=el.dataset.t||(el.dataset.t=el.textContent),a=performance.now();(function f(n){var p=Math.min((n-a)/800,1),k=Math.floor(p*t.length);el.textContent=t.slice(0,k)+t.slice(k).replace(/\S/g,function(){return CH[Math.floor(Math.random()*CH.length)]});if(p<1)requestAnimationFrame(f)})(a)}
/* reveal + counters */
function count(c){var n=+c.dataset.n,s=c.dataset.s||'',a=performance.now();(function f(t){var p=Math.min((t-a)/1600,1);c.textContent=Math.round(n*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(a)}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;t.classList.add('in');io.unobserve(t);$$('[data-n]').filter(function(c){return t.contains(c)}).forEach(count);if(t.classList.contains('eyebrow')&&!reduce)scr(t)})},{threshold:.15});
$$('.fade,.rv,.sp,.eyebrow,.giant').forEach(function(el,i){if(!el.closest('.hero')){if(el.classList.contains('fade'))el.style.transitionDelay=(i%3)*80+'ms';io.observe(el)}});
/* scroll */
var tl=$('#tlf');
function sc(){var d=R.scrollHeight-innerHeight;$('#bar').style.transform='scaleX('+(d>0?scrollY/d:0)+')';$('#nav').classList.toggle('s',scrollY>40);var b=st.getBoundingClientRect(),p=Math.min(Math.max((innerHeight*.85-b.top)/(innerHeight*.55),0),1),k=Math.round(p*ws.length);ws.forEach(function(w,i){w.classList.toggle('on',i<k)});var r=tl.parentNode.getBoundingClientRect();tl.style.transform='scaleY('+Math.min(Math.max((innerHeight*.65-r.top)/r.height,0),1)+')'}
addEventListener('scroll',sc,{passive:true});sc();
/* spotlight + tilt */
$$('.tile,.stat,.pc').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;c.style.setProperty('--mx',x+'px');c.style.setProperty('--my',y+'px');c.style.setProperty('--bx',((x/r.width-.5)*28)+'px');c.style.setProperty('--by',((y/r.height-.5)*18)+'px');if(!reduce&&c.classList.contains('pc'))c.style.transform='perspective(1000px) rotateX('+((.5-y/r.height)*5)+'deg) rotateY('+((x/r.width-.5)*5)+'deg) translateY(-6px)'});c.addEventListener('mouseleave',function(){c.style.transform=''})});
/* magnetic */
$$('.mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.28)+'px,'+((e.clientY-r.top-r.height/2)*.35)+'px)'});b.addEventListener('mouseleave',function(){b.style.transform=''})});
/* hero mouse parallax */
var hr=$('.hr');$('#top').addEventListener('mousemove',function(e){hr.style.setProperty('--px',(e.clientX/innerWidth-.5)*2);hr.style.setProperty('--py',(e.clientY/innerHeight-.5)*2)});
/* cursor */
var ring=$('#ring'),mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
$$('.pc').forEach(function(e){e.dataset.c='View'});$$('[data-hire]').forEach(function(b){b.dataset.c='Hire'});$('.mail').dataset.c='Email';
addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;$('#dot').style.transform='translate('+mx+'px,'+my+'px)'});
(function f(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;ring.style.transform='translate('+rx+'px,'+ry+'px)';requestAnimationFrame(f)})();
$$('a,button,input,select,textarea,.pc').forEach(function(e){e.addEventListener('mouseenter',function(){ring.classList.add('h')});e.addEventListener('mouseleave',function(){ring.classList.remove('h')})});
$$('[data-c]').forEach(function(e){e.addEventListener('mouseenter',function(){ring.textContent=e.dataset.c;ring.classList.add('l')});e.addEventListener('mouseleave',function(){ring.textContent='';ring.classList.remove('l')})});
/* particles */
var cv=$('#cv'),x=cv.getContext('2d'),W,H,P=[],pm={x:-999,y:-999};
function rs(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight;P=[];var n=Math.min(80,Math.round(W*H/16000));for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35})}
rs();addEventListener('resize',rs);
$('#top').addEventListener('mousemove',function(e){var r=cv.getBoundingClientRect();pm.x=e.clientX-r.left;pm.y=e.clientY-r.top});
function draw(){x.clearRect(0,0,W,H);var c=getComputedStyle(R).getPropertyValue('--ac').trim()||'#7a1f3d';x.fillStyle=c;x.strokeStyle=c;
for(var i=0;i<P.length;i++){var a=P[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;x.globalAlpha=.7;x.beginPath();x.arc(a.x,a.y,1.6,0,6.3);x.fill();
for(var j=i+1;j<P.length;j++){var b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){x.globalAlpha=(1-d/130)*.25;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
var m=Math.hypot(a.x-pm.x,a.y-pm.y);if(m<180){x.globalAlpha=(1-m/180)*.5;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(pm.x,pm.y);x.stroke()}}
if(!reduce)requestAnimationFrame(draw)}
draw();
/* dialog, forms, theme */
var dlg=$('#dlg');
$$('[data-hire]').forEach(function(b){b.addEventListener('click',function(){dlg.showModal()})});
$('#close').addEventListener('click',function(){dlg.close()});
var EJ=EMAILJS_CONFIG;
function ejReady(){return !!window.emailjs&&[EJ.publicKey,EJ.serviceId,EJ.templateId].every(function(k){return k&&k.indexOf('YOUR_')!==0})}
if(ejReady())emailjs.init({publicKey:EJ.publicKey});
function viaMailto(p){location.href='mailto:'+TO+'?subject='+encodeURIComponent(p.subject)+'&body='+encodeURIComponent('Name: '+p.from_name+'\nEmail: '+p.from_email+'\nType: '+p.type+'\nBudget: '+p.budget+'\n\n'+p.message)}
function submit(form,subject,status,done){
var d=new FormData(form),btn=form.querySelector('button[type=submit]'),label=btn.textContent;
var p={name:d.get('name'),email:d.get('email'),title:subject,from_name:d.get('name'),from_email:d.get('email'),reply_to:d.get('email'),type:d.get('type')||'Hire request',budget:d.get('budget')||'Not specified',message:d.get('message'),subject:subject+' from '+d.get('name')};
status.className='ok';
if(!ejReady()){viaMailto(p);status.textContent='Your email app should open with the message ready to send.';status.classList.add('show');return}
btn.disabled=true;btn.textContent='Sending…';
emailjs.send(EJ.serviceId,EJ.templateId,p).then(function(){form.reset();status.textContent='Thank you! Your message has been sent. I’ll reply soon.';status.classList.add('show');if(done)done()},function(){status.textContent='Sorry, the message could not be sent. Please email me directly.';status.classList.add('show','err')}).finally(function(){btn.disabled=false;btn.textContent=label})}
$('#cform').addEventListener('submit',function(e){e.preventDefault();submit(e.target,'Portfolio enquiry',$('#ok'))});
$('#hform').addEventListener('submit',function(e){e.preventDefault();submit(e.target,'Hire request',$('#hok'),function(){setTimeout(function(){dlg.close();$('#hok').className='ok'},1800)})});
$('#theme').addEventListener('click',function(){R.dataset.theme=R.dataset.theme==='dark'?'light':'dark'});
})();

/* ===== Skills tabs, clock, scroll motion ===== */
(function(){
var $=function(s){return document.querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function clk(){var t=new Date().toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit'});$$('.clock').forEach(function(c){c.textContent=t})}
clk();setInterval(clk,30000);
var ob=['React','Next.js','Node.js','TypeScript','GraphQL','MySQL','Angular','Tailwind'];
$('#orb').innerHTML=ob.map(function(n,i){return '<span style="--r:'+i*45+'deg"><b>'+n+'</b></span>'}).join('');
/* hero scroll depth + marquee skew */
var hl=$('.hgrid>div:first-child'),hv=$('.hr'),mq=$('.mq'),ly=scrollY,v=0;
(function f(){var y=scrollY,d=y-ly;ly=y;v+=(Math.max(-7,Math.min(7,d*.3))-v)*.1;
if(!reduce){var p=Math.min(y/innerHeight,1);hl.style.transform='translateY('+p*70+'px)';hl.style.opacity=1-p*1.1;hv.style.transform='translateY('+p*-40+'px) scale('+(1-p*.08)+')';mq.style.transform='rotate(-1deg) skewX('+(-v)+'deg)'}
requestAnimationFrame(f)})();
})();
