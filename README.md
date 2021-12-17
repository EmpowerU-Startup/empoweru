# EmpowerU App
  
## Setup Instructions

 1. Install Node:  https://nodejs.org/en/download/
 2. Install Expo: `npm install --global expo-cli` (note: if you run into eacces permission errors, try following this guide [here](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally))
 3. Install the Expo Go app on your iOS or Android device
 4. Clone this repo: `git clone https://github.com/EmpowerU-Startup/empoweru.git`
 5. `cd` into the empoweru directory
 6. Run `npm install` and `npm install expo-cli`
 7. The command `expo start` (and also `npm start`) should work and show a QR code. Scanning this with your phone should launch the Expo Go app

## AWS Amplify Setup
 - Follow the instructions on this [website](https://dzone.com/articles/a-complete-guide-for-integrating-aws-amplify-to-re) to get AWS Amplify integrated into your project. 
	 - where it says `yarn add`, you can replace with `npm install`

If when loading the expo app on the phone it returns an error, the following commands may solve the issues:

	expo install @react-native-async-storage/async-storage
    expo install @react-native-community/netinfo
