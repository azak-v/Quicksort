function script() {
  let arr = [];
  arrayInput = document.getElementById("arrayInput");
  inputButton = document.getElementById("addToArray");
  container = document.getElementById("container");
  inputButton.addEventListener("click", () => {
    addToArray();
  });
  function addToArray() {
    //convert text to a number value
    let value = parseInt(arrayInput.value);

    //push value on input to array
    arr.push(value);
    
    //create box content
    createBox();

    //add value no the content
    clearInput();
  }

  function clearInput(){
    arrayInput.value = '';
  }

  function createBox(value){
    container.innerHTML += `<div style="width: 100px; background-color:black">
    .</div> `
  }
  //1, 2, 2, 3, 4, 5, 6, 8
  function quicksort(array) {
    if (array.length === 1) {
      console.log("Terminei de organizar! Concatenando com o pivot...");
      return array;
    }
    if (array.length === 0) {
      console.log("Terminei de organizar tudo!");
      return [];
    }

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else right.push(array[i]);
    }
    console.log("============================");
    console.log("Array antes: ", array);
    console.log("Pivot: ", pivot);
    console.log("Left: ", left, "Right: ", right);

    let response = quicksort(left).concat(pivot, quicksort(right));
    console.log("Array depois?: ", response);

    return response;
  }
  quicksort(arr);
}
