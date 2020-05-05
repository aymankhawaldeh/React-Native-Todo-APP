import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons'


export default function TodoItem ({item, pressHandler}){
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <AntDesign name='delete' size={18} />
           <Text  style={styles.text}>{item.title}</Text>
           </View>
        </TouchableOpacity>
)

}

const styles = StyleSheet.create ({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "row",
    },
    text :{
        marginLeft:20

    }

})