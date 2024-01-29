import { ScrollView, View } from "react-native";
import { Text, TextInput, Button, useTheme, Icon } from "react-native-paper";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProfile, removeProfile, setCurrentProfile } from '../redux/profileSlice';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FONT } from "../constants";

export default App = () => {
  const router = useRouter();
  const theme = useTheme().colors;
  const styles = getStyles(theme)
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles);
  const [newProfile, setNewProfile] = useState(false);
  const [profileID, setProfileID] = useState("");

  const toggleNewProfile = () => {
    setNewProfile(!newProfile);
  }

  const submitProfile = () => {
    if (profileID.length > 0) {
      dispatch(addProfile(profileID));
    }
    setProfileID("");
    toggleNewProfile();
  }

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <Text style={styles.title}>Resume</Text>
          <Text style={[styles.title, {color: theme.onBackgroundVariant}]}>IO</Text>
        </View>
        
        <ScrollView>
        { Object.keys(profiles).map((id, index) => (
          <Button
            key={index}
            style={styles.button}
            labelStyle={styles.buttonLabel}
            mode="contained"
            contentStyle={{ justifyContent: "space-between", flexDirection: "row-reverse"}}
            icon={() => <FontAwesome name="user-circle" size={30} color={theme.onPrimary} />}
            onPress={() => {
              dispatch(setCurrentProfile(id));
              router.navigate("profile");
          }}>
            {id}
          </Button>
        ))}

        { newProfile ?(
          <TextInput
            value={profileID}
            onChangeText={(text) => setProfileID(text)}
            style={styles.textInput}
            label='Profile ID'
            mode="outlined"
            returnKeyType="done"
            autoFocus
            onSubmitEditing={submitProfile}
            />
            ) : (
            <Button
              mode="outlined"
              style={styles.button}
              labelStyle={styles.buttonLabel}
              onPress={toggleNewProfile}
            >
              + Create Profile
            </Button>
        )}
        </ScrollView>

      </View>
    </SafeAreaView>
  );
};

const getStyles = (theme) => ({
  safe: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.background,
  },
  container: {
    marginTop: 20,
    width: "90%",
    padding: 10,
    borderRadius: 20,
    paddingBottom: 20,
  },
  title: {
    fontFamily: FONT.OrbitronM,
    fontSize: 50,
    textAlign: "center",
    marginVertical: 10,
    color: theme.onBackground,
  },
  button: {
    marginVertical: 5,
    justifyContent: "center",
  },
  buttonLabel: {
    height: 30,
    textAlignVertical: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.onPrimary,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textInput: {
    marginVertical: 5,
  }
})