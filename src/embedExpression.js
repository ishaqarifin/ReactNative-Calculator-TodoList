import React, { Component, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class EmbedExpression extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitung: 0,
    };
  }

  input = (value) => {
    if (this.state.hitung == 0) {
      this.setState({ hitung: value });
    } else {
      this.setState({ hitung: this.state.hitung + "" + value });
    }
  };

  hitunghasil = () => {
    let hasil = eval(this.state.hitung);
    this.setState({ hitung: hasil });
  };

  render() {
    return (
      <View style={{ backgroundColor: "#FFA0A0", width: "100%", height: "100%" }}>
        <View style={{ width: "80%", margin: "auto" }}>
          <Text style={{ color: "white" }}>
            <h2>Display</h2>
          </Text>
        </View>
        <View style={{ backgroundColor: "#ECECEC", margin: "auto", width: "90%", height: "15%", borderRadius: 10, justifyContent: "center" }}>
          <Text style={{ color: "#000000", textAlign: "right", fontSize: 40, fontWeight: "bold", marginRight: 10 }}>{this.state.hitung}</Text>
        </View>

        <View style={{ width: "90%", height: "100%", margin: "auto", flexWrap: "wrap", marginTop: 20 }}>
          <View style={{ flexDirection: "row", bottom: 0, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#FF5757", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input(1)}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#FF5757", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input(2)}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#930707", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input("-")}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#930707", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input("+")}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", bottom: 0, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#FF5757", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input(3)}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#FF5757", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input(4)}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#930707", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input("/")}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#930707", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input("*")}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", bottom: 0, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#FF5757", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input(5)}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#FF5757", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input(6)}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#930707", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input("%")}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#930707", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.hitunghasil()}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>=</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", bottom: 0, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#FF5757", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input(7)}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#FF5757", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input(8)}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#FF5757", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input(9)}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#FF5757", width: 60, height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input(0)}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", bottom: 0, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity
              style={{ flex: 1, backgroundColor: "#930707", height: 60, margin: 10, shadowColor: "#000", borderRadius: 10, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}
              onPress={() => this.input((this.state.hitung = 0))}
            >
              <Text style={{ fontSize: 30, textAlign: "center", fontWeight: "bold", margin:"auto", color: "#fff" }}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default EmbedExpression;
