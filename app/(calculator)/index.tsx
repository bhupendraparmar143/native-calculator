import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

const Home = () => {
    const [num, setNum] = useState(["9", "8", "7", "6", "5", '4', '3', "2", "1", "0", "."]);
    const [symbol1, setSymbol1] = useState(["C", "⌫", "%", "/"]);
    const [symbol2, setSymbol2] = useState(["X", "-", "+", "="]);
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [operation, setOperation] = useState("");
    const [result, setResult] = useState("");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setFirstNum(firstNum)
        console.log("useEffect firstNum", firstNum);
        console.log("useEffect SecondNum", secondNum);
        console.log("useEffect Operation", operation);
        console.log("useEffect result", result);
        setSecondNum(secondNum);
        setOperation(operation);

    }, [firstNum, secondNum, operation, inputValue]);

    const clicked = (items: String) => {
        
        setFirstNum(firstNum + items);
        
        if (items == "C") {
            setFirstNum("");
            setSecondNum("");
            setOperation("");
        } else if (items == "⌫") {
            setFirstNum(firstNum.slice(0, -1));
        }
        else if (items == "%") {
            if (firstNum) {
                const percentage = parseFloat(firstNum) / 100;
                setFirstNum(percentage.toString());
            }
        }
    }

    const getResult = () => {
        if (firstNum && secondNum && operation) {
            const num2 = parseFloat(firstNum);
            const num1 = parseFloat(secondNum);
            switch (operation) {
                case "+":
                    setFirstNum((num1 + num2).toString());
                    // console.log("result", result)
                    break;
                case "-":
                    setFirstNum((num1 - num2).toString());
                    break;
                case "X":
                    setFirstNum((num1 * num2).toString());
                    break;
                case "/":
                    setFirstNum((num1 / num2).toString());
                    break;
                default:
                    console.log("Invalid operation");
            }

            setSecondNum("");
            setOperation("");
        }
    }

    const handleOperation = (item: string) => {
        // console.log(typeof(item));
        const num2 = parseFloat(firstNum);
        const num1 = parseFloat(secondNum);
        // setInputValue(firstNum.toString() + operation.toString() + secondNum.toString());
        // console.log("inputValue2", inputValue);  
        switch (item) {
            case "C":
                setFirstNum("");
                setSecondNum("");
                setOperation("");
                setResult("");
                break;
            case "⌫":
                setFirstNum(firstNum.slice(0, -1));
                break;
            case "%":
                if (firstNum) {
                    const percentage = parseFloat(firstNum) / 100;
                    setFirstNum(percentage.toString());
                }
                break;
            case "/":
                if (firstNum && secondNum) {
                    let x = num1 / num2;
                    setOperation(item);
                    setSecondNum(x.toString());
                    setFirstNum("");
                } else if (firstNum) {
                    setOperation(item);
                    setSecondNum(firstNum);
                    setFirstNum("");
                }
                break;
            case "X":
                if (firstNum && secondNum) {
                    let x = num1 * num2;
                    setOperation(item);
                    setSecondNum(x.toString());
                    setFirstNum("");
                } else if (firstNum) {
                    setOperation(item);
                    setSecondNum(firstNum);
                    setFirstNum("");
                }
                break;
            case "-":
                if (!firstNum && item == "-") {
                    setFirstNum("-");
                } else if (firstNum && secondNum) {
                    let x = num1 - num2;
                    setOperation(item);
                    setSecondNum(x.toString());
                    setFirstNum("");
                } else if (firstNum) {
                    setOperation(item);
                    setSecondNum(firstNum);
                    setFirstNum("");
                }
                break;
            case "+":
                if (firstNum && secondNum) {
                    let x = num1 + num2;
                    setOperation(item);
                    setSecondNum(x.toString());
                    setFirstNum("");
                } else if (firstNum) {
                    setOperation(item);
                    setSecondNum(firstNum);
                    setFirstNum("");
                }
                break;

            default:
                getResult();
                break;
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 30, flexWrap: "wrap", padding: 25, alignItems: 'center' }}>

            <TextInput value={secondNum.toString() + operation + firstNum.toString()} style={{ fontSize: 20, borderWidth: 0.5, width: "100%", justifyContent: "center", marginVertical: 5 }} />
            <TextInput value={firstNum} style={{ fontSize: 40, borderWidth: 0.5, width: "100%", justifyContent: "center", marginVertical: 5 }} />
            <View style={{ flexDirection: "row", marginVertical: 10, gap: 10 }}>
                {symbol1.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={.6} onPress={() => handleOperation(item)} style={{ backgroundColor: "lightgray", borderWidth: .5, gap: 10, padding: 30, borderRadius: 10 }}>
                        <Text >
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 10, width: "70%" }}>
                    {num.map((item, index) => (
                        <TouchableOpacity key={index} activeOpacity={.6} onPress={() => clicked(item)} style={{ backgroundColor: "lightgray", borderWidth: .5, gap: 10, padding: 30, borderRadius: 10 }}>
                            <Text>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={{ gap: 10, }}>
                    {symbol2.map((item, index) => (
                        <TouchableOpacity key={index} activeOpacity={.6} onPress={() => handleOperation(item)} style={{ backgroundColor: "lightgray", borderWidth: .5, gap: 10, padding: 30, borderRadius: 10 }}>
                            <Text>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default Home