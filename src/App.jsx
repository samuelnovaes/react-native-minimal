import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

const Stack = createNativeStackNavigator();

const App = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name='home' component={Home} options={{ title: 'Home' }} />
		</Stack.Navigator>
	</NavigationContainer>
);

export default App;