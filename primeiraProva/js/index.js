console.log('Primeira Prova');

function iniciar(){
    let botao= document.getElementById("login");
    botao.onclick = function(){
        console.log('entrou fAn');
        let mat= document.getElementById("matricula").value;
        let sen= document.getElementById("senha").value;

        if (verificar(mat, sen)) {
            console.log('entrou if verificar');
            alert('Seja bem vindo!');
            limpar(mat, sen);
        }
    };
}

function verificar(mat, sen){
    console.log('entrou fVerificar');
    let validar = true;
    if (mat.value != 123456 && sen.value != 123456) {
        let p = document.getElementById("p3");
        p.style.display = 'block';
        isValid = false;
    
    } else if (sen.value.trim() != '') {
        let p = document.getElementById("p2");
        p.style.display = 'block';
        isValid = false;
    } else if (mat.value.trim() === ''){
        console.log('entrou ifVerd');
        let p = document.getElementById("p");
        p.style.display = 'block';
        return validar;
    }
}

function limpar(mat, sen) {
    mat.value = '';
    sen.value = '';
    mat.focus();
}

iniciar();