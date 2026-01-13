const canvas=document.getElementById("space");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
window.addEventListener("resize",()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});

// ⭐ Bintang interaktif level final
class Star{
    constructor(){this.reset();}
    reset(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.r=Math.random()*1.5;this.s=Math.random()*0.5+0.1;this.alpha=Math.random();this.aChange=Math.random()*0.02;}
    update(){this.y-=this.s;this.alpha+=this.aChange;if(this.alpha>1||this.alpha<0)this.aChange*=-1;if(this.y<0)this.reset();}
    draw(){ctx.fillStyle=`rgba(255,255,255,${this.alpha})`;ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fill();}
}

const stars=Array.from({length:550},()=>new Star());

let particles=[];
function animate(){
    ctx.fillStyle="#0b0c17";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    stars.forEach(s=>{s.update();s.draw();});
    particles.forEach((p,i)=>{p.x+=p.sX;p.y+=p.sY;p.alpha-=0.03;ctx.fillStyle=`rgba(255,200,255,${p.alpha})`;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();if(p.alpha<=0)particles.splice(i,1);});
    requestAnimationFrame(animate);
}
animate();

// 💌 Typing panjang & pelan
const text="Hai, Dila 🌸. Aku tau kita baru kenal kemarin di Pop Up, dan kita belum pernah ketemu, tapi aku ingin jujur. Aku suka caramu cerita, cara kamu tertawa, dan semua hal kecil yang bikin kamu unik. Aku pengen kenal kamu lebih dekat, pelan-pelan, dengan ritme nyaman. Kalau kamu ngerasa hal yang sama, aku senang banget. Kalau belum, aku tetap menghargai kamu sepenuhnya 💖.";
let i=0;
const typingEl=document.getElementById("typing");
function typeEffect(){if(i<text.length){typingEl.innerHTML+=text.charAt(i);i++;setTimeout(typeEffect,50);}}
typeEffect();

// ✨ Partikel ledakan saat klik/touch
canvas.addEventListener("click",(e)=>{for(let j=0;j<30;j++){particles.push({x:e.clientX,y:e.clientY,r:Math.random()*2+1,sX:(Math.random()-0.5)*5,sY:(Math.random()-0.5)*5,alpha:1});}});

// Tombol WA interaktif
document.getElementById("replyBtn").addEventListener("click",()=>{alert("Semoga Dila juga ngerasa sama 💖");});
