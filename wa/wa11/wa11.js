const displayedImage = document.querySelector ('.displayed-img');
const thumbBar = document.querySelector ('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/*Declaring the array of image filenames*/
const filenames = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];


/* Decaring the alternative text for each image file*/
const alts = {
    'img1.png':'sunset',
    'img2.png':'horseback riding',
    'img3.png':'rainy streets',
    'img4.png':'happy dog',
    'img5.png':'ocean'
}


/*looping through images*/

for (const i of filenames){
//construct src ath and alt tect
    const nalt = alts[i];
    const nsrc = `images/${i}`;

//update image for the thumbnail
    const newImage = document.createElement('img');
    newImage.setAttribute('src', nsrc);
    newImage.setAttribute('alt', nalt);
    thumbBar.appendChild(newImage);

// change displayed image when thumbnail is clicked

newImage.addEventListener('click', () =>{
    displayedImage.setAttribute('src', nsrc);
    displayedImage.setAttribute ('alt',nalt);
})
}


/*Wiring up the Darken/lighten button*/
btn.addEventListener('click', ()=>{
    const btnClass = btn.getAttribute ('class'); //current class of btn

    if (btnClass === 'dark'){
        btn.setAttribute ('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    }
    else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }

})