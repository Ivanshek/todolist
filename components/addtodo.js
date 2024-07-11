import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function AddToDo({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    const cleartexthandler = ()=>{
        setText('');
    }

    return (
        <View>
            <TextInput
            style = {styles.input}
            placeholder='New To Do...'
            onChangeText={changeHandler}
            clearButtonMode = 'always'
            // clearTextOnFocus = 'true'
            />
            <Button onPress={() => submitHandler(text)} title='Add To Do' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginTop: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
})
