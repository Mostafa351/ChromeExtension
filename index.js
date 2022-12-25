
const myUrls = [];
const inputEl = document.getElementById("input-el");
const inputBTN = document.getElementById("input-btn");
const unorderdEl = document.getElementById("unorderd-el");
const showEl = document.getElementById("show-btn");


inputBTN.addEventListener("click", (event)=>{
  if (inputEl.value) myUrls.push(inputEl.value);
  inputEl.value="";
})
showEl.addEventListener("click", ()=>{
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




