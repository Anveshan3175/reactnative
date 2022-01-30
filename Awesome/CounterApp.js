import React,{useState} from 'react';
import {Text,
        View,
        StyleSheet,
        Button} from 'react-native';


const CounterApp = () => {
    const [count,setCount] = useState(0);

    const updateCount = () => {
        setCount(count + 1);
    }

    return (
        <View style = {styles.body} >
            <Text style = {styles.text}>
                {count * 5 }
            </Text>
            <Button title='Add' onPress={updateCount}></Button>
            <Text style = {styles.text}> You clicked {count} times</Text>
        </View>
   );

}

const styles = StyleSheet.create({
    body : {
        flex : 1,
        backgroundColor : '#ff0000',
        alignItems: 'center',
        justifyContent : 'center'
    },
    text : {
        color : '#ffffff',
        fontSize : 20,
        fontStyle : 'italic',
        margin: 20
    }
});


export default CounterApp;