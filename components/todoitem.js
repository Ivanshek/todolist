import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function ToDoItem({item, pressHandler}) {

    return(
        <TouchableOpacity>
            <View style={styles.item}>
                <Text style={styles.itemtext} >{item.text}</Text>
                <MaterialIcons name='delete' size={18} color={'#333'} onPress={() => pressHandler(item.key)}/>    
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    item:{
        padding:16,
        marginTop:16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',

    },
    itemtext:{
        marginRight: 15,
        flex:10,
    },
})
