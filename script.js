function generateNumber() {
    
    const min = Math.ceil(document.querySelector(".input-min").value)

    const max = Math.floor(document.querySelector(".input-max").value)

    if(min >= max) {

        alert("O primeiro número precisa ser menor que o segundo número.")
    } else {

        const result = Math.floor(Math.random() * (max - min + 1)) + min

        document.getElementById("resultHere").innerHTML = "O número sorteado foi " + result + "." 
    } 

}