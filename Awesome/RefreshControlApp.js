import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl } from 'react-native';



const RefreshControlApp = () => {

    const [pull,setRefresh] = useState(false);
    const [refreshCount, setRefreshCount] = useState(0);
    const onPull = () => {
        setRefresh(true);
        alert('pull');
        setRefreshCount(refreshCount + 1);
        setRefresh(false);
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing = {pull}
                    onRefresh = {onPull}
                    colors={['#ff00ff']}
                />
            }
        >
            <View style={styles.body} >
                <Text style={styles.text}>The page is refreshed {refreshCount} times</Text>
            </View>
        </ScrollView>
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
    }
});


export default RefreshControlApp;