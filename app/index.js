import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './loginscreen';
import Homescreen from './homescreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
      <Stack.Screen name='login' component={LoginScreen}/>
      <Stack.Screen name='home' component={Homescreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
