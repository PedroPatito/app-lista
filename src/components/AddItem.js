import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";

const AddItem = ({ onChange, textValue, onAddItem }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Tareas del día"
        style={styles.addItemInput}
        onChangeText={onChange}
        value={textValue}
      />
      <Button title="Agregar" onPress={onAddItem} color={"green"} />
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addItemInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    width: "70%",
    height: 45,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    marginRight: 10,
  },
});
