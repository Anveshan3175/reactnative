import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, ScrollView, RefreshControl } from 'react-native';

const DynamicSectionListApp = () => {

    const [nestedList, setList] = useState([
        {
            title: 'Title 1',
            data: ['Item 1-1', 'Item 1-2']
        }
    ]);

    const [counter, setCounter] = useState(2);

    const addToListOnRefresh = () => {
        setCounter(counter + 1);
        latTitle = 'Title ' + counter;
        latDataItem1 = 'Item ' + counter + ' - ' + 1
        latDataItem2 = 'Item ' + counter + ' - ' + 2
        setRefresh(true);
        setList([...nestedList, {
            title:  latTitle ,
            data: [ latDataItem1 , latDataItem2 ]
        }]);
        setRefresh(false);
    }
    const [refresh, setRefresh] = useState(false);

    return (
        <SectionList
            keyExtractor={(item, index) => index.toString()}
            sections={nestedList}
            renderItem={
                ({ item }) =>
                (
                    <View style={styles.itemView}>
                        <Text style={styles.itemText}>{item}</Text>
                    </View>
                )
            }
            renderSectionHeader={({ section }) => (
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>{section.title}</Text>
                </View>
            )}

            refreshControl={

                <RefreshControl
                    refreshing={refresh}
                    onRefresh={addToListOnRefresh}
                    colors={['#ff00ff']}
                />

            }
        />
    );
}


const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        color: '#000000',
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
    },
    itemView: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderBottomWidth: 2,
        borderColor: '#c0c0c0',
        width: '100%'
    },
    headerText: {
        fontStyle: 'italic',
        color: '#000000',
        fontSize: 40,
        textAlign: 'center',
        justifyContent: 'center',
    },

    headerView: {
        backgroundColor: '#00ffff',
        margin: 2,
        height: 70,
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#000000',

    }
});

export default DynamicSectionListApp;