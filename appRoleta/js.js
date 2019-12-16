/* 
* * * * * * * * * * * * * * * * 
* Função para girar a roleta. *
* * * * * * * * * * * * * * * *  
*/

function girarRoleta() {  
  //declação global das variáveis para roleta e dos botões de play e stop. 
  globalObjects = {
      btJogar: document.getElementById("btJogar"),
      roleta: document.getElementById("roleta"),
      btParar: document.getElementById("btParar")
  }
  
  //inicializar o atributo src vazia
  document.getElementById("imgModal").src = "";
  //instânciar objeto data
  globalObjects.tempoInicial = new Date();
  //Ocultar o botão de jogar 
  globalObjects.btJogar.style.visibility = "hidden";
  //Mostrar o botão de parar
  globalObjects.btParar.style.visibility = "visible";
  //Animação da roleta - Uma volta completa em 1 segundos de forma initerrupta
  globalObjects.roleta.style.animation = "roleta 1s linear infinite";
}

/* 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Função para calcular em qual box estará quando a roleta parar de rodar  *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

function calcularBox() {
//calcular quanto tempo a roleta está girando
  var tempoFinal = new Date();
  var tempo = Math.abs(tempoFinal - globalObjects.tempoInicial);
//calcular quanto tempo demora em cada box 125 = 1000ms / QNTIDADEBOX)
  var box = parseInt(tempo / 125);
//tratativa caso a roleta dê mais de uma volta
  if (box > 7)
      box = parseInt(box % 8);
  return box;
}

/* 
* * * * * * * * * * * * * * * * 
* Função para parar a roleta  *
* * * * * * * * * * * * * * * * 
*/

