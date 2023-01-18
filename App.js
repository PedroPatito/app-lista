import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList, Switch } from "react-native";
import Modal from "./src/components/Modal";
import AddItem from "./src/components/AddItem";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [itemSelected, setItemSelected] = useState("");
  const [modalVisble, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onHandleChangeItem = (text) => {
    setTextItem(text);
  };

  const addItem = () => {
    setList((prevState) => [...prevState, textItem]);
    setTextItem("");
  };

  const handleModal = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };

  const changeColor = () => {
    console.log(itemSelected);
    itemSelected ? setIsEnabled(!isEnabled) : setIsEnabled(isEnabled);
  };
  const onHandleDelete = (item) => {
    console.log(item);
    setList((prevState) => prevState.filter((element) => element !== item));
    setModalVisible(!modalVisble);
  };

  function renderItem({ item }) {
    return (
      <View
        style={styles.renderItemStyle}
        backgroundColor={isEnabled ? "lightgreen" : "white"}
      >
        <Text style={styles.itemStyle}>{item}</Text>
        <Button
          title="Editar"
          onPress={() => handleModal(item)}
          color={"green"}
          style={styles.itemStyle}
        />
        <Switch
          style={styles.itemStyle}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>lista de tareas</Text>
        <AddItem
          onChange={onHandleChangeItem}
          textValue={textItem}
          onAddItem={addItem}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item}
        />
      </View>
      <Modal
        isVisible={modalVisble}
        itemSelected={itemSelected}
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        onDismissModal={setModalVisible}
        onIsEnabled={changeColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1faff",
  },
  titleContainer: {
    height: 200,
    paddingHorizontal: 30,
    paddingTop: 80,
  },
  title: {
    marginBottom: 30,
    fontSize: 40,
    fontWeight: "500",
    color: "#1E283C",
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 40,
    padding: 3,
  },
  renderItemStyle: {
    height: 60,
    flexDirection: "row",
    marginBottom: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 3,
  },
  itemStyle: {
    margin: 10,
    fontSize: 15,
  },
});
