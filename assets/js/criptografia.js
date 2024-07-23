function criptografar(texto) {
    if (!texto.match(/^[a-z\s]+$/)) {
        alert('Por favor, insira apenas letras minúsculas e sem acento.');
        return '';
    }

    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function descriptografar(texto) {
    if (!texto.match(/^(enter|imes|ai|ober|ufat|\s)+$/)) {
        alert('O texto parece não estar criptografado corretamente.');
        return '';
    }

    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

function criptografarTexto() {
    var textoEntrada = document.getElementById('textoEntrada').value;
    var textoSaida = criptografar(textoEntrada);
    document.getElementById('textoSaida').value = textoSaida;
}

function descriptografarTexto() {
    var textoEntrada = document.getElementById('textoEntrada').value;
    var textoSaida = descriptografar(textoEntrada);
    document.getElementById('textoSaida').value = textoSaida;
}

function copiartextoSaida() {
    var textoSaida = document.getElementById('textoSaida');
    textoSaida.select();
    document.execCommand('copy');
    alert('Texto copiado para área de transferência!');
}