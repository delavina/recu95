import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link
        href="/(auth)/sign-in"
        className="mt-3 p-4 text-lg rounded-md font-sans-bold bg-primary text-white"
      >
        Go to Sign In
      </Link>
    </View>
  );
};

export default SignUp;
