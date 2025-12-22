import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";

export default function LoginScreen() {
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Fungsi login langsung tanpa validasi
  const handleLogin = () => {
    // Langsung navigasi ke home tanpa validasi
    router.replace("/(tabs)");
  };

  // Fungsi login dengan Google (guest)
  const handleGoogleLogin = () => {
    Alert.alert(
      "Login dengan Google",
      "Anda akan masuk sebagai pengguna tamu.",
      [
        {
          text: "Batal",
          style: "cancel"
        },
        {
          text: "Lanjutkan",
          onPress: () => {
            router.replace("/(tabs)");
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header dengan Logo dan Image */}
      <View style={styles.header}>
        <Text style={styles.logoText}>GREEN SPACE</Text>
        <Image
          source={{
            uri: "https://i.pinimg.com/1200x/2c/be/b1/2cbeb106cee6a2a2776ff0ba5e3cee5f.jpg",
          }}
          style={styles.headerImage}
        />
      </View>

      {/* Card Login */}
      <View style={styles.card}>
        <Text style={styles.title}>Sign-In</Text>
        <View style={styles.line} />
        <Text style={styles.subText}>or Log-in with</Text>

        {/* Tombol Google */}
        <TouchableOpacity 
          style={styles.googleButton}
          onPress={handleGoogleLogin}
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/1200x/60/41/99/604199df880fb029291ddd7c382e828b.jpg",
            }}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Sign-in with account</Text>

        {/* Input Fields */}
        <TextInput
          placeholder="Username or Email Address"
          placeholderTextColor="#9F9F9F"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#9F9F9F"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        {/* Checkbox Remember Me */}
        <View style={styles.checkboxRow}>
          <Checkbox
            value={keepSignedIn}
            onValueChange={setKeepSignedIn}
            color={keepSignedIn ? "#25C145" : undefined}
          />
          <Text style={styles.checkboxLabel}>Keep me signed in</Text>
        </View>

        {/* Tombol Sign-In */}
        <TouchableOpacity 
          style={styles.signInButton} 
          onPress={handleLogin}
        >
          <Text style={styles.signInButtonText}>Sign-In</Text>
        </TouchableOpacity>

        {/* Tombol Skip Login (hidden but functional) */}
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={handleLogin}
        >
          <Text style={styles.skipButtonText}>Skip Login (Testing)</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  header: {
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
  },
  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#25C145",
    marginBottom: 20,
    textAlign: "center",
  },
  headerImage: {
    width: "90%",
    height: 200,
    borderRadius: 30,
    marginBottom: -30,
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  line: {
    height: 1,
    backgroundColor: "#D8D8D8",
    width: "70%",
    alignSelf: "center",
    marginBottom: 15,
  },
  subText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 25,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    paddingVertical: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 30,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  checkboxLabel: {
    fontSize: 14,
    marginLeft: 10,
    color: "#555",
  },
  signInButton: {
    backgroundColor: "#25C145",
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 15,
  },
  signInButtonText: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  skipButton: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#25C145",
  },
  skipButtonText: {
    textAlign: "center",
    fontSize: 14,
    color: "#25C145",
    fontWeight: "600",
  },
});