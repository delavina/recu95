import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subscription Details: {id}</Text>
      <Link
        href="/"
        className="mt-3 p-4 text-lg rounded-md font-sans-bold bg-primary text-white"
      >
        Back to home
      </Link>
    </View>
  );
};

export default SubscriptionDetails;
