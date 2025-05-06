import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function App() {
    const [message, setMessage] = useState("Hello");

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
            <Button
                title="Toggle Message"
                onPress={() => setMessage(message === "Hello" ? "Goodbye" : "Hello")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 32,
        marginBottom: 20,
    },
});
