adicionarLinha = function() {

    var tabela = document.querySelector("table");
    var Nlinha = tabela.rows.length;
    var Ncoluna = tabela.rows[Nlinha-1].cells.length;

    var novaLinha = tabela.insertRow(Nlinha);
    var j = 0
    for (j; j < Ncoluna; j++) {
        novaCelula = novaLinha.insertCell(j);
        novaCelula.innerHTML = "Linha "+ Nlinha + " – Coluna "+ j;
    }

} 