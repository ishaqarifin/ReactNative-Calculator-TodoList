import React, {useState} from "react";
import { View, TouchableOpacity, Text } from "react-native";
// import {vw, vh} from "react-native-expo-viewport-units";

export default function Calculator() {
    const [hitung, setHitung] = useState(124452)
    
    return (
        <View>
            <View style={{ width:"100%", height:80, marginTop:50, alignItems: "center"}}>
                <Text h2 style={{marginLeft:-20}}>Calculator</Text>
                <View style={{backgroundColor: "#FFFFFF",marginTop: 5, opacity: 0.8, justifyContent: "center", width: "90%", height: "80%", borderRadius: 10}}>
                    <Text style={{ color: "#000000", textAlign: 'right', fontSize: 40, fontWeight: "bold", marginRight:10}}>{hitung}</Text>
                </View>
            </View>

            <View style={{ marginTop: 10, width: "90%", height: "70%", margin: 20, flexWrap: "wrap", bottom: 0, justifyContent: "center", alignItems: "center" }}>
                <View style={{ flexDirection: "row", bottom: 0, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243441", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    // onPress={input(1)}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243441", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243491", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243491", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>+</Text>
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", bottom: 0, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243441", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243441", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243491", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243491", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>*</Text>
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", bottom: 0, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243441", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243441", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243491", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>%</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243491", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>=</Text>
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", bottom: 0, justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243441", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243441", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243441", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ flex: 1, backgroundColor: "#243441", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
                    >
                    <Text style={{ fontSize: 20, textAlign: "center", marginTop: 15, fontWeight: "bold", color: "#fff" }}>0</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
