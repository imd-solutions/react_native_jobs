import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./tabs.style";
import { COLORS, SIZES } from "../../../constants";

interface iTabs {
  tabs: any;
  activeTab: any;
  setActiveTab: any;
}
interface iTabButton {
  name: any;
  activeTab: any;
  onHandleSearchType: any;
}

const TabButton = ({ name, activeTab, onHandleSearchType }: iTabButton) => (
  <TouchableOpacity
    style={[
      styles.btn,
      { backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8" },
    ]}
    onPress={onHandleSearchType}
  >
    <Text
      style={[
        styles.btnText,
        { color: name === activeTab ? "#C3BFCC" : "#AAA9B8" },
      ]}
    >
      {name}
    </Text>
  </TouchableOpacity>
);
export default function Tabs({ tabs, activeTab, setActiveTab }: iTabs) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
}
