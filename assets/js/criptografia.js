function criptografar(texto) {
    texto = texto.toLowerCase();

    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function descriptografar(texto) {

    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');

}  

function criptografarTexto() {
    var textoEntrada = document.getElementById('textoEntrada').value;
    var textoSaida = criptografar(textoEntrada);
    var textareaSaida = document.getElementById('textoSaida');
    var btnCopiar = document.getElementById('btnCopiar');
    textareaSaida.value = textoSaida;

    // Ajusta a aparência do textarea com base no texto criptografado
    if (textoSaida.trim() !== '') {
        textareaSaida.classList.add('noBackground');
        btnCopiar.classList.remove('d-none'); 
    } else {
        textareaSaida.classList.remove('noBackground');
        btnCopiar.classList.add('d-none'); 
    }
}

function descriptografarTexto() {
    var textoEntrada = document.getElementById('textoEntrada').value;
    var textoSaida = descriptografar(textoEntrada);
    document.getElementById('textoSaida').value = textoSaida;
}

function copiartextoSaida() {
    var textoSaida = document.getElementById('textoSaida');
    
    // Tentativa de copiar usando a API moderna, se disponível
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textoSaida.value).then(function() {
            console.log('Texto copiado com sucesso!');
        }).catch(function(err) {
            console.error('Erro ao copiar o texto: ', err);
        });
    } else {
        // Fallback para `document.execCommand` para navegadores mais antigos
        textoSaida.select();
        document.execCommand('copy');
    }
}