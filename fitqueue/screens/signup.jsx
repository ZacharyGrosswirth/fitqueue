import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { Icon } from "react-native-elements";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState(null);

  const [isFocus, setIsFocus] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [verifyPasswordVisible, setVerifyPasswordVisible] = useState(false);

  const navigation = useNavigation();

  const genders = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
    { label: "Prefer Not To Say", value: "Prefer Not To Say" },
  ];

  const handleSignUpPress = async () => {
    // const signUpResult = await handleSignUp(
    //   email,
    //   password,
    //   role,
    //   donorDriveLink,
    //   expoPushToken
    // );
    // if (signUpResult === "success") {
    //   setSignUpField(false);
    // } else {
    //   setSignUpField(true);
    // }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ marginBottom: 10 }}
        source={require("../assets/signup_text.png")}
      />
      <Text style={styles.topText}>
        Enter information about yourself to complete your FitQueue account
      </Text>
      <View style={styles.loginbox}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputTop}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            placeholder="First Name"
            autoCapitalize="words"
          />

          <TextInput
            style={styles.inputTop}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            placeholder="Last Name"
            autoCapitalize="words"
          />

          <TextInput
            style={styles.inputMiddle}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={genders}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Gender" : "..."}
            searchPlaceholder="Search..."
            value={gender}
            onChange={(item) => {
              setGender(item.value);
              setIsFocus(false);
            }}
          />
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputMiddle}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.iconContainer}
          >
            <Icon
              name={passwordVisible ? "visibility-off" : "visibility"}
              type="material"
              size={24}
              color="grey"
            />
          </TouchableOpacity>
        </View>

        <View style={[styles.passwordContainer, {marginTop: 1}]}>
          <TextInput
            style={styles.inputMiddle}
            value={verifyPassword}
            onChangeText={(text) => setVerifyPassword(text)}
            placeholder="Verify Password"
            secureTextEntry={!verifyPasswordVisible}
          />
          <TouchableOpacity
            onPress={() => setVerifyPasswordVisible(!verifyPasswordVisible)}
            style={styles.iconContainer}
          >
            <Icon
              name={verifyPasswordVisible ? "visibility-off" : "visibility"}
              type="material"
              size={24}
              color="grey"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={async () => {
            await handleSignUpPress();
          }}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.signUp}>
          Already A User?
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: "#61A0DA", marginBottom: -4 }}> Log In!</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#323232",
    width: "100%",
  },
  logoContainer: {
    marginBottom: 30,
  },
  loginbox: {
    width: "70%",
    backgroundColor: "#F2EFEE",
    borderRadius: 10,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputTop: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "span",
    position: "relative",
    marginTop: -5,
    marginBottom: 15,
  },
  inputMiddle: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
    width: "100%",
  },
  iconContainer: {
    position: "absolute",
    right: "5%",
  },
  inputBottom: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
    marginTop: 15,
  },
  loginButton: {
    backgroundColor: "#E2883C",
    padding: 15,
    borderRadius: 5,
    alignSelf: "stretch",
    marginBottom: 10,
  },
  createAccountButton: {
    backgroundColor: "#36BCC0",
    padding: 15,
    borderRadius: 5,
    alignSelf: "stretch",
    marginBottom: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    alignSelf: "stretch",
    marginVertical: 12,
  },
  forgotPassword: {
    color: "#61A0DA",
    textAlign: "center",
  },
  DDlink: {
    color: "#61A0DA",
    textAlign: "center",
    marginBottom: 2,
  },
  signUp: {
    color: "black",
    textAlign: "center",
    marginTop: 5,
  },
  logoBig: {
    width: 350,
    height: 225,
    marginBottom: 50,
  },
  logoSmall: {
    width: 350,
    height: 225,
    marginBottom: 50,
    marginTop: 50,
  },
  errorMessage: {
    color: "white",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  dropdown: {
    marginTop: 15,
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#AFAEB0",
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalHeader: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  modalText: {
    fontSize: 14,
    textAlign: "left",
    alignSelf: "stretch",
    marginBottom: 5,
  },
  topText: {
    width: "70%",
    textAlign: "center",
    marginBottom: 15,
    color: "white",
  },
});
