import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function LiveInput() {
    return (
        <View>
            <Text style={style.title}>Hello World</Text>
            <Text>John Doe</Text>
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 45,
        color: "#2563eb",
        fontWeight: "bold",
        backgroundColor: "#000"
    }
})