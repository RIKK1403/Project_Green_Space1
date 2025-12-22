import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  RefreshControl,
  TextInput,
} from "react-native";
import { router } from "expo-router";

export default function EJournalScreen() {
  const [journals, setJournals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [query, setQuery] = useState("environment");

  const fetchJournals = async (search = query) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openalex.org/works?search=${encodeURIComponent(
          search
        )}&per-page=20`
      );
      const data = await res.json();
      setJournals(data.results || []);
    } catch (e) {
      console.log("Gagal ambil jurnal:", e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchJournals();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchJournals();
  }, []);

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

        <Text style={styles.headerTitle}>E-JOURNAL</Text>
        <Text style={styles.headerSubtitle}>
          Cari Jurnal Ilmiah (OpenAlex)
        </Text>
      </View>

      {/* 🔍 SEARCH BAR (IMPROVED) */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari jurnal ilmiah (contoh: climate change)"
            placeholderTextColor="#999"
            value={query}
            onChangeText={setQuery}
            onSubmitEditing={() => fetchJournals(query)}
            returnKeyType="search"
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => fetchJournals(query)}
          >
            <Text style={styles.searchText}>🔍</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* CONTENT */}
      <ScrollView
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
          <Text style={styles.loadingText}>Mencari jurnal...</Text>
        ) : journals.length === 0 ? (
          <Text style={styles.loadingText}>
            Jurnal tidak ditemukan
          </Text>
        ) : (
          journals.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => Linking.openURL(item.id)}
            >
              <Text style={styles.title}>{item.title}</Text>

              <Text style={styles.author}>
                {item.authorships?.[0]?.author?.display_name ||
                  "Unknown Author"}
              </Text>

              <Text style={styles.meta}>
                {item.publication_year || "-"} •{" "}
                {item.host_venue?.display_name || "Unknown Journal"}
              </Text>

              <Text style={styles.desc}>
                {item.abstract
                  ? item.abstract.slice(0, 140)
                  : "Abstrak tidak tersedia"}
                ...
              </Text>
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

  /* SEARCH */
  searchWrapper: {
    paddingHorizontal: 15,
    marginTop: -22,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    height: 56,
    alignItems: "center",
    paddingHorizontal: 14,
    elevation: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },
  searchButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#25A843",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  searchText: {
    fontSize: 20,
    color: "#FFFFFF",
  },

  /* CONTENT */
  loadingText: {
    textAlign: "center",
    marginTop: 30,
    color: "#666",
  },
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginTop: 14,
    borderRadius: 14,
    padding: 16,
    elevation: 2,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  author: {
    fontSize: 11,
    color: "#25A843",
    fontStyle: "italic",
    marginBottom: 2,
  },
  meta: {
    fontSize: 10,
    color: "#888",
    marginBottom: 6,
  },
  desc: {
    fontSize: 11,
    color: "#555",
    lineHeight: 16,
  },
});
