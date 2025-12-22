import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { router } from "expo-router";

// 🔹 DATA CONTOH REPORT
const reportSummary = {
  total: 12,
  approved: 7,
  pending: 3,
  rejected: 2,
};

const reportHistory = [
  {
    id: 1,
    title: "Laporan Sampah Plastik",
    date: "10 Sept 2025",
    status: "Approved",
  },
  {
    id: 2,
    title: "Laporan Pencemaran Sungai",
    date: "12 Sept 2025",
    status: "Pending",
  },
  {
    id: 3,
    title: "Laporan Pembakaran Sampah",
    date: "14 Sept 2025",
    status: "Rejected",
  },
];

export default function ReportsScreen() {
  const statusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "#25A843";
      case "Pending":
        return "#F4B400";
      case "Rejected":
        return "#E53935";
      default:
        return "#999";
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

        <Text style={styles.headerTitle}>REPORTS</Text>
        <Text style={styles.headerSubtitle}>
          Ringkasan Laporan Lingkungan
        </Text>
      </View>

      <ScrollView>
        {/* SUMMARY */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>
              {reportSummary.total}
            </Text>
            <Text style={styles.summaryLabel}>Total Laporan</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text
              style={[
                styles.summaryNumber,
                { color: "#25A843" },
              ]}
            >
              {reportSummary.approved}
            </Text>
            <Text style={styles.summaryLabel}>Approved</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text
              style={[
                styles.summaryNumber,
                { color: "#F4B400" },
              ]}
            >
              {reportSummary.pending}
            </Text>
            <Text style={styles.summaryLabel}>Pending</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text
              style={[
                styles.summaryNumber,
                { color: "#E53935" },
              ]}
            >
              {reportSummary.rejected}
            </Text>
            <Text style={styles.summaryLabel}>Rejected</Text>
          </View>
        </View>

        {/* HISTORY */}
        <View style={styles.historyContainer}>
          <Text style={styles.sectionTitle}>
            Riwayat Laporan
          </Text>

          {reportHistory.map((item) => (
            <View key={item.id} style={styles.historyCard}>
              <View>
                <Text style={styles.historyTitle}>
                  {item.title}
                </Text>
                <Text style={styles.historyDate}>
                  {item.date}
                </Text>
              </View>

              <Text
                style={[
                  styles.historyStatus,
                  { color: statusColor(item.status) },
                ]}
              >
                {item.status}
              </Text>
            </View>
          ))}
        </View>

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

  /* SUMMARY */
  summaryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 15,
  },
  summaryCard: {
    backgroundColor: "#FFFFFF",
    width: "48%",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
  },
  summaryNumber: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000",
  },
  summaryLabel: {
    fontSize: 11,
    color: "#666",
    marginTop: 4,
  },

  /* HISTORY */
  historyContainer: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  historyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 1,
  },
  historyTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000",
  },
  historyDate: {
    fontSize: 10,
    color: "#999",
    marginTop: 2,
  },
  historyStatus: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
