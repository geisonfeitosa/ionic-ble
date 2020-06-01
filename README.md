ionic cordova run android


## Geração da chave (executado somente no primeiro deploy)

```bash
keytool -genkey -v -keystore release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias smartporteiro
```

ou

```bash
C:\AmbienteTrabalho\Aplicativos\jdk1.8.0_151\bin\keytool -genkey -v -keystore release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias smartporteiro
```

## Geração do APK

Realize ajustes no arquivo configo.xml

```bash
ionic cordova build android --prod --release
```

O arquivo será gerado em:

```bash
explorer platforms\android\app\build\outputs\apk\release\
```


## Assinatura do APK

C:\AmbienteTrabalho\Aplicativos\jdk1.8.0_151\bin\jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release-key.jks C:\AmbienteTrabalho\Projetos\plugfarm\ionic-bluetooth-le\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk smartporteiro