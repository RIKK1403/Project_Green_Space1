import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
  Image,
  RefreshControl,
} from "react-native";
import { router } from "expo-router"; // ✅ TAMBAHAN

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const [newsData, setNewsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchNews = async () => {
    try {
      const res = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://www.mongabay.co.id/feed/"
      );
      const data = await res.json();
      setNewsData(data.items || []);
    } catch (e) {
      console.log("Gagal ambil berita:", e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchNews();
  }, []);

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
        {/* ✅ E-JOURNAL (FIXED) */}
        <TouchableOpacity
          style={styles.iconMenuItem}
          onPress={() => router.push("/ejournal")}
        >
          <View style={styles.iconBox}>
            <Text style={styles.iconText}>📖</Text>
          </View>
          <Text style={styles.iconLabel}>E-Journal</Text>
        </TouchableOpacity>

<TouchableOpacity
  style={styles.iconMenuItem}
  onPress={() => router.push("/guidebook")}
>
  <View style={styles.iconBox}>
    <Text style={styles.iconText}>📚</Text>
  </View>
  <Text style={styles.iconLabel}>Guidebook</Text>
</TouchableOpacity>


       <TouchableOpacity
  style={styles.iconMenuItem}
  onPress={() => router.push("/status")}
>
  <View style={styles.iconBox}>
    <Text style={styles.iconText}>✅</Text>
  </View>
  <Text style={styles.iconLabel}>Status</Text>
</TouchableOpacity>

        <TouchableOpacity
  style={styles.iconMenuItem}
  onPress={() => router.push("/reports")}
>

          <View style={styles.iconBox}>
            <Text style={styles.iconText}>⏰</Text>
          </View>
          <Text style={styles.iconLabel}>Reports</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={["#25A843"]}
            tintColor="#25A843"
          />
        }
      >
        {loading ? (
          <Text style={styles.loadingText}>
            Memuat berita lingkungan Indonesia...
          </Text>
        ) : (
          newsData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.newsCard}
              onPress={() => Linking.openURL(item.link)}
            >
              {(item.thumbnail || item.enclosure?.link) ? (
                <Image
                  source={{ uri: item.thumbnail || item.enclosure?.link }}
                  style={styles.newsThumbnail}
                />
              ) : (
                <View style={styles.newsImageContainer}>
                  <Text style={styles.newsEmoji}>🌱</Text>
                </View>
              )}

              <View style={styles.newsTextContainer}>
                <Text style={styles.newsTitle}>{item.title}</Text>
                <Text style={styles.newsDescription}>
                  {item.description.replace(/<[^>]+>/g, "").slice(0, 120)}...
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}

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
  loadingText: {
    textAlign: "center",
    marginTop: 20,
    color: "#666",
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
    backgroundColor: "#EAF7EF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  newsThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: "#EAF7EF",
  },
  newsEmoji: {
    fontSize: 34,
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
