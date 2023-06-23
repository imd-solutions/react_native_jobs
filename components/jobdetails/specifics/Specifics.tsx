import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

interface iSpecifics {
  title: string;
  points: [];
}

export default function Specifics({ title, points }: iSpecifics) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points.map((item, i) => (
          <View style={styles.pointWrapper} key={i}>
            <View style={styles.pointDot}></View>
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
