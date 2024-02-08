const graf_array = [
  "testing string after string",
  "heres another one",
  "yet one more",
];


const init = () => {

  let index = 0;

  let button = document.getElementById("increment-button");
  let graf_container = document.getElementById("graf-container");

  console.log(button, graf_container);

  button.addEventListener("click", ()=>{
    index = (index+1)%(graf_array.length-1);
    graf_container.innerHTML = graf_array[index]
  })
};

window.addEventListener("load", function () {
  init();
});
