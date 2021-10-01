
const ballStep = document.querySelectorAll('.ball');
let timelineLabel = document.querySelectorAll('.timeline__label');
let timelineItem = document.querySelectorAll('.timeline__item');
const steps = document.querySelector('#steps');
const look = document.querySelector('#look');
const timelineItemBall = document.querySelector('.timeline__item-ball')


function countLabel() {
  timelineLabel.forEach((item, i) => {
    item.innerText = '';
    item.innerText = "Step " + (i += 1);
  })
}

function checkStep() {
  ballStep.forEach((item) => {
    item.addEventListener('click', (e) => {
      const timelineItem = e.target.closest('.timeline__item');
      timelineItem.querySelector('.ball').style.cssText = 'background:#afbea7; border-color:#afbea7;';
      timelineItem.nextElementSibling.querySelector('.ball').style.cssText = 'background:#ff975b; border-color:#ff975b;';
      timelineItem.nextElementSibling.style.cssText = 'background:#ff975b;';
      console.log(timelineItem.nextElementSibling);


      timelineItem.style.cssText = "background:#afbea7;";
    })
  })
}
countLabel()
checkStep()

steps.addEventListener('change', (e) => {
  timelineItem.forEach((elem) => {
    elem.style.display = 'none';
  })

  if (steps.value === e.target.value) {
    let num = timelineItem.length - e.target.value;
    let newTimelineItem = Array.from(timelineItem).slice(+num);
    for (let j of newTimelineItem) {
      j.style.display = 'block';
    }

    newTimelineItem.forEach((item, i) => {
      item.querySelector('.timeline__label').innerText = "Step " + (i + 1);
    })

  }
})

look.addEventListener('change', (e) => {
  if (e.target.value === 'center') {
    timelineItemBall.style.display = 'block';
    timelineLabel.forEach(elem => {
      elem.style.cssText = 'text-align:center; margin-left:-0px;';
      elem.classList.remove('right-align')
      elem.closest('.timeline__item').classList.remove('timeline__item-last');
    })
  }

  if (e.target.value === 'left') {
    timelineItemBall.style.display = 'none';
    timelineLabel.forEach(elem => {
      elem.style.cssText = 'text-align:left;';
    })
    timelineItem[timelineItem.length - 1].classList.add('timeline__item-last');
    timelineLabel[timelineItem.length - 1].classList.add('right-align');
  }

  if (e.target.value === 'over') {
    timelineItemBall.style.display = 'none';
    timelineLabel.forEach(elem => {
      elem.style.cssText = 'position: absolute; top: -35px;';
    })
    timelineLabel[timelineItem.length - 1].style.right = "-7px";
    timelineLabel[timelineItem.length - 1].classList.add('right-align')
    timelineItem[timelineItem.length - 1].classList.add('timeline__item-last');
  }
  if (e.target.value === 'under') {
    timelineItemBall.style.display = 'block';
    timelineLabel.forEach(elem => {
      elem.style.cssText = 'text-align:center; margin-left:-0px;position: absolute; top: -35px;left:50%;    transform: translateX(-50%);';
      elem.classList.remove('right-align')
      elem.closest('.timeline__item').classList.remove('timeline__item-last');
    })


  }


})
























