import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
  const { phone, signin } = useLocalSearchParams<{
    phone: string;
    signin: string;
  }>();

  const [code, setCode] = useState("");

  return (
    <View>
      <Text>Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
