package com.weather_app

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class PeoplesListModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "PeoplesListModule"

    @ReactMethod
    fun sayHi() {
        Log.d("Hello World", "Wolan")
    }
}