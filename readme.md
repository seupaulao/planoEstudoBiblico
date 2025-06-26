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

- gerar a keystore

```shell
keytool -genkey -v -keystore <keystoreName>.keystore -alias <Keystore AliasName> -keyalg <Key algorithm> -keysize <Key size> -validity <Key Validity in Days>
```

Exemplo:

```shell
keytool -genkey -v -keystore appassinado.keystore -alias appassinado -keyalg RSA -keysize 2048 -validity 10000
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

Depois de gerada a chave, vamos assinar o apk com a ferramenta jarsigner utilizando esta chave

```shell
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore <keystorename <Unsigned APK file> <Keystore Alias name>
```

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


7. Publicar
```shell
cordova build android --debug  --buildConf --storePassword=Verde54@ --password=Verde54@
```