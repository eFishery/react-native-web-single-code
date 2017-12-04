package com.yoloreactnativeoffline;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.horcrux.svg.SvgPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import javax.annotation.Nullable;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNDeviceInfo(),
            new SvgPackage(),
            new VectorIconsPackage()
      );
    }

    // /**
    //  * Returns a custom path of the bundle file. This is used in cases the bundle should be loaded
    //  * from a custom path. By default it is loaded from Android assets, from a path specified
    //  * by {@link getBundleAssetName}.
    //  * e.g. "file://sdcard/myapp_cache/index.android.bundle"
    //  */
    // @Override
    // protected @Nullable String getJSBundleFile() {
    //   // return "http://imballinst.com/test.js.bundle"
    //   return null;
    // }

    // /**
    //  * Returns the name of the bundle in assets. If this is null, and no file path is specified for
    //  * the bundle, the app will only work with {@code getUseDeveloperSupport} enabled and will
    //  * always try to load the JS bundle from the packager server.
    //  * e.g. "index.android.bundle"
    //  */
    // @Override
    // protected @Nullable String getBundleAssetName() {
    //   // return "http://imballinst.com/test.js.bundle";
    //   return "index.android.bundle";
    // }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
