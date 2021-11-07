function jogar() {

    var dadoA       // declara variável do primeiro dado
    var dadoB       // declara variável do segundo dado

    var exibeA      // declara variável do resultado do primeiro dado
    var exibeB      // declara variável do resultado do segundo dado

    dadoA = Math.ceil(Math.random() * 6);    // sorteia número do primeiro dado
    dadoB = Math.ceil(Math.random() * 6);    // sorteia número do segundo dado

    console.log(dadoA, dadoB);  // exibe resultados no console para auditoria

    switch (dadoA) {            // especifica o arquivo a ser exibido de acordo com o resultado de cada caso
        case 1:
          exibeA = "face1.png";
          break;
        case 2:
          exibeA = "face2.png";
          break;
        case 3:
          exibeA = "face3.png";
          break;
        case 4:
          exibeA = "face4.png";
          break;
        case 5:
          exibeA = "face5.png";
          break;
        case 6:
          exibeA = "face6.png";
      }


      switch (dadoB) {     // especifica o arquivo a ser exibido de acordo com o resultado de cada caso do segundo dado
        case 1:
          exibeB = "face1.png";
          break;
        case 2:
          exibeB = "face2.png";
          break;
        case 3:
          exibeB = "face3.png";
          break;
        case 4:
          exibeB = "face4.png";
          break;
        case 5:
          exibeB = "face5.png";
          break;
        case 6:
          exibeB = "face6.png";
      }

      document.getElementById("imgDadoA").src = exibeA;    // mostra a imagem do número correspondente a cada face do primeiro dado
      document.getElementById("imgDadoB").src = exibeB;    // mostra a imagem do número correspondente a cada face do segundo dado

}