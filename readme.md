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

### Gerando a Keystore

Exemplo:

```shell
keytool -genkey -v -keystore planoestudobiblico.keystore -alias planoestudobiblico -keyalg RSA -keysize 2048 -validity 10000
```

Serão solicitadas algumas informações:

```
keystore password? : xxxxxxx
What is your first and last name? :  xxxxxx 
What is the name of your organizational unit? :  xxxxxxxx
What is the name of your organization? :  xxxxxxxxx
What is the name of your City or Locality? :  xxxxxxx
What is the name of your State or Province? :  xxxxx
What is the two-letter country code for this unit? :  xxx
```

### Gerando um app apk
```shell
cordova build android --release -- -- --packageType=apk
```

Depois de gerada a chave, vamos ASSINAR o APK com a ferramenta jarsigner utilizando esta chave

Exemplo:

```shell
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore appassinado.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk appassinado
```

Vai pedir a senha que vc cadastrou

gerando o APK a partir do `zipalign` do seu SDK:

```shell
/seu-caminho-para-o-zipalign/zipalign -v 4 /seu-caminho-para-o-apk-nao-assinado/android-release-unsigned.apk /seu-caminho-de-saida-para-o-apk-assinado/appassinado.apk
```

Seu APK está pronto para ser colocado na PlayStore

### Alternativa - Gerando o AAB assinado

apos gerar a keystore, cria a bundle assinada 

```shell
cordova run android --release -- --keystore=planoestudobiblico.keystore --storePassword=ASENHAQVCSABE --alias=planoestudobiblico --password=ASENHAQVCSABE --packageType=bundle
```

7. Publicar
