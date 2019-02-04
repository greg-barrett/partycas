const setEvents = function () {
  //add expand functionality to terms and conditions
  const tAndC = document.querySelector(".t-c-container")
  const toggleClass= function (e) {
    this.classList.toggle("expand")
  }
  tAndC.addEventListener("click", toggleClass)

  //add link to banner image
  const midBanner = document.querySelector("#mid-banner")
  midBanner.addEventListener("click", (e) => location.href="https://www.partycasino.com/en/registration")

  //add link to step containers
  let stepContainers= document.querySelectorAll(".step-container")
  stepContainers=Array.from(stepContainers)
  stepContainers.forEach( item =>  {
    item.addEventListener("click", e => location.href="https://www.partycasino.com/en/registration")
  })

}
export {setEvents}
