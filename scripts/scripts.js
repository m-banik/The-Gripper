const square = document.querySelector("div");
const positionModifier = e => {
  square.style.top = `${square.offsetTop + e.movementY}px`;
  square.style.left = `${square.offsetLeft + e.movementX}px`;
};
const eventRemover = () => {
  square.style.opacity = "";
  square.removeEventListener("mousemove", positionModifier);
};
square.addEventListener("mousedown", function() {
  this.style.opacity = ".5";
  this.addEventListener("mousemove", positionModifier);
});
square.addEventListener("mouseup", eventRemover);
square.addEventListener("mouseleave", eventRemover);
