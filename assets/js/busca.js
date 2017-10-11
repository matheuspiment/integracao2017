$( document ).ready(function() {
  // Função que captura os parâmetros passados pela URL
  function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split("&");
    keyValuePairs.forEach(function(keyValuePair) {
      keyValuePair = keyValuePair.split('=');
      result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
    });
    return result;
  }

  // Função que realiza a pesquisa no arquivo JSON
  function pesquisar(keyword) {
    var saida = '';
    var topicos = [];
    var palavraChave = [];
    var comprimento;
    var grauReferencia;

    $.getJSON("https://raw.githubusercontent.com/matheuspiment/integracao2017/master/dicionario.json", function(data) {
      topicos = data.topicos;

      for (i = 0; i < topicos.length; i++) {
        palavraChave = topicos[i].palavraChave;

        for (j = 0; j < palavraChave.length; j++) {
          comprimento = palavraChave[j].length;
          keyword = keyword.toLowerCase();
          palavraChave[j] = palavraChave[j].toLowerCase();
          grauReferencia = levenshtein_distance_a(keyword, palavraChave[j]) / comprimento;
          if (grauReferencia <= 0.5) {
            saida += '<div class="col-md-12">';
            saida += '<a href="' + topicos[i].caminho + '">';
            saida += '<h1>' + topicos[i].titulo + '</h1>';
            saida += '<p>' + topicos[i].descricao + '</p>';
            saida += '</a>';
            saida += '</div>';
          }
        }
      }

      if (saida != "") {
        document.getElementById('resultado').innerHTML = saida;
      } else {
        saida += '<div class="col-md-12">';
        saida += '<div class="alert alert-info" role="alert">';
        saida += 'Nenhum registro encontrado :(';
        saida += '</div>'
        saida += '</div>';
        document.getElementById('resultado').innerHTML = saida;
      }

    });
  }

  var minhaBusca = queryObj();
  var retornoBusca;
  if (typeof minhaBusca.pesquisa != "undefined") {
    retornoBusca = setTimeout(function(){
      pesquisar(minhaBusca.pesquisa);
    }, 2000);
  } else {
    retornoBusca = '';
    retornoBusca += '<div class="col-md-12">';
    retornoBusca += '<div class="alert alert-info" role="alert">';
    retornoBusca += 'Digite no campo de busca para pesquisar ;)';
    retornoBusca += '</div>'
    retornoBusca += '</div>';
    document.getElementById('resultado').innerHTML = retornoBusca;
  }

});
