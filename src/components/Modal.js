import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Modal as NewModal,
} from "react-native";

const Modal = ({
  isVisible,
  actionDeleteItem,
  itemSelected,
  onDismissModal,
  onIsEnabled,
}) => {
  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalStyle}>
          <Text style={styles.modalTextStyle}>{itemSelected}</Text>
          <View marginBottom={10}>
            <Button
              title="eliminar"
              margin={10}
              color={"green"}
              onPress={() => actionDeleteItem()}
            />
          </View>
          <Button
            title="salir"
            margin={10}
            color={"green"}
            onPress={() => onDismissModal(false)}
          />
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalStyle: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    fontSize: 30,
    margin: 10,
  },
});
