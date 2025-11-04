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
01. Colocar a integração com EllenWhiteWritings
02. Certificar-se que na leitura da biblia apareça o número dos versiculos
03. Colocar uma scrollbar na leitura da biblia, facilitando a navegação
04. Desabilitar botão de Leitura e Marcar texto automaticamente
se nao houver texto para leitura ou `****`
05. Remover ou Substituir Imagem do Cordova em LoadScreen
06. Publicar apenas se os icones estiverem corretos
09. Colocar um buyme a coffee 


### Gerando a Keystore

Exemplo:

```shell
keytool -genkey -v -keystore plano.keystore -alias plano -keyalg RSA -keysize 2048 -validity 10000
```


### Gerando um app apk para distribuição pessoal
```shell
cordova build android --release -- -- --packageType=apk
```

**para release - dispensa a assinatura**

```shell
cordova run android --release -- --keystore=../plano.keystore --storePassword=ASENHAMAGNIFICA --alias=plano --password=ASENHAMAGNIFICA --packageType=bundle
```

### Assinatura

Depois de gerada a chave, vamos ASSINAR o APK com a ferramenta jarsigner utilizando esta chave

Exemplo:

```shell
jarsigner -keystore .\plano.keystore .\platforms\android\app\build\outputs\bundle\release\app-release.aab plano
```

Vai pedir a senha que vc cadastrou
