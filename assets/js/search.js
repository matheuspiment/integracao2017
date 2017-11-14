  /**
   * Função javascript que "captura" os parâmetros de uma URL.
   *
   * @example
   *   exemplo(https://matheuspiment.github.io/integracao2017/pesquisa.html?pesquisa=home); // {pesquisa: home}
   *
   * @returns {Object}
   */
  function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split("&");
    keyValuePairs.forEach(function(keyValuePair) {
      keyValuePair = keyValuePair.split('=');
      result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
    });
    return result;
  }

  /*
   * Algoritmo de Levenshtein
   */
  function levenshtein_distance_a (a, b) {
    if(a.length == 0) return b.length;
    if(b.length == 0) return a.length;

    var matrix = [];

    // increment along the first column of each row
    var i;
    for(i = 0; i <= b.length; i++){
      matrix[i] = [i];
    }

    // increment each column in the first row
    var j;
    for(j = 0; j <= a.length; j++){
      matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for(i = 1; i <= b.length; i++){
      for(j = 1; j <= a.length; j++){
        if(b.charAt(i-1) == a.charAt(j-1)){
          matrix[i][j] = matrix[i-1][j-1];
        } else {
          matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                  Math.min(matrix[i][j-1] + 1, // insertion
                                           matrix[i-1][j] + 1)); // deletion
        }
      }
    }

    return matrix[b.length][a.length];
  }

  /**
   * Função javascript que realiza a busca de uma palavra em um arquivo JSON
   *
   * @param   {String} keyword		  A palavra para comparação
   * @returns {Void}
   */
  function pesquisar(keyword) {
    var saida = '';
    var topicos = [];
    var palavraChave = [];
    var comprimento;
    var grauReferencia;

    $.getJSON("../dicionario.json", function(data) {
      topicos = data.topicos;

      for (i = 0; i < topicos.length; i++) {
        palavraChave = topicos[i].palavraChave;

        for (j = 0; j < palavraChave.length; j++) {
          comprimento = palavraChave[j].length;
          keyword = keyword.toLowerCase();
          palavraChave[j] = palavraChave[j].toLowerCase();
          // Ajusta o grau de referência para "casamento" em 50%
          grauReferencia = levenshtein_distance_a(keyword, palavraChave[j]) / comprimento;
          if (grauReferencia <= 0.5 || palavraChave[j].indexOf(keyword) == 0) {
            saida += '<div class="col-md-12 search-result">';
            saida += '<a href="' + topicos[i].caminho + '">';
            saida += '<h2>' + topicos[i].titulo + '</h2>';
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
