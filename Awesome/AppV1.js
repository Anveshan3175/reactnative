import React,{useState} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Button,
    Linking
} from 'react-native';


const AppV1 = () => {

    const [name,setName] = useState('Mash');
    const [session,setSession] = useState({number: 6, title : 'state'});
    const [current,setCurrent] = useState(true);

    const onClickHandler = () => {
        setName('Programming with Mash')
        setSession({number:7, title: 'style'})
        setCurrent(!current)
    }

    return (
        <View style={styles.body}>
            <Text style= {styles.text}>My name is {name}</Text>
            <Text style={styles.text}>This is my session number {session.number} and about {session.title}</Text>
            <Text style = {styles.text}>{current ? 'currentSession' : 'nextSession'}</Text>
            {/* <Button title='youtube channel'
                    onPress={() => {Linking.openURL('https://youtube.com/programmingwithmash')}}></Button> */}
            <Button title='Update State' onPress={onClickHandler}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    body : {
        flex : 1,
        backgroundColor : '#ff0000',
        alignItems : 'center',
        justifyContent : 'center'
    },
    text : {
        color : '#ffffff',
        fontSize : 20,
        fontStyle : 'italic',
        margin: 20
    }
});

export default AppV1;