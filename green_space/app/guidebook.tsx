import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

const guidebookData = [
  {
    title: "Apa itu Green Space?",
    desc:
      "Green Space adalah aplikasi edukasi lingkungan yang bertujuan meningkatkan kesadaran masyarakat terhadap isu lingkungan. Aplikasi ini menyediakan berita lingkungan, jurnal ilmiah, serta panduan perilaku ramah lingkungan.",
  },
  {
    title: "Fitur Berita Lingkungan",
    desc:
      "Pada halaman utama, pengguna dapat membaca berita lingkungan terkini dari sumber terpercaya. Berita ini membantu pengguna memahami kondisi lingkungan, kebijakan, dan isu global maupun lokal.",
  },
  {
    title: "Cara Menggunakan E-Journal",
    desc:
      "Fitur E-Journal memungkinkan pengguna mencari jurnal ilmiah terkait lingkungan. Gunakan kolom pencarian untuk menemukan topik seperti perubahan iklim, konservasi hutan, dan energi terbarukan.",
  },
  {
    title: "Panduan Perilaku Ramah Lingkungan",
    desc:
      "Green Space juga berfungsi sebagai media edukasi untuk mendorong gaya hidup ramah lingkungan, seperti pengurangan sampah plastik, penghematan energi, dan pengelolaan limbah rumah tangga.",
  },
  {
    title: "Manfaat Menggunakan Green Space",
    desc:
      "Dengan menggunakan Green Space, pengguna mendapatkan informasi yang akurat dan edukatif, meningkatkan kepedulian lingkungan, serta mendorong perubahan perilaku positif untuk keberlanjutan bumi.",
  },
];

export default function GuidebookScreen() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>GUIDEBOOK</Text>
        <Text style={styles.headerSubtitle}>
          Panduan Penggunaan Green Space
        </Text>
      </View>

      {/* CONTENT */}
      <ScrollView>
        {guidebookData.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>
        ))}

        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  /* HEADER */
  header: {
    backgroundColor: "#8FD9A8",
    paddingVertical: 30,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: 16,
    top: 32,
    padding: 8,
  },
  backText: {
    fontSize: 26,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#EFFFF3",
    marginTop: 6,
  },

  /* CARD */
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 14,
    padding: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 12,
    color: "#555",
    lineHeight: 18,
  },
});
