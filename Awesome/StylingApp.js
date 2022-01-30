import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const StylingApp = () => {
    const [name, setName] = useState('Style Test');

    const onClickHandler = () => {
        setName('Style test is done');
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>{name}</Text>
            <Text style = {
                {
                    color : '#000000',
                    margin : 30,
                    fontSize : 20
                }
            }>Inline Style</Text>
            <Button title='Update State' onPress={onClickHandler}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ff00ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 10,
        borderColor: '#ffff00',
        borderRadius: 10,
        margin : 40
    },

    text: {
        color: '#ffffff',
        margin: 20,
        fontStyle: 'italic',
        fontSize: 20
    }
});

export default StylingApp;