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
import * as Sharing from "expo-sharing";

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

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("Sharing is not available in your platform");
      return;
    }
    await Sharing.shareAsync(selectedImg.localUri);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an image</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
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
      </TouchableOpacity>

      {/* <Button color="red" title="Add"/> */}
      {selectedImg ? (
        <TouchableOpacity onPress={openShareDialog} style={styles.btn}>
          <Text style={styles.textBtn}>Share image</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
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
    backgroundColor: "#28263b",
  },
  title: {
    fontSize: 30,
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  btn: {
    marginBottom: 20,
    color: "blue",
    backgroundColor: "#dad8e7",
    borderRadius: 15,
    padding: 7,
    margin: 30,
  },
  textBtn: {
    fontSize: 24,
  },
});
