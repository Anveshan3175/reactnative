import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const SectionListApp = () => {

    const [movies, setMovies] = useState([
        { index: 1, name: 'movie 1' },
        { index: 2, name: 'movie 2' },
        { index: 3, name: 'movie 3' },
        { index: 4, name: 'movie 4' },
        { index: 5, name: 'movie 5' },
        { index: 6, name: 'movie 6' },
    ]);

    const DATA = [
        {
            title: 'Title 1',
            data: ['item 1-1', 'item 1-2', 'item1-3']
        },
        {
            title: 'Title 2',
            data: ['item 2-1', 'item 2-2', 'item2-3']
        },
        {
            title: 'Title 3',
            data: ['item 3-1',]
        },
        {
            title: 'Title 4',
            data: ['item 4-1', 'item 4-2']
        },
    ]

    const renderItem = (item) => {
        return (
            <View key={item.index}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
        );
    }
    return (
        <SectionList
            keyExtractor={(item, index) => index.toString()}
            sections={DATA}
            renderItem={({ item }) => (
                //<View style={styles.view}>
                    <Text style={styles.text}>{item}</Text>
                //</View>
            )}
            renderSectionHeader={({ section }) => (
                <View style={styles.view}>
                    <Text style={styles.text}>{section.title}</Text>
                </View>
            )}
        />




        /*         <View style={styles.body}>
                {
                    movies.map( (item) => {
                       return renderItem(item);
                    })
                }            
                </View> */
    );
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },

    text: {
        fontStyle: 'italic',
        fontSize: 20,
        color: '#000000'
    },
    view: {
        backgroundColor: '#ffff00',
        margin: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 70
    }
});

export default SectionListApp;