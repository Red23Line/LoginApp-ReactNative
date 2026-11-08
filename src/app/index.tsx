
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";

type FormMode = "login" | "register";

export default function Index() {
  const router = useRouter();

  const [mode, setMode] = useState<FormMode>("login");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const cleanUsername = username.trim();

    // Validasi username dan password
    if (!cleanUsername || !password.trim()) {
      setMessage("Username dan password wajib diisi");
      return;
    }

    // Validasi khusus Register
    if (mode === "register") {
      if (!email.trim()) {
        setMessage("Email wajib diisi");
        return;
      }

      if (!email.includes("@")) {
        setMessage("Format email tidak valid");
        return;
      }

      if (!confirmPassword.trim()) {
        setMessage("Konfirmasi password wajib diisi");
        return;
      }

      if (password !== confirmPassword) {
        setMessage("Password dan konfirmasi tidak cocok");
        return;
      }
    }

    // Berhasil melewati validasi
    setMessage("");

    router.replace({
      pathname: "/home",
      params: {
        username: cleanUsername,
      },
    });
  };

  const switchMode = (newMode: FormMode) => {
    setMode(newMode);
    setMessage("");
  };

  return (
    <LinearGradient
      colors={["#EEF2FF", "#C4B5FD", "#7C3AED"]}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Image
            source={require("../../assets/expo.icon/Assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </Text>

          <Text style={styles.subtitle}>
            {mode === "login"
              ? "Sign in to continue to your account"
              : "Register to start your learning journey"}
          </Text>

          {/* Login and Register Switch */}
          <View style={styles.modeSwitch}>
            <Pressable
              style={[
                styles.modeButton,
                mode === "login" && styles.activeModeButton,
              ]}
              onPress={() => switchMode("login")}
            >
              <Text
                style={[
                  styles.modeText,
                  mode === "login" && styles.activeModeText,
                ]}
              >
                Login
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.modeButton,
                mode === "register" && styles.activeModeButton,
              ]}
              onPress={() => switchMode("register")}
            >
              <Text
                style={[
                  styles.modeText,
                  mode === "register" && styles.activeModeText,
                ]}
              >
                Register
              </Text>
            </Pressable>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>Username</Text>

            <InputField
              placeholder="Enter your username"
              value={username}
              onChangeText={setUsername}
            />

            {mode === "register" && (
              <>
                <Text style={styles.label}>Email</Text>

                <InputField
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                />
              </>
            )}

            <Text style={styles.label}>Password</Text>

            <InputField
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />

            {mode === "register" && (
              <>
                <Text style={styles.label}>Confirm Password</Text>

                <InputField
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={true}
                />
              </>
            )}

            <PrimaryButton
              onPress={handleSubmit}
              title={
                mode === "login"
                  ? "Sign In →"
                  : "Create Account →"
              }
            />
          </View>

          {message !== "" && (
            <Text style={styles.errorMessage}>
              {message}
            </Text>
          )}

          <Text style={styles.footer}>
            Welcome to StudyMate 💜
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
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
    marginBottom: 24,
  },

  modeSwitch: {
    flexDirection: "row",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 4,
    marginBottom: 22,
  },

  modeButton: {
    flex: 1,
    paddingVertical: 11,
    alignItems: "center",
    borderRadius: 9,
  },

  activeModeButton: {
    backgroundColor: "#FFFFFF",
    elevation: 2,
  },

  modeText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
  },

  activeModeText: {
    color: "#4F46E5",
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

  errorMessage: {
    marginTop: 18,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 20,
    color: "#DC2626",
  },

  footer: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 24,
  },
});
