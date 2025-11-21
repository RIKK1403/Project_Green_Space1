import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";

export default function LoginScreen() {
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F3F3F3" }}>
      {/* Top Header Image */}
      <Image
        source={{ uri: "https://share.google/images/7nqPGSX9e0tnmXWzk" }}
        style={styles.headerImage}
      />

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Sign-In</Text>
        <View style={styles.line} />
        <Text style={styles.subText}>or Log-in with</Text>

        {/* Social Login */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialBtn}>
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
              }}
              style={styles.googleIcon}
            />
            <Text style={styles.socialBtnText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.phoneIcon}>📞</Text>
            <Text style={styles.socialBtnText}>Telephone</Text>
          </TouchableOpacity>
        </View>

        {/* Section */}
        <Text style={styles.sectionTitle}>Sign-in with account</Text>

        {/* Inputs */}
        <TextInput
          placeholder="Username or Email Address"
          placeholderTextColor="#9F9F9F"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#9F9F9F"
          style={styles.input}
        />

        {/* Checkbox */}
        <View style={styles.checkboxRow}>
          <Checkbox
            value={keepSignedIn}
            onValueChange={setKeepSignedIn}
            color={keepSignedIn ? "#25C145" : undefined}
          />
          <Text style={styles.checkboxLabel}>Keep me signed in</Text>
        </View>

        {/* Sign In */}
        <TouchableOpacity style={styles.signInBtn}>
          <Text style={styles.signInText}>Sign-In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 260,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },

  card: {
    marginTop: -50,
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    padding: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },

  line: {
    height: 1,
    backgroundColor: "#D8D8D8",
    width: "70%",
    alignSelf: "center",
    marginBottom: 10,
  },

  subText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 25,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  socialBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    justifyContent: "center",
    marginHorizontal: 5,
  },

  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },

  phoneIcon: {
    fontSize: 18,
    marginRight: 6,
  },

  socialBtnText: {
    fontSize: 14,
    fontWeight: "600",
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
  },

  input: {
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 14,
    marginBottom: 14,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  checkboxLabel: {
    fontSize: 14,
    marginLeft: 8,
    color: "#555",
  },

  signInBtn: {
    backgroundColor: "#25C145",
    paddingVertical: 14,
    borderRadius: 12,
  },

  signInText: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
