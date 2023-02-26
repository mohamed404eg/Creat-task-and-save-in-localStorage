let input = document.querySelector("#inputTask").value;

// function add value in local Storage
function value() {
  window.localStorage.setItem(
    document.querySelector("#inputTask").value,
    document.querySelector("#inputTask").value
  );
}

// function click on button and call function value();
let btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("onmouseenter", (valid) => {
  if (inputTask.value === "") {
    valid.preventDefault();
  }
});

btnAdd.onclick = (onclick) => {
  value();
  inputTask.value = "";
  location.reload();
};



let taskVeiw = document.querySelector("#taskVeiw");
  let btn = document.createElement("button");
function forlocalStorage() {
  for (i = 0; localStorage.length > i; i++) {
    // let text = document.createTextNode(`${window.localStorage.key(i)} `);


     let text = document.innerHTML = `${window.localStorage.key(i)}`;

    //  btn delete
//     let btn = document.createElement("button");
//    let   btndelete = document.createTextNode(`delete`)
//    btn.append(btndelete);
//    btn.className = "btn-delete"
// btn.setAttribute(`d` , `${i}`)


    let divs = document.createElement("div");
    divs.append(text);
    // divs.appendChild(btn);
    taskVeiw.appendChild(divs);
    divs.className = "divstask";
    // console.log(btn);

    // document.querySelector('.divstask').innerHTML += '<button>g</button>';
    divs.innerHTML += `<button class="btn-delete" onclick="deleteKey(${i})">delete</button>`

  }
}



// deletebtn.addEventListener("onclick" ,()=>{
//     deletebtn
// })



forlocalStorage();



function deleteKey(key) {
window.localStorage.removeItem(localStorage.key(key));

window.location.reload();
}

