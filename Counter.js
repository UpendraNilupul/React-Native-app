import React, {useState} from "react";
import { Text, Button, View } from "react-native";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={()=>setCount(count+1)}></Button>
        </View>
    )
}