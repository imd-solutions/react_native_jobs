import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import CardsPopularJob from "../../common/cards/popular/CardsPopularJob";
import useFetch from "./../../../hook/useFetch";
import HelperErrorText from "../../helpers/HelperErrorText";

export default function () {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("jobs", { popular: true });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item: any) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Job</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <HelperErrorText />
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <CardsPopularJob
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
}
