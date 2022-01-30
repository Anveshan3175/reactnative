/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import HelloWorld from './DynamicSectionListApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HelloWorld);
