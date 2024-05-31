const content = document.querySelector('.content');

const title = document.querySelector('.title');

const buttons = document.querySelector('.bnt-group');

const yesbtn = document.querySelector('#bnt-yes');

const noBtn = document.querySelector('#bnt-no');

yesbtn.addEventListener('click', () => {
    title.innerHTML = `Thank you! 
     I love you too!`; 
     
    buttons.style.display = 'none';
})

const contentReact = content.
getBoundingClientRect();

const noBtnReact = noBtn.getBoundingClientRect();

noBtn.addEventListener('mouseover', () => {
    noBtn.style.left = `${Math.floor(Math.random() * (contentReact.width - noBtnReact.width))}px`;
    noBtn.style.top = `${Math.floor(Math.random() * (contentReact.height - noBtnReact.height))}px`;
})  

