

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}






const storyText = 'Yesterday was 94 fahrenheit outside, so :insertx: decided to play Quidditch. On the quidditch field, they found a portkey that took them to :inserty:, they were awestruck for a while; wondering if they were going mad, then :insertz:. Bob watched in amazement. :insertx: is strong and can lift 300 pounds, and clearly did not want to be there.'
const insertX = ['Harry', 'Ron','Hermione']
const insertY = ['Narnia', 'The Hunger Games', 'Hawaii']
const insertZ = ['descided to fly into outer space instead', 'apparated back to Hogwarts', 'decided to take a nap on the grass']


randomize.addEventListener('click', result);




function result() {

    let newStory = storyText;
    // note for my future self: I had to use "let" instead of "const" for newstory because it can't be assigned a constant variable//
    const xItem = randomValueFromArray (insertX);
    const yItem = randomValueFromArray (insertY);
    const zItem = randomValueFromArray (insertZ);
    
    newStory=newStory.replace(/:insertx:/g, xItem);
    newStory=newStory.replace(':inserty:', yItem);
    newStory=newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory=newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94 - 32) * 5/9) + ' centigrade';
    newStory=newStory.replace('94 fahrenheit', temperature);
    newStory=newStory.replace('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}