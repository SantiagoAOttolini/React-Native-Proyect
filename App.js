import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import imageDiamond from "./assets/diaomond.png";
import * as ImgPicker from "expo-image-picker";

export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImgPicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted == false) {
      alert("Permision to acces camera is required");
      return;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Image
        source={{ uri: "https://picsum.photos/200/200" }}
        /* source={imageDiamond} */
        style={styles.image}
      />
      <Button color="red" title="Add" onPress={openImagePickerAsync} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>Hola</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff00ff",
  },
  title: {
    fontSize: 24,
    color: "black",
  },
  image: {
    width: 200,
    height: 200,
  },
  btn: {
    marginBottom: 20,
    color: "blue",
    backgroundColor: "blue",
    padding: 7,
    margin: 30,
  },
  textBtn: {
    fontSize: 24,
  },
});
