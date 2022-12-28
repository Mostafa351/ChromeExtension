
let myUrls = [];
const inputEl = document.getElementById("input-el");
const inputBTN = document.getElementById("input-btn");
const unorderdEl = document.getElementById("unorderd-el");
const showEl = document.getElementById("show-btn");




inputBTN.addEventListener("click", (event)=>{
  myUrls = JSON.parse(localStorage.getItem("urls"))?? [];

  if(myUrls){
    if (inputEl.value) myUrls.push(inputEl.value);
  }else{
    console.log("c")
  }
  

  localStorage.setItem("urls", JSON.stringify(myUrls));
  inputEl.value="";
})
showEl.addEventListener("click", ()=>{ 
  // to be refactored
  myUrls = JSON.parse(localStorage.getItem("urls"))?? [] ;
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
                  </li>
                `;
    console.log(listItems);
  }
  unorderdEl.innerHTML += listItems;
})




