import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl } from 'react-native';

const ListApp = () => {

    const [Items, setItems] = useState([
        { key: 1, item: 'Item 1' },
        { key: 2, item: 'Item 2' },
        { key: 3, item: 'Item 3' },
        { key: 4, item: 'Item 4' },
        { key: 5, item: 'Item 5' },
        { key: 6, item: 'Item 6' },
        { key: 7, item: 'Item 7' },
        { key: 8, item: 'Item 8' },
        { key: 9, item: 'Item 9' },
        { key: 10, item: 'Item 10' },
        { key: 11, item: 'Item 11' },
        { key: 12, item: 'Item 12' },
    ]);

    const [refresh,setRefresh] = useState(false);
    const onRefresh = () => {
        setRefresh(true);  // Start spinner
        setItems([...Items, {key: 13, item: 'Item 14'}]) // do logic
        setRefresh(false); // stop spinner
    }

    return (
        <ScrollView 
            style={styles.body}
            refreshControl={
                <RefreshControl
                refreshing = {refresh}
                onRefresh = {onRefresh}
                colors={['#ff00ff']}
                />
            }
        >
            {
                Items.map((object) => {
                    return (
                        <View style={styles.item} key={object.key}>
                            <Text style={styles.text}>
                                {object.item}
                            </Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 35,
        fontStyle: 'italic'
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    item: {
        backgroundColor: '#12F63F',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    }
});

export default ListApp;