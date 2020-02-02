import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';

export default class HomeTab extends React.Component {
	render(){
		return(
			<View style={styles.container}>
				<Text>열공플래너 - HomeTab</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		color: 'black',
		flex: 1,
		alignItems: 'center',
    justifyContent: 'center',
	}
});