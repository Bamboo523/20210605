
let boxes = document.getElementsByClassName("box");
let boxesArray = [...boxes];

for (let i = 0; i < boxesArray.length; i++) {
  let box = boxesArray[i];
  box.onclick = (e) => {
    for (let j = 0; j < boxesArray.length; j++) {
      let _box = boxesArray[j];
      if (_box.classList.contains("active")) {
        _box.classList.remove("active");
      }
    }

    e.target.classList.add("active");
  };
}