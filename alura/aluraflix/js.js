var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"]
// indice =             0            1              2

listaFilmes.push("Harry Potter");

//   valor inicial  condição     expressão final
for (var indice = 0; indice < listaFilmes.length; indice ++) {
    document.write("<p>" + indice + "</p>");
    document.write("<p>" + listaFilmes[indice] + "</p>");
}
// document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2] + "</p>");
// document.write("<p>" + listaFilmes[3] + "</p>");

