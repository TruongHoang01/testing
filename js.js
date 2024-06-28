let age = 18;
console.log(age);

const btn = document.querySelector(".btn-click");
btn.addEventListener("click",()=>{
    if(btn.textContent == "Chưa click") btn.textContent = "Đã click";
    else if(btn.textContent == "Đã click") btn.textContent = "Chưa click"
})