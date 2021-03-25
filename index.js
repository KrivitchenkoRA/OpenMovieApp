import {AppRegistry, Text, TextInput} from 'react-native';
import App from './src/root';
import {name as appName} from './app.json';

Text.defaultProps = {
  accessible: true,
  allowFontScaling: false,
  ellipsizeMode: 'tail',
};
TextInput.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
