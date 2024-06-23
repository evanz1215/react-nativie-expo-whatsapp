import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Text,
  KeyboardAvoidingView,
  Platform,
  Linking,
  StyleSheet,
  View,
} from "react-native";

const Page = () => {
  const [loading, setLoading] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const router = useRouter();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 90 : 0;

  const openLink = () => {
    Linking.openURL("https://google.com");
  };

  const sendOTP = async () => {};

  const trySignIn = async () => {};

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.description}>
          WhatsApp will need to verify your account. Carrier charges may apply.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
    gap: 20,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
  },
});
export default Page;
