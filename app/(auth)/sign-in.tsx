import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link
        href="/(auth)/sign-up"
        className="mt-3 p-4 text-lg rounded-md font-sans-bold bg-primary text-white"
      >
        Create an Account
      </Link>
    </View>
  );
};

export default SignIn;
