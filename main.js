const requestBar = document.querySelector(".requestBar")
const requestSubmit = document.querySelector(".requestSubmit")
const boxZone = document.querySelector(".boxZone")
const box_explain = document.querySelector(".box_explain")

{
    requestSubmit.addEventListener("click", function(){
        if(requestBar.value === ""){
            alert("입력해주시길 바랍니다.")
        }else{
            boxZone.classList.remove("hide");
            box_explain.innerHTML = `네가 원하는 "${requestBar.value}"은(는) 이 상자 안에 들어있어. `;
            requestBar.value = null ;
            requestBar.inputmode = "none";
            window.scrollBy({
                top: boxZone.offsetHeight/2.15,
                behavior: "smooth"
            })
        }
    })
}

{
    const closeBut = document.querySelector(".closeBut")
    
    closeBut.addEventListener("click", function(){
        boxZone.classList.add("hide")
    })
}