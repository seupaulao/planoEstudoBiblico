/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

var chaveTemp = "";
function setChaveTemp(v) {
    chaveTemp = v;
} 

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
   // document.getElementById('deviceready').classList.add('ready');

    atualizarMeses();
    w3.hide("#teladetalhar");
}

function atualizarMeses() {
    criarMeses(31,'JAN','janeiro');
    criarMeses(28,'FEV','fevereiro');
    criarMeses(31,'MAR','marco');
    criarMeses(30,'ABR','abril');
    criarMeses(31,'MAI','maio');
    criarMeses(30,'JUN','junho');
    criarMeses(31,'JUL','julho');
    criarMeses(31,'AGO','agosto');
    criarMeses(30,'SET','setembro');
    criarMeses(31,'OUT','outubro');
    criarMeses(30,'NOV','novembro');
    criarMeses(31,'DEZ','dezembro');
}

function criarMeses(qtedias, ch, nomeElemento) {
    let str = '';
    let storage = window.localStorage;
    for(let i=1;i<=qtedias;i++) {
        const chave = ch + '_' + i;
        const valchave = storage.getItem(chave);
         str += '<div id="'+chave+'" onclick="detalhar(\''+chave+'\')" class="'+calcularCorCaixa(valchave)+'">'+i+'</div>'
    }
    let nomeMES = nomeElemento.toUpperCase();
    if (nomeElemento == "marco") nomeMES="MARÇO";
    document.getElementById(nomeElemento).innerHTML = "<br><div class='titulo2'>"+nomeMES+"</div><br><div align='center' class='titulo4'>Clique em um dia para estudar</div><br><div class='mes'>" + str + "</div><br>";
}

function calcularCorCaixa(valchave) {
    let padrao = 'caixavermelha';
    if (valchave == null) return padrao;
    if (valchave.length == 1) return 'caixaamarela';
    if (valchave.length > 1) return 'caixaverde';
}

function detalhar(chave) {
    w3.show("#teladetalhar");
    w3.hide("#telainicial");
    console.log(chave);
    setChaveTemp(chave);
    carregarBotoesDetalhar();
  //  document.getElementById('chave').innerHTML = chave;
    carregarDadosDetalhar();
    carregarDiaTal(chave);
}

function carregarDiaTal(chave) {
    document.getElementById("diatal").innerHTML = extrairDia(chave);
}

function extrairDia(chave) {
    return chave.split('_').join(' ');
}

function carregarDadosDetalhar() {
    const valor1 = getCapitulosBibliaPlano(chaveTemp);
    document.getElementById("textoBiblia").innerHTML = "<b>Texto: </b>" + valor1;

    const valor2 = getNomeLivro(getSiglaESPlano(chaveTemp));
    document.getElementById("livroEP").innerHTML = "<b>Livro: </b>" + valor2;
    const valor3 = getCapitulosESPlano( chaveTemp );
    document.getElementById("capituloEP").innerHTML = "<b>Capitulo: </b>"+valor3;
    const valor4 = getTituloCapituloESPlano(chaveTemp);
    document.getElementById("textoEP").innerHTML = "<b>Texto: </b>" + valor4;
}

function voltar() {
    w3.hide("#teladetalhar");
    w3.show("#telainicial");  
    atualizarMeses();  
}

function salvar(chave, valor) {
    let storage = window.localStorage;
    let anterior = storage.getItem(chave);
    if (anterior != null) {
        storage.setItem(chave,anterior + valor);
    } else {
        storage.setItem(chave,valor);
    }
}

function lidoTextoBiblico() {
    let storage = window.localStorage;
    let valor = storage.getItem(chaveTemp);
    if (valor == null || valor.indexOf('b') < 0) {
        salvar(chaveTemp, 'b');
    }
    w3.removeClass("#botaoB", "botaoazul");
    w3.addClass("#botaoB", "botaoverde");
    document.getElementById("botaoB").innerHTML = "Lido";
    testarBotaoReiniciarDia();
}

function lidoTextoEP() {
    let storage = window.localStorage;
    let valor = storage.getItem(chaveTemp);
    if (valor == null || valor.indexOf('p') < 0) {
        salvar(chaveTemp, 'p');
    }
    w3.removeClass("#botaoEP", "botaoazul");
    w3.addClass("#botaoEP", "botaoverde");
    document.getElementById("botaoEP").innerHTML = "Lido";
    testarBotaoReiniciarDia();
}

function testarBotaoReiniciarDia() {
    let storage = window.localStorage;
    let valor = storage.getItem(chaveTemp);
    if (valor == null) {
        w3.hide('.botaoreiniciardia');
    } else {
        w3.show('.botaoreiniciardia');
    }
}

function carregarBotoesDetalhar() {
    let storage = window.localStorage;
    let valor = storage.getItem(chaveTemp);
    testarBotaoReiniciarDia();
        
    if (valor != null && valor.indexOf('b') >= 0) {
        w3.removeClass("#botaoB", "botaoazul");
        w3.addClass("#botaoB", "botaoverde");
        document.getElementById("botaoB").innerHTML = "Lido"; 
    } else {
        w3.addClass("#botaoB", "botaoazul");
        w3.removeClass("#botaoB", "botaoverde");
        document.getElementById("botaoB").innerHTML = "Marcar como Lido Texto Bíblico"; 
    }
    if (valor != null && valor.indexOf('p') >= 0) {
        w3.removeClass("#botaoEP", "botaoazul");
        w3.addClass("#botaoEP", "botaoverde");
        document.getElementById("botaoEP").innerHTML = "Lido"; 
    } else {
        w3.addClass("#botaoEP", "botaoazul");
        w3.removeClass("#botaoEP", "botaoverde");
        document.getElementById("botaoEP").innerHTML = "Marcar como Lido Texto Espírito de Profecia"; 
    }

}

function abrirFechar(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function reiniciarDia() {
    const storage =  window.localStorage;
    storage.removeItem(chaveTemp);
    carregarBotoesDetalhar();
}
