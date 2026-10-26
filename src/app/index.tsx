import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

export default function Index() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<
    "error" | "success" | ""
  >("");

  
const handleLogin = () => {
  if (!username.trim() || !password.trim()) {
    setMessage("Username dan password wajib diisi");
    setMessageType("error");
    return;
  }

  router.replace({
    pathname: "/home",
    params: {
      username: username.trim(),
    },
  });
};


  return (
    <LinearGradient
      colors={["#EEF2FF", "#C4B5FD", "#7C3AED"]}
      style={styles.container}
    >
      <View style={styles.card}>
        <Image
          source={require("../../assets/expo.icon/Assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Welcome Back</Text>

        <Text style={styles.subtitle}>
          Sign in to continue to your account
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Username</Text>
          <InputField
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />

          <Text style={styles.label}>Password</Text>
          <InputField
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />

          <PrimaryButton onPress={handleLogin} />
        </View>

        {message !== "" && (
          <Text
            style={[
              styles.message,
              messageType === "error"
                ? styles.errorMessage
                : styles.successMessage,
            ]}
          >
            {message}
          </Text>
        )}

        <Text style={styles.footer}>
          Welcome to LoginApp
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 26,
    borderWidth: 1,
    borderColor: "#F3F4F6",
    elevation: 8,
    shadowColor: "#312E81",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
  },

  logo: {
    width: 76,
    height: 76,
    alignSelf: "center",
    marginBottom: 18,
  },

  title: {
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    color: "#111827",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 21,
    marginBottom: 28,
  },

  form: {
    gap: 10,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: -4,
  },

  message: {
    marginTop: 18,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 20,
  },

  errorMessage: {
    color: "#DC2626",
  },

  successMessage: {
    color: "#059669",
  },

  footer: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 24,
  },
});
