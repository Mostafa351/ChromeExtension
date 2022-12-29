let myUrls = [];
const inputEl = document.getElementById("input-el");
const inputBTN = document.getElementById("input-btn");
const unorderdEl = document.getElementById("unorderd-el");
const showEl = document.getElementById("show-btn");
const dAllEl = document.getElementById("dall-btn");
const svTabEl = document.getElementById("svTab-btn");

//let localData =JSON.parse(localStorage.getItem("urls"))?? [];
let localData =JSON.parse(localStorage.getItem("urls")) != null ? JSON.parse(localStorage.getItem("urls")) : [];


svTabEl.addEventListener("click",()=>{
  myUrls = localData;
  chrome.tabs.query({ active: true, lastFocusedWindow: true },async (tabs) => {
    const url = await tabs[0].url;
    myUrls.push(url);
    localStorage.setItem("urls", JSON.stringify(myUrls));
    renderList();
  });
})



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
  localData = [];
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
                       <p>${myUrls[i]} </p>
                    </a>
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



