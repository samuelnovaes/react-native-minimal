import { Alert, Button, View } from 'react-native';

const Home = () => {
	const handleClick = () => {
		Alert.alert('Hello World!');
	};

	return (
		<View style={{ padding: 16 }}>
			<Button title='Click me' onPress={handleClick} />
		</View>
	);
};

export default Home;