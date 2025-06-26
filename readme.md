## Projeto Plano de Estudo Bíblico

## Tecnologia
* Cordova
* HTML5
* Gradle 
   - se gradle 8.1, usar OpenJDK 17 para build
   - se gradle 8.7, usar OpenJDK 22 para build
* simulate

```shell 
npm install -g simulate
```

```shell
simulate android
```

## Próximos passos
1. Remover erros 
   - existem referencias erradas no texto biblico e espirito de profecia - procurar e corrigir 
   - colocar no topo do detalhe do estudo o mes e dia para melhorar a navegação   
2. Gerar arte
3. Colocar a arte no APP e testar
4. Colocar biblia nessa versão?
5. Verificar se ao clicar no livro de Atos dos Apostolos está indo a pagina ou 
nesse ponto, por enquanto, remover o botão; ou colocar alerta 'indisponivel'
6. Assinar
7. Publicar
```shell
cordova build android --debug  --buildConf --storePassword=Verde54@ --password=Verde54@
```