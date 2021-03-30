import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

  const [selectedImg, setSelectedImg] = useState(null);

  let openImagePickerAsync = async () => {
    //Permission to acces galery
    let permissionResult = await ImgPicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted == false) {
      alert("Permision to acces camera is required");
      return;
    }
    //Return de img selected to the galery
    const pickerResult = await ImgPicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImg({ localUri: pickerResult.uri });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Image
        source={{
          uri:
            selectedImg !== null
              ? selectedImg.localUri
              : "http://picsum.photo/200/200",
        }}
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
    resizeMode:"contain"
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
