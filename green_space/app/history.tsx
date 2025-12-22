import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useLanguage } from "./contexts/LanguageContext";

export default function HistoryScreen() {
  const { t } = useLanguage();
  const historyData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=200",
      title: "Jl. Telekomunikasi No. 1, Terusan Buah Batu, Bandung 40257, Jawa barat, Indonesia",
      date: "Senin, 14-09-2026 18:30",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200",
      title: "Telkom University Convention Hall Jl. Telekomunikasi No. 20, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257",
      date: "Minggu, 23-06-2026 14:30",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200",
      title: "Jl. Telekomunikasi, Sukapura, Kec Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257",
      date: "Senin, 21-04-2025 20:54",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=200",
      title: "Asrama Telkom University Gedung 2 Jl. Sukapura Jln-20, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat",
      date: "Jumat, 30-10-2026 16:20",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=200",
      title: "Gedung Terbina Banna Telkom 2 GKUT1/1, Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257",
      date: "Kamis, 04-06-2025 04:05",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>History</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* History Items */}
        {historyData.map((item, index) => (
          <TouchableOpacity key={item.id} style={styles.historyCard}>
            <Image
              source={{ uri: item.image }}
              style={styles.historyImage}
            />
            <View style={styles.historyInfo}>
              <View style={styles.locationHeader}>
                <MaterialIcons name="location-on" size={16} color="#333" />
                <Text style={styles.historyTitle} numberOfLines={3}>
                  {item.title}
                </Text>
              </View>
              <Text style={styles.historyDate}>{item.date}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingTop: 15,
  },
  historyCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginBottom: 12,
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  historyImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: "#E0E0E0",
  },
  historyInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  locationHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  historyTitle: {
    fontSize: 12,
    color: "#333",
    fontWeight: "500",
    lineHeight: 16,
    marginLeft: 4,
    flex: 1,
  },
  historyDate: {
    fontSize: 11,
    color: "#999",
    marginTop: 4,
  },
});