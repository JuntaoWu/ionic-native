/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

declare var baidu_location: any;

/**
 * @name Baidu Geolocation
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { BaiduGeolocation } from '@ionic-native/baidu-geolocation';
 *
 *
 * constructor(private baiduGeolocation: BaiduGeolocation) { }
 *
 * ...
 *
 *
 * this.baiduGeolocation.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'BaiduGeolocation',
  plugin: 'hewz.plugins.baidu-location', // npm package name, example: cordova-plugin-camera
  pluginRef: 'baidu_location', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/hewz/cordova-baidu-location', // the github repository URL for the plugin
  install: 'ionic cordova plugin add hewz.plugins.baidu-location', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'Browser'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class BaiduGeolocation extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @param arg2 {number} Another param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  getCurrentPosition(options?: any): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

  watchPosition(options?: any): Observable<any> {
    return new Observable<any>(
      (observer: any) => {
        let watchId = baidu_location.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
        return () => baidu_location.clearWatch(watchId);
      }
    );
  }

  @Cordova({
    callbackOrder: 'reverse'
  })
  test(): Promise<any> {
    return;
  }
}
