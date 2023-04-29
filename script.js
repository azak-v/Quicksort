function script() {
  //Array a ser manipulado
  let arr = [];

  // Inputs
  const arrayInput = document.getElementById("arrayInput");
  const inputButton = document.getElementById("addToArray");
  const sortButton = document.getElementById("sortButton");
  const container = document.getElementById("container");

  //Event listeners
  arrayInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      addToArray();
    }
  });

  inputButton.addEventListener("click", () => {
    addToArray();
  });

  sortButton.addEventListener("click", () => {
    arr = quicksort(arr); changeScreen();
  });


  //Muda a tela após o sorteio
  function changeScreen(){
    spanArr = document.querySelectorAll('span.boxValue');
    console.log(spanArr[0].innerText);
    spanArr.forEach((element, index) => {
      odoo.default({ el:spanArr[index], from: '', to: arr[index], animationDelay: 1000 });
    })
      // console.log(arr);

  }

  //Adiciona o Valor do input após o sorteio
  function addToArray() {
    //Converte o texto para um valor numérico
    let value = parseInt(arrayInput.value);

    //Push no valor para o array
    arr.push(value);
    
    //Caso o input não esteja vazio, cria uma box;
    if(arrayInput.value != '') createBox(value);

    clearInput();

    
  }

  //Limpa o input após adicionar
  function clearInput(){
    arrayInput.value = '';
  }

  //Cria as caixas do array com o valor especifico dentro
  function createBox(value){
    container.innerHTML += `<div class="box">
            <span class="boxValue">
            `+value+`
            </span>
    </div> `
  }

  //Realiza o método quicksort no array, o ordenando.
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
