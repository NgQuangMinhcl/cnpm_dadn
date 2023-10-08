import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './loginscreen';
import Homescreen from './homescreen';
import SignupSrceen from './signupscreen';
import ForgetPassSrceen from './forgetpass';
import Settingscreen from './settingcreen';
import Set_info from './set_info';
import Set_term from './set_term';
import Set_policy from './set_poli';
import Set_pass from './set_pass';
import Control_room from './control_room';
import Device from './device';
import Temp_screen from './screen_final.js/temp_screen';
import Fan_screen from './screen_final.js/fan_screen';
import Lamp_screen from './screen_final.js/lamp_screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator screenOptions={{headerShown : false}}>
    <Stack.Screen name='login' component={LoginScreen}/>
    <Stack.Screen name='home' component={Homescreen}/>
    <Stack.Screen name='singup'component={SignupSrceen}/>
    <Stack.Screen name='forgetpass' component={ForgetPassSrceen}/>
    <Stack.Screen name='setting' component={Settingscreen}/>
    <Stack.Screen name='set_info' component={Set_info}/>
    <Stack.Screen name='set_term' component={Set_term}/>
    <Stack.Screen name='set_policy' component={Set_policy}/>
    <Stack.Screen name='set_pass' component={Set_pass}/>
    <Stack.Screen name='control_room' component={Control_room}/>
    <Stack.Screen name='device' component={Device}/>
    <Stack.Screen name='temp_screen' component={Temp_screen}/>
    <Stack.Screen name='fan_screen' component={Fan_screen}/>
    <Stack.Screen name='lamp_screen' component={Lamp_screen}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
