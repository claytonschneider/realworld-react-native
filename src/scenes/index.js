import { Navigation } from 'react-native-navigation';
import Home from './Home/Home';

export function registerScenes(store, Provider) {
  Navigation.registerComponent('Home', () => Home, store, Provider);
}
