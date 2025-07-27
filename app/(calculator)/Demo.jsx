import { Text, View } from 'react-native'

const Demo = () => {
    return (
        <View>
            <View style={{ flexDirection: "row", width: 200, borderWidth: 2, alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
                <TextInput placeholder='enter' value={input} />
                <Text></Text>
            </View>
            <View style={{ flexDirection: "row", width: 200, borderWidth: 2, alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: 10 }}>
                {num.map((items, index) => (
                    <Text key={index} onPress={() => clicked(items)} style={{ gap: 10, backgroundColor: 'gray', padding: 20, borderRadius: 10 }}>{items}</Text>
                ))}
            </View>
        </View>
    )
}

export default Demo