
const form = document.getElementById("formu")


form.addEventListener("submit", function(e){
    e.preventDefault();

    const valorum = document.getElementById("1num")
    const valordois = document.getElementById("2num")
    const mensagemdevalid1 = `O valor <b>${valorum.value}</b> é menor que o valor de <b>${valordois.value}</b>`
    const mensagemdevalid2 = `O valor <b>${valorum.value}</b> é maior que o valor de <b>${valordois.value}</b>`

    if (valorum.value < valordois.value){
        document.querySelector('.mensagedvalid').innerHTML = mensagemdevalid1
    }else{
        document.querySelector('.mensagedvalid').innerHTML = mensagemdevalid2
    }


})





