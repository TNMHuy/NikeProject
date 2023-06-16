
const getEle = (id) => {
  return document.getElementById(id)
}
let index = 0

const autoTrans = () => {
  if (index < 2) {
    index++
    getEle('slideTrans').style.transform = `translateX(-${index * 1360}px)`;
    getEle('slideTrans').style.transition = "transform 0.5s"
  } else {
    index = 0
    getEle('slideTrans').style.transform = `translateX(0)`;
  }

}
let myInter = setInterval(() => {
  autoTrans()
}, 5000)
const next = () => {
  clearInterval(myInter)
  if (index < 2) {
    index++
    getEle('slideTrans').style.transform = `translateX(-${index * 1360}px)`;
    getEle('slideTrans').style.transition = "transform 0.5s"
  } else {
    index = 0
    getEle('slideTrans').style.transform = `translateX(0)`;


  }
  myInter = setInterval(() => {
    autoTrans()
  }, 5000)
  
}
const prev = () => {
  if (index > 0) {
    index--
    getEle('slideTrans').style.transform = `translateX(-${index * 1360}px)`;
    getEle('slideTrans').style.transition = "transform 0.5s"
  } else {
    index = 2
    getEle('slideTrans').style.transform = `translateX(-${index * 1360}px)`

  }
}

  // setInterval('autoTrans()',5000)
// nextBtn.addEventListener("click", next);
// prevBtn.addEventListener("click", prev);

