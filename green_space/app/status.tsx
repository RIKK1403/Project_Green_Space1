import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

// 🔹 DATA CONTOH (NANTI BISA DIGANTI DARI API / DATABASE)
const statusData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    status: "approved",
    note: "Foto sesuai kriteria lingkungan",
    date: "10 Sept 2025",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    status: "pending",
    note: "Sedang dalam proses verifikasi",
    date: "12 Sept 2025",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    status: "rejected",
    note: "Foto tidak relevan dengan lingkungan",
    date: "14 Sept 2025",
  },
];

export default function StatusScreen() {
  const renderStatus = (status: string) => {
    switch (status) {
      case "approved":
        return { text: "APPROVED", color: "#25A843" };
      case "pending":
        return { text: "PENDING", color: "#F4B400" };
      case "rejected":
        return { text: "REJECTED", color: "#E53935" };
      default:
        return { text: "-", color: "#999" };
    }
  };

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

        <Text style={styles.headerTitle}>STATUS</Text>
        <Text style={styles.headerSubtitle}>
          Status Verifikasi Foto Lingkungan
        </Text>
      </View>

      {/* CONTENT */}
      <ScrollView>
        {statusData.map((item) => {
          const statusInfo = renderStatus(item.status);

          return (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={styles.info}>
                <View
                  style={[
                    styles.statusBadge,
                    { backgroundColor: statusInfo.color },
                  ]}
                >
                  <Text style={styles.statusText}>
                    {statusInfo.text}
                  </Text>
                </View>

                <Text style={styles.date}>{item.date}</Text>
                <Text style={styles.note}>{item.note}</Text>
              </View>
            </View>
          );
        })}

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
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 180,
  },
  info: {
    padding: 14,
  },
  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 6,
  },
  statusText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "bold",
  },
  date: {
    fontSize: 10,
    color: "#999",
    marginBottom: 4,
  },
  note: {
    fontSize: 12,
    color: "#555",
    lineHeight: 16,
  },
});
