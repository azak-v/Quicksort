function script() {
  let arr = [];


  // odoo.default({ el:'.teste', from: value, to: 'CODEVEMBER', animationDelay: 1000 });




  arrayInput = document.getElementById("arrayInput");
  inputButton = document.getElementById("addToArray");
  sortButton = document.getElementById("sortButton");

  teste = document.getElementById("teste");


  container = document.getElementById("container");

  inputButton.addEventListener("click", () => {
    addToArray();
  });

  sortButton.addEventListener("click", () => {
    arr = quicksort(arr); changeScreen();
  });


  function changeScreen(){
    spanArr = document.querySelectorAll('span.boxValue');
    // newArr = sort(arr);
    console.log(spanArr[0].innerText);
    spanArr.forEach((element, index) => {
      odoo.default({ el:spanArr[index], from: spanArr[index].innerText, to: arr[index], animationDelay: 1000 });
    })
      console.log(arr);

    //   console.log(element);
    // });
    //muda os valores na tela com for each e em seguida anima
    //a animação deve ser do valor antigo pro valor atual
  }

  function addToArray() {
    //convert text to a number value
    let value = parseInt(arrayInput.value);

    //push value on input to array
    arr.push(value);
    
    //*add validation
    //create box content //add value no content
    if(arrayInput.value != '') createBox(value);
    clearInput();

    
  }

  function clearInput(){
    arrayInput.value = '';
  }

  function createBox(value){
    container.innerHTML += `<div class="box">
            <span class="boxValue">
            `+value+`
            </span>
    </div> `
  }

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
  
}
