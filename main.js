
const form = document.getElementById("formu")


form.addEventListener("submit", function(e){
    e.preventDefault();

    const valorum = parseFloat(document.getElementById("1num").value);

    const valordois = parseFloat(document.getElementById("2num").value);

    const mensagemdevalid1 = `O valor <b>${valorum}</b> é menor que o valor  <b>${valordois}</b>`

    const mensagemdevalid2 = `O valor <b>${valorum}</b> é maior que o valor  <b>${valordois}</b>`

    const mensagemdevalid3 = `O valor <b>${valorum}</b> é igual a <b>${valordois}</b>`


    if (valorum < valordois){
        document.querySelector('.mensagedvalid').style.display = "block";

        document.querySelector('.mensagedvalid').innerHTML = mensagemdevalid1;

    }else if(valorum > valordois){
        document.querySelector('.mensagedvalid').style.display = "block";

        document.querySelector('.mensagedvalid').innerHTML = mensagemdevalid2;
    }
    else{
        document.querySelector('.mensagedvalid').style.display = "block";
        
        document.querySelector('.mensagedvalid').innerHTML = mensagemdevalid3;

    }


})





