import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from 'npm install @react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Tela1 from './components/Tela1';
import Tela2 from './components/Tela2';

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle:{
            backgroundColor:'black',
            height: 60
          },
          tabBarLabelStyle:{
            fontSize: 22,
            fontWeight: '500',
            color: 'red'
          },
          tabBarActiveTintColor:'red'
        }}
      >
        <Tabs.Screen
          name='Tela 1'
          component={Tela1}
          options={{
            tabBarIcon: ({color, size})=>(<FontAwesome name="th-large" color={color} size={size} />)
          }}
        />
        <Tabs.Screen
          name='Tela 2'
          component={Tela2}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
