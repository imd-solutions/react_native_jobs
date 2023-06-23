import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./cardspopularjob.style";
import { COLORS, images } from "../../../../constants";
import { imageCheck } from "../../../../utils/imageCheck";
interface iCardsPopularJob {
  item: any;
  selectedJob: any;
  handleCardPress: any;
}

export default function CardsPopularJob({
  item,
  selectedJob,
  handleCardPress,
}: iCardsPopularJob) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            selectedJob === item.job_id ? COLORS.primary : "#FFF",
        },
      ]}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity
        style={[
          styles.logoContainer,
          {
            backgroundColor:
              selectedJob === item.job_id ? "#FFF" : COLORS.white,
          },
        ]}
      >
        {imageCheck(item.company_logo) ? (
          <Image
            source={{ uri: item.company_logo }}
            resizeMode="contain"
            style={styles.logoImage}
          />
        ) : (
          <Image
            source={images.noLogo}
            resizeMode="contain"
            style={styles.logoImage}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.company}
      </Text>
      <View>
        <Text
          style={[
            styles.jobName,
            {
              color:
                selectedJob === item.job_id ? COLORS.white : COLORS.primary,
            },
          ]}
          numberOfLines={2}
        >
          {item.title}
        </Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );
}
