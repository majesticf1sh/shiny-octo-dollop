(async function(){'use strict';const particleContainer=document.createElement('div');particleContainer.style.position='fixed';particleContainer.style.top='50%';particleContainer.style.left='50%';particleContainer.style.transform='translate(-50%, -50%)';particleContainer.style.zIndex='9999';particleContainer.style.pointerEvents='none';const numParticles=100;const colors=['#ff0000','#00ff00','#0000ff','#ffff00','#00ffff','#ff00ff'];for(let i=0;i<numParticles;i++){const particle=document.createElement('div');particle.className='particle';particle.style.position='absolute';particle.style.width='10px';particle.style.height='10px';particle.style.borderRadius='50%';particle.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];particleContainer.appendChild(particle);}
document.body.appendChild(particleContainer);function triggerExplosion(event){const particles=document.querySelectorAll('.particle');particles.forEach(particle=>{const angle=Math.random()*360;const distance=Math.random()*200+100;const x=Math.cos(angle)*distance;const y=Math.sin(angle)*distance;particle.style.transition='transform 1s ease-out, opacity 1s ease-out';particle.style.transform=`translate(${x}px, ${y}px) scale(0) rotate(${angle}deg)`;particle.style.opacity='0';});}
await new Promise((resolve)=>setTimeout(resolve,2000));triggerExplosion();await new Promise((resolve)=>setTimeout(resolve,2500));const animationContainer=document.createElement('div');animationContainer.style.position='fixed';animationContainer.style.top='50%';animationContainer.style.left='50%';animationContainer.style.transform='translate(-50%, -50%)';animationContainer.style.zIndex='9999';const animatedElement=document.createElement('div');animatedElement.style.width='100px';animatedElement.style.height='100px';animatedElement.style.background='linear-gradient(45deg, #f06, #9f6)';animatedElement.style.animation='spin 2s linear infinite';const styles=`

            @keyframes spin {

                0% { transform: rotate(0deg); }

                100% { transform: rotate(360deg); }

            }

        `;const styleElement=document.createElement('style');styleElement.innerHTML=styles;document.head.appendChild(styleElement);animationContainer.appendChild(animatedElement);document.body.appendChild(animationContainer);triggerExplosion();await new Promise((resolve)=>setTimeout(resolve,4000));west.window.premium.open();})();
