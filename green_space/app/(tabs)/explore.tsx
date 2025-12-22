import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Image 
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useLanguage } from "../contexts/LanguageContext";

export default function ExploreScreen() {
  const { t } = useLanguage();
  
  const menuItems = [
    { icon: "person" as const, label: t('accounts'), navigate: "/accounts" },
    { icon: "history" as const, label: t('history'), navigate: "/history" },
    { icon: "language" as const, label: t('language'), navigate: "/language" },
    { icon: "accessibility" as const, label: t('accessibility'), navigate: "/accessibility" },
    { icon: "lock" as const, label: t('accountSecurity'), navigate: "/security" },
    { icon: "info" as const, label: t('about'), navigate: "/about" },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push("/(tabs)")}
        >
          <MaterialIcons name="arrow-back" size={24} color="#666" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Caniisa Putri Ananda</Text>
            <Text style={styles.profileEmail}>canisaputri@gmail.com</Text>
            <Text style={styles.profileRole}>+6287654876543</Text>
          </View>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => router.push("/accounts")}
          >
            <MaterialIcons name="edit" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.menuItem,
                index === menuItems.length - 1 && styles.lastMenuItem
              ]}
              onPress={() => {
                // Handle navigation
                if (item.navigate === "/accounts") {
                  router.push("/accounts");
                } else if (item.navigate === "/history") {
                  router.push("/history");
                } else if (item.navigate === "/language") {
                  router.push("/language");
                } else {
                  console.log(`Navigate to ${item.label}`);
                }
              }}
            >
              <View style={styles.menuLeft}>
                <MaterialIcons name={item.icon} size={24} color="#333" />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

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
    paddingTop: 20,
  },
  profileCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E0E0E0",
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 3,
  },
  profileEmail: {
    fontSize: 13,
    color: "#666",
    marginBottom: 2,
  },
  profileRole: {
    fontSize: 12,
    color: "#999",
  },
  editButton: {
    width: 36,
    height: 36,
    backgroundColor: "#F5F5F5",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  menuContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuLabel: {
    fontSize: 15,
    color: "#333",
    marginLeft: 15,
    fontWeight: "500",
  },
});