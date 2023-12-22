# Appium Template

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Overview

This template is designed for projects involving Android, iOS, React Native, or Flutter, intending to leverage Appium and Jest for E2E automated testing. It includes straightforward setup instructions, enabling test execution on both Android and iOS platforms.

Note that automatic server initialization is currently limited to macOS users. For Windows/Linux users, manual Appium server startup is necessary, achieved by executing the following command in a separate terminal.

```powershell
appium
```

## Installation

1. Install Node.js (Node Official Docs: https://nodejs.org/en/download/)
2. Install Appium (`npm i -g appium`)
3. Install Appium Android Driver (`appium driver install uiautomator2`)
4. Install Appium iOS Driver (`appium driver install xcuitest`)

### Setup

1. Clone this repository
2. Install dependencies (`yarn install`)
3. Check Appium Configurations (`yarn appium-doctor`) and check for all essential dependencies.
4. Place your app in `android/build` or `ios/build` depending on the target platform.
5. Run `yarn test android` or `yarn test ios` to initiate the Appium server and begin testing.

# Folder Structure

Key directories and files in this project are as follows:

`android`: Contains the Android application to be tested. Place the APK in `android/build`.
`ios`: Houses the iOS application for testing. Place the IPA in `ios/build`.
`__tests__`: This directory holds test scripts. You can add custom test files here, organized by features.
`config`: Contains configuration files. Add your custom configurations here.
