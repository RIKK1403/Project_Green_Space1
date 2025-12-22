import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const newsData = [
    {
      image: "🏛️",
      title:
        "Sebuah Renjana Lingkungan Nasional, Kementerian Targetkan Jalur Gerakan Nasional",
      description:
        "Kementerian Lingkungan Hidup dan Kehutanan (KLHK) menargetkan program gerakan nasional penghijauan...",
    },
    {
      image: "🌳",
      title:
        "Mengenal Hak Lingkungan Hidup Setelah yang Diperjurit Tiap 5 Juni",
      description:
        "Setiap tanggal 5 Juni diperingati sebagai Hari Lingkungan Hidup Sedunia yang telah dimulai pada tahun 1974...",
    },
    {
      image: "👥",
      title:
        "4 Cara Elosi Ukuran Kembang Plastik Selama yang Mengikut di Perayaan, Sudah Diterapkan?",
      description:
        "Anda paling sering dilanda krisis untuk solusi sekali pakai pada masyarakat dalam penggantian sampah plastik...",
    },
    {
      image: "🎬",
      title:
        "Hari Bumi ke-55! Yuk ketahui Efek, Planet Kita!, Aksi Nyata Berkesinambungan",
      description:
        "Momentum Hari Bumi yang diperingati tiap tanggal 22 April tahun 2025 menguatkan kampanye global...",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerBackground}>
          <Text style={styles.headerTitle}>GREEN SPACE</Text>
          <Text style={styles.headerIcon}>🌍</Text>
        </View>
      </View>

      {/* Icon Menu */}
      <View style={styles.iconMenuContainer}>
        <TouchableOpacity style={styles.iconMenuItem}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>📖</Text>
          </View>
          <Text style={styles.iconLabel}>E-Journal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconMenuItem}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>📚</Text>
          </View>
          <Text style={styles.iconLabel}>Guidebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconMenuItem}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>✅</Text>
          </View>
          <Text style={styles.iconLabel}>Status</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconMenuItem}>
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>⏰</Text>
          </View>
          <Text style={styles.iconLabel}>Reports</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {newsData.map((item, index) => (
          <TouchableOpacity key={index} style={styles.newsCard}>
            <View style={styles.newsImageContainer}>
              <Text style={styles.newsEmoji}>{item.image}</Text>
            </View>
            <View style={styles.newsTextContainer}>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {/* Spacer agar tidak ketutup tab bar */}
        <View style={{ height: 120 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  headerContainer: {
    backgroundColor: "#8FD9A8",
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerBackground: {
    alignItems: "center",
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 2,
  },
  headerIcon: {
    fontSize: 80,
    marginTop: 10,
  },
  iconMenuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginTop: -20,
    borderRadius: 15,
    elevation: 3,
  },
  iconMenuItem: {
    alignItems: "center",
  },
  iconBox: {
    width: 60,
    height: 60,
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 8,
  },
  iconText: {
    fontSize: 28,
  },
  iconLabel: {
    fontSize: 11,
    color: "#666666",
    fontWeight: "500",
  },
  content: {
    flex: 1,
    paddingTop: 15,
  },
  newsCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginBottom: 12,
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    elevation: 2,
  },
  newsImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  newsEmoji: {
    fontSize: 35,
  },
  newsTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  newsTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 6,
    lineHeight: 18,
  },
  newsDescription: {
    fontSize: 11,
    color: "#666666",
    lineHeight: 15,
  },
});
