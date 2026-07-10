#!/bin/bash

set -e

APP_NAME="złAPP Koziołka"
APP_ID="com.example.zlappkoziolka"
WEB_DIR="dist"
TARGET_DIR="$HOME/Desktop/zlapp-koziolka-exports"

echo "[INFO] Cleaning previous Android artifacts to ensure a fresh environment..."
rm -rf android capacitor.config.json capacitor.config.ts

echo "[INFO] Initialising NPM installation..."
npm install

echo "[INFO] Commencing Webpack build..."
npm run build

echo "[INFO] Fetching Capacitor dependencies..."
npm install @capacitor/core @capacitor/cli @capacitor/android

echo "[INFO] Initialising Capacitor configuration..."
npx cap init "${APP_NAME}" "${APP_ID}" --web-dir "${WEB_DIR}"

echo "[INFO] Generating Android project structure..."
npx cap add android

echo "[INFO] Injecting Android Location and Camera permissions..."
sed -i '/<\/manifest>/i \    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />\n    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n    <uses-feature android:name="android.hardware.location.gps" />\n    <uses-permission android:name="android.permission.CAMERA" /> />' android/app/src/main/AndroidManifest.xml

npx cap sync android

echo "[INFO] Configuring local Android SDK path..."
echo "sdk.dir=$HOME/Android/Sdk" > android/local.properties

echo "[INFO] Commencing Gradle debug build..."
cd android
chmod +x gradlew
./gradlew assembleDebug
cd ..

echo "[INFO] Renaming APK file..."
mv android/app/build/outputs/apk/debug/app-debug.apk android/app/build/outputs/apk/debug/zlapp-koziolka.apk

echo "[INFO] Exporting APK to target directory..."
mkdir -p "${TARGET_DIR}"
cp android/app/build/outputs/apk/debug/zlapp-koziolka.apk "${TARGET_DIR}/"

echo "[INFO] Export completed successfully! The file is available at: ${TARGET_DIR}/zlapp-koziolka.apk"
