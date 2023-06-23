import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";

interface iAbout {
  info: string;
}
export default function About({ info }: iAbout) {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
}
