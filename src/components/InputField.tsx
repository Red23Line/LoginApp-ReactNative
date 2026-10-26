
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

type InputFieldProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export default function InputField({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = secureTextEntry;

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, isPassword && styles.passwordInput]}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && !showPassword}
      />

      {isPassword && (
        <Pressable
          style={styles.eyeButton}
          onPress={() => setShowPassword((previous) => !previous)}
          accessibilityRole="button"
          accessibilityLabel={
            showPassword ? "Sembunyikan password" : "Tampilkan password"
          }
        >
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={21}
            color="#6B7280"
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    position: "relative",
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    backgroundColor: "#FFFFFF",
  },

  passwordInput: {
    paddingRight: 48,
  },

  eyeButton: {
    position: "absolute",
    right: 14,
    top: 0,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
});
