import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const InputWithDescription = ({ title = "Title", onChangeText }) => {
  return (
    <View style={{ margin: 5 }}>
      <Text style={{ margin: 2, color: "black" }}>{title}</Text>
      <TextInput
        style={{ height: 40, margin: 2 }}
        placeholder={title}
        onChangeText={onChangeText()}
      />
    </View>
  );
};

InputWithDescription.PropTypes = {
  Title: PropTypes.string,
  onChangeText: PropTypes.func.isRequired
};

export default class Register extends Component {
  static navigationOptions = {
    title: "Register"
  };
  constructor() {
    super();
    this.state = { isChecked: false };
  }
  render() {
    let { isChecked } = this.state;
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: "white" }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <InputWithDescription
          title={"Company Name"}
          onChangeText={text => console.log(text)}
        />
        <InputWithDescription
          title={"Employee Name"}
          onChangeText={text => console.log(text)}
        />
        <InputWithDescription
          title={"Employee Code"}
          onChangeText={text => console.log(text)}
        />
        <InputWithDescription
          title={"Designation"}
          onChangeText={text => console.log(text)}
        />
        <InputWithDescription
          title={"Address"}
          onChangeText={text => console.log(text)}
        />
        <InputWithDescription
          title={"D.O.B"}
          onChangeText={text => console.log(text)}
        />
        <InputWithDescription
          title={"D.O.J"}
          onChangeText={text => console.log(text)}
        />
        <TouchableOpacity
          onPress={() => {
            if (!isChecked) this.setState({ isChecked: true });
          }}
          style={{
            margin: 10,
            backgroundColor: "blue",
            padding: 10,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "white" }}>{isChecked ? "Next" : "Done"}</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  }
}
