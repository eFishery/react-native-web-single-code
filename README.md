## yolo-react-native-app
Repository untuk *Proof of Concept* React-Native cross platform. Awalnya dibuat dengan CRNA (*Create React-Native App*), lalu karena satu dan lain hal; salah satunya size APK dan App setelah di-install yang besar (masing-masing 28MB dan 100MB), akhirnya diputuskan bahwa sudah saatnya untuk `npm run eject`, yaitu melepas aplikasi React-Native dari Expo sedemikian sehingga, jadilah struktur folder project yang seperti sekarang.

### Why Not Expo?
https://docs.expo.io/versions/latest/introduction/why-not-expo.html

### How It Works
Pertama dan utama, buka `app.json`. Pastikan ada dua field berikut. Field `name` adalah nama package yang akan diregister, sedangkan `displayName` adalah nama aplikasi ketika sudah diinstall nantinya.

```
{
  ...
  "name": "yoloreactnativeoffline",
  "displayName": "Test App"
  ...
}
```

Di root directory, ada file `index-android.js` dan `index-ios.js`. Buka keduanya, maka dapat ditemukan line berikut.

```
AppRegistry.registerComponent('yoloreactnativeoffline', () => App);
```

Apa tujuan line tersebut? Line tersebut berfungsi untuk me-register package `yoloreactnativeoffline` yang isinya adalah komponen `App`. Lalu, si `yoloreactnativeoffline` ini akan digunakan dimana? Pindah direktori ke `android/app/src/main/java/com/yoloreactnativeoffline`, lalu buka `MainActivity.java`, akan ada *lines of code* berikut.

```
    ...
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "yoloreactnativeoffline";
    }
    ...
```

Nah, itu yang di-*return* sama kan seperti dengan field `name` yang ada di `app.json`, begitu juga dengan yang sudah diregister di `index-android.js` dan `index-ios.js`. Demikian alurnya, untuk mulai development, bisa langsung ke `./App.js`, lalu ikuti saja branching komponen-komponen yang di-*import*.

### Development
#### Web
`npm run wds` untuk menjalankan **Webpack Dev Server**. Disupport dengan hot dan automatic live reload.

#### Native (Android)
Jalankan emulator atau hubungkan device Android dengan fitur USB debugging on. Setelah itu, jalankan `npm run android:bundle-dev`, lalu `npm run android`. Seharusnya, di emulator/device yang sudah dihubungkan sudah diinstalasikan aplikasi versi debug yang bisa live reload atau hot reload. Untuk membuka developer menu, bisa ditekan tombol Menu lalu pilih mau live reload atau hot reload.

### Production
#### Web
`npm run build:web`. Hasil bundle ada di `web/public`.

#### Native (Android)
`npm run build:native`. Hasil build APK ada di `app/build/outputs/apk`, pilih yang `app-release.apk`.

### Linking
Oke, jadi apa itu linking? Di React-Native, walaupun sama-sama pakai Javascript, tapi packagenya tidak semudah itu untuk digunakan. Sintaks `import` tidak cukup untuk include dependencies ke aplikasi kita. Kita perlu melakukan `npm run link`. Hasilnya bisa dilihat di `android/app/src/main/java/com/yoloreactnativeoffline/MainApplication.java`. Pada kutipan kode di bawah, `MainReactPackage()` dan `VectorIconsPackage()` adalah dependencies yang di-include ke aplikasi Android kita.

```
    ...
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new VectorIconsPackage()
      );
    }
    ...
```
