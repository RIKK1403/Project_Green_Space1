import React, { useRef, useEffect } from "react";
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet, Animated } from "react-native";

/* ========= Animated Tab Wrapper ========= */
function AnimatedTab({
  focused,
  children,
  showIndicator = false,
}: {
  focused: boolean;
  children: React.ReactNode;
  showIndicator?: boolean;
}) {
  const scale = useRef(new Animated.Value(1)).current;
  const indicatorOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: focused ? 1.1 : 1,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(indicatorOpacity, {
        toValue: focused ? 1 : 0,
        duration: 180,
        useNativeDriver: true,
      }),
    ]).start();
  }, [focused]);

  return (
    <View style={styles.tabWrapper}>
      <Animated.View
        style={{
          transform: [{ scale }],
        }}
      >
        {children}
      </Animated.View>

      {showIndicator && (
        <Animated.View
          style={[
            styles.indicator,
            { opacity: indicatorOpacity },
          ]}
        />
      )}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#25A843",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopWidth: 0,
        },
      }}
    >
      {/* ================= HOME ================= */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <AnimatedTab focused={focused} showIndicator>
              <View style={styles.icon}>
                <MaterialIcons
                  name="home"
                  size={26}
                  color="#FFFFFF"
                />
              </View>
            </AnimatedTab>
          ),
        }}
      />

      {/* ================= CAMERA ================= */}
      <Tabs.Screen
        name="camera"
        options={{
          tabBarIcon: ({ focused }) => (
            <AnimatedTab focused={focused}>
              <View style={styles.cameraOuter}>
                <View style={styles.cameraInner}>
                  <MaterialIcons
                    name="camera-alt"
                    size={26}
                    color="#FFFFFF"
                  />
                </View>
              </View>
            </AnimatedTab>
          ),
        }}
      />

      {/* ================= SETTINGS ================= */}
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <AnimatedTab focused={focused} showIndicator>
              <View style={styles.icon}>
                <MaterialIcons
                  name="settings"
                  size={26}
                  color="#FFFFFF"
                />
              </View>
            </AnimatedTab>
          ),
        }}
      />
    </Tabs>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  tabWrapper: {
    alignItems: "center",
  },

  /* ICON NORMAL (SEMUA TAB BIASA) */
  icon: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  /* CAMERA BUTTON (SATU-SATUNYA YANG PUTIH) */
  cameraOuter: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#25A843",
    alignItems: "center",
    justifyContent: "center",
  },

  /* UNDERLINE ACTIVE */
  indicator: {
    marginTop: 4,
    width: 18,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#FFFFFF",
  },
});
