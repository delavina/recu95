import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-2xl text-blue-500 font-mono">Recu95</Text>
      <Text className="mt-3 text-xs font-sans-boldß text-red-800">
        by Holger Koeppen
      </Text>
      <Link
        href="/onboarding"
        className="mt-3 p-4 text-lg rounded-md font-sans-bold bg-primary text-white"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-3 p-4 text-lg rounded-md font-sans-bold bg-primary text-white"
      >
        Go to Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-3 p-4 text-lg rounded-md font-sans-bold bg-primary text-white"
      >
        Go to Sign Up
      </Link>
      <Link href="/subscriptions/abc" className="mt-3 p-4 ">
        Go to Subscription Details
      </Link>
      <Link href={{ pathname: "subscriptions/[id]", params: { id: "claude" } }}>
        Claude
      </Link>
    </SafeAreaView>
  );
}
