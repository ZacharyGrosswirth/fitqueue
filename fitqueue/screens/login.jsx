import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigation = useNavigation();

  const handleLoginPress = async () => {
    // const loginResult = await handleLogin(email, password);
    // if (loginResult === "success") {
    //   setLoginFailed(false);
    // } else {
    //   setLoginFailed(true);
    // }
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoBig}
        source={require("../assets/fitqueue_logo.png")}
      />
      <Image
        style={{ marginBottom: 15 }}
        source={require("../assets/fitqueue_text.png")}
      />
      <View style={styles.loginbox}>
        <TextInput
          style={styles.inputTop}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
        />

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

        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>

        <Text style={styles.signUp}>
          New User?
          <TouchableOpacity
            onPress={() => {
              setCreate(false);
            }}
          >
            <Text style={{ color: "#61A0DA", marginBottom: -4 }}>
              {" "}
              Sign Up!
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Login;

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
    backgroundColor: "#36BCC0",
    padding: 15,
    borderRadius: 5,
    alignSelf: "stretch",
    marginBottom: 5,
    marginTop: 10,
  },
  createAccountButton: {
    backgroundColor: "#E2883C",
    padding: 15,
    borderRadius: 5,
    alignSelf: "stretch",
    marginBottom: 10,
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
    width: 200,
    height: 100,
    marginBottom: 10,
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
});