function pararRoleta() {
//pausar a animação e mostrar o botão de play  
  globalObjects.roleta.style["animation-play-state"] = "paused";
  globalObjects.btJogar.style.visibility = "visible";

//chamar a função calcularBox()
  var box = calcularBox();

//Condicional para chamar a rota referente ao box selecionado  
  if(box == 0){
  //Chamada da API
    $.ajax({
      //rota
      url:"http://localhost:3001/acao",
      //retornar JSON
      dataType: 'json',
      success: function(item){
      
      //Função para sortear um número referente ao índice do vetor).
      var indice = Math.floor(Math.random() * (item.length));
      

      //Input das informações na interface
      document.getElementById("imgModal").src = item[indice].CARTAZ;
      document.getElementById("tituloModal").innerHTML = item[indice].TITULO;
      document.getElementById("sinopseModal").innerHTML = item[indice].SINOPSE;
      document.getElementById("diretorModal").innerHTML = "Direção: " + item[indice].DIRETOR;
      document.getElementById("lancamentoModal").innerHTML = "Data de Lançamento: " + item[indice].DATA_LANCAMENTO;
      
      }    
  })
}
  else if(box == 1){
    $.ajax({
      url:"http://localhost:3001/aventura",
      dataType: 'json',
      success: function(item){
      
      var indice = Math.floor(Math.random() * (item.length));
      document.getElementById("imgModal").src = item[indice].CARTAZ;
      document.getElementById("tituloModal").innerHTML = item[indice].TITULO;
      document.getElementById("sinopseModal").innerHTML = item[indice].SINOPSE;
      document.getElementById("diretorModal").innerHTML = "Direção: " + item[indice].DIRETOR;
      document.getElementById("lancamentoModal").innerHTML = "Data de Lançamento: " + item[indice].DATA_LANCAMENTO;
      
      }    
  })
  
  }
  else if(box == 2){
    $.ajax({
      url:"http://localhost:3001/view",
      dataType: 'json',
      success: function(item){
      
      var indice = Math.floor(Math.random() * (item.length));
      document.getElementById("imgModal").src = item[indice].CARTAZ;
      document.getElementById("tituloModal").innerHTML = item[indice].TITULO;
      document.getElementById("sinopseModal").innerHTML = item[indice].SINOPSE;
      document.getElementById("diretorModal").innerHTML = "Direção: " + item[indice].DIRETOR;
      document.getElementById("lancamentoModal").innerHTML = "Data de Lançamento: " + item[indice].DT_LANCAMENTO;
      
      }    
  })
  
  }
  else if(box == 3){
    $.ajax({
      url:"http://localhost:3001/suspense",
      dataType: 'json',
      success: function(item){
      
      var indice = Math.floor(Math.random() * (item.length));
      document.getElementById("imgModal").src = item[indice].CARTAZ;
      document.getElementById("tituloModal").innerHTML = item[indice].TITULO;
      document.getElementById("sinopseModal").innerHTML = item[indice].SINOPSE;
      document.getElementById("diretorModal").innerHTML = "Direção: " + item[indice].DIRETOR;
      document.getElementById("lancamentoModal").innerHTML = "Data de Lançamento: " + item[indice].DATA_LANCAMENTO;
      
      }    
  })
  }
  else if(box == 4){
    $.ajax({
      url:"http://localhost:3001/faroeste",
      dataType: 'json',
      success: function(item){
      
      var indice = Math.floor(Math.random() * (item.length));
      document.getElementById("imgModal").src = item[indice].CARTAZ;
      document.getElementById("tituloModal").innerHTML = item[indice].TITULO;
      document.getElementById("sinopseModal").innerHTML = item[indice].SINOPSE;
      document.getElementById("diretorModal").innerHTML = "Direção: " + item[indice].DIRETOR;
      document.getElementById("lancamentoModal").innerHTML = "Data de Lançamento: " + item[indice].DT_LANCAMENTO;
      
      }    
  })
  
  }
  else if(box == 5){
    $.ajax({
      url:"http://localhost:3001/fantasia",
      dataType: 'json',
      success: function(item){
      
      var indice = Math.floor(Math.random() * (item.length));
      document.getElementById("imgModal").src = item[indice].CARTAZ;
      document.getElementById("tituloModal").innerHTML = item[indice].TITULO;
      document.getElementById("sinopseModal").innerHTML = item[indice].SINOPSE;
      document.getElementById("diretorModal").innerHTML = "Direção: " + item[indice].DIRETOR;
      document.getElementById("lancamentoModal").innerHTML = "Data de Lançamento: " + item[indice].DT_LANCAMENTO;
      
      }    
  })
  
  }
  else if(box == 6){
    $.ajax({
      url:"http://localhost:3001/drama",
      dataType: 'json',
      success: function(item){
      
      var indice = Math.floor(Math.random() * (item.length));
      document.getElementById("imgModal").src = item[indice].CARTAZ;
      document.getElementById("tituloModal").innerHTML = item[indice].TITULO;
      document.getElementById("sinopseModal").innerHTML = item[indice].SINOPSE;
      document.getElementById("diretorModal").innerHTML = "Direção: " + item[indice].DIRETOR;
      document.getElementById("lancamentoModal").innerHTML = "Data de Lançamento: " + item[indice].DT_LANCAMENTO;
      
      }    
  })
  
  }
  else if(box == 7){
    $.ajax({
      url:"http://localhost:3001/comedia",
      dataType: 'json',
      success: function(item){
      
      var indice = Math.floor(Math.random() * (item.length));
      document.getElementById("imgModal").src = item[indice].CARTAZ;
      document.getElementById("tituloModal").innerHTML = item[indice].TITULO;
      document.getElementById("sinopseModal").innerHTML = item[indice].SINOPSE;
      document.getElementById("diretorModal").innerHTML = "Direção: " + item[indice].DIRETOR;
      document.getElementById("lancamentoModal").innerHTML = "Data de Lançamento: " + item[indice].DATA_LANCAMENTO;
      
      }    
  })
  
  }
  //Abrir o Modal
  abrirModal();

  globalObjects.btParar.style.visibility = "hidden";
  
}

/* 
* * * * * * * * * * * * * * * * 
* Função para abrir o Modal   *
* * * * * * * * * * * * * * * * 
*/

function abrirModal() {
  $(".modal").modal({
    show: true
    
  })
  ;
}
