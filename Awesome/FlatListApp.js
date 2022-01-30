import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';

const FlatListApp = () => {

    const [objects, setObjects] = useState([
        { id: 1, value: 'obj1' },
        { id: 2, value: 'obj2' },
        { id: 3, value: 'obj3' },
        { id: 4, value: 'obj4' },
        { id: 5, value: 'obj5' },
        { id: 6, value: 'obj6' },
        { id: 7, value: 'obj7' },
        { id: 8, value: 'obj8' },
        { id: 9, value: 'obj9' },
        { id: 10, value: 'obj10' },
        { id: 11, value: 'obj11' },
        { id: 12, value: 'obj12' },
        { id: 13, value: 'obj13' },
        { id: 14, value: 'obj14' },
        { id: 15, value: 'obj15' },
    ]);

/*     const movies=[
        {name: 'movie 1'},
        {name: 'movie 2'},
        {name: 'movie 3'},
        {name: 'movie 4'},
        {name: 'movie 5'},
        {name: 'movie 6'},
        {name: 'movie 7'},
        {name: 'movie 8'},
        {name: 'movie 9'},
        {name: 'movie 10'},
        {name: 'movie 11'},
        {name: 'movie 12'},
        {name: 'movie 13'},
        {name: 'movie 14'},
    ]; */

    const [movies,setMovies] = useState([
        {name: 'movie 1'},
        {name: 'movie 2'},
        {name: 'movie 3'},
        {name: 'movie 4'},
        {name: 'movie 5'},
        {name: 'movie 6'},
        {name: 'movie 7'}
    ]);
    const [refresh,setRefresh] = useState(false);

    const onRefresh = () => {
        setRefresh(true);  // Start spinner
        setMovies([...movies, {name: 'movie 20'}]) // do logic
        setRefresh(false); // stop spinner
    }

/*     return (
        <FlatList style = {{flex:1}}
            data={objects}
            keyExtractor = {item => item.id}
            renderItem={({ item }) =>
                <View style={styles.item}>
                    <Text style={styles.text} >{item.value}</Text>
                </View>
            }
        />
    ); */

    return (
        <FlatList 
            
            style={styles.body}
            data = {movies}
            keyExtractor = {(item,index) => index.toString()} 
            renderItem = {({item}) => (
                <View style = {styles.item}>
                    <Text style = {styles.text}> {item.name}</Text>
                </View>
            )}

            refreshControl={
                <RefreshControl
                refreshing = {refresh}
                onRefresh = {onRefresh}
                colors={['#ff00ff']}
                />
            }
        />
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff00ff',
        margin: 1,
        width: '100%',
        height: 70
    },
    text: {
        fontSize: 20,
        color: '#000000'
    }
});

export default FlatListApp;