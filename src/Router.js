
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Product from './pages/Product';
import Detail from './pages/Detail';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

const Router = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='LoginScreen'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ProductScreen'
          component={Product}
          options={{
            title: 'Shop',
            headerTitleStyle: { color: '#fff', fontSize: 24 },
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#4fc3f7' }
          }} />
        <Stack.Screen
          name='DetailScreen'
          component={Detail}
          options={{
            title: 'Detail',
            headerTitleStyle: { color: '#fff', fontSize: 24 },
            headerTitleAlign: 'center',
            headerStyle: { backgroundColor: '#4fc3f7' },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;