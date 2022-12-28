let myUrls = [];
const inputEl = document.getElementById("input-el");
const inputBTN = document.getElementById("input-btn");
const unorderdEl = document.getElementById("unorderd-el");
const showEl = document.getElementById("show-btn");
const dAllEl = document.getElementById("dall-btn");

let localData =JSON.parse(localStorage.getItem("urls"))?? [];
//let localData =JSON.parse(localStorage.getItem("urls")) == null ?  []:JSON.parse(localStorage.getItem("urls"));
inputBTN.addEventListener("click", (event)=>{
  myUrls = localData;

  if(myUrls){
    if (inputEl.value) myUrls.push(inputEl.value);
  }else{
    unorderdEl.textContent ="no data";
  }
  localStorage.setItem("urls", JSON.stringify(myUrls));
  inputEl.value="";
})
showEl.addEventListener("click", ()=>{ 
  // to be refactored
  myUrls = localData;
  renderList();
})
dAllEl.addEventListener("click",()=>{
  alert("Delete All");
  myUrls = [];
  localStorage.setItem("urls", JSON.stringify(myUrls));
  renderList();
})
function renderList(){
  unorderdEl.innerHTML = `` ;
  let listItems = "";
  for (let i = 0; i < myUrls.length; i++) {
    // let c = document.createElement("li");
    // c.textContent = myUrls[i];
    // unorderdEl.append(c);
    listItems += `
                  <li>
                    <a href="${myUrls[i]}" target="_blank">
                        ${myUrls[i]}
                    </a>
                    <button id="delete-btn" onclick="deleteItem(${i})">Delete</button>
                  </li>
                `;
  }
  unorderdEl.innerHTML += listItems;
}
function deleteItem(id){
  myUrls.splice(id,1);
  localStorage.setItem("urls", JSON.stringify(myUrls));
  renderList();
}
