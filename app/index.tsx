import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import welcomeImage from "@/assets/images/welcome.png";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const welcome_image = Image.resolveAssetSource(welcomeImage).uri;

const Page = () => {
  const openLink = () => {
    Linking.openURL("https://google.com");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: welcome_image }}
        style={styles.welcome}
        resizeMode="contain"
      />
      <Text style={styles.headline}>Welcome to WhatsApp Clone</Text>

      <Text style={styles.description}>
        Read our{" "}
        <Text style={styles.link} onPress={openLink}>
          Privacy Policy
        </Text>
        . {'Tap "Agree & Continue" to accept the '}
        <Text style={styles.link} onPress={openLink}>
          Terms of Service
        </Text>
        .
      </Text>

      {/* asChild會把Link to /otp的行為傳給TouchableOpacity */}
      {/* replace: 無法返回上一頁 (當 replace 屬性設置為 true 時，導航到新路徑時會替換當前的歷史記錄，而不是在歷史記錄中添加一個新的條目。)*/}
      <Link href="/otp" replace asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agree & Continue</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  welcome: {
    width: "100%",
    height: 300,
    borderRadius: 60,
    marginBottom: 80,
  },
  headline: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 80,
    color: Colors.gray,
  },
  link: {
    color: Colors.primary,
  },
  button: {
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 22,
    fontWeight: "500",
  },
});

export default Page;
