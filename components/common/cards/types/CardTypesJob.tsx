import React, { useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  ActivityIndicator,
  View,
} from "react-native";
import { COLORS, icons, SIZES } from "../../../../constants";
import { useRouter } from "expo-router";

import styles from "./cardtypejobs.style";
import useFetch from "../../../../hook/useFetch";

export default function CardTypesJob() {
  const router = useRouter();

  const [activeJobType, setactiveJobType] = useState("full-time");

  const { data, isLoading, error } = useFetch("job_types", null);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text></Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.job_type_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setactiveJobType(item.slug);
                router.push(`/search/${item}`);
              }}
              style={[
                styles.tab,
                {
                  borderColor:
                    activeJobType === item.slug
                      ? COLORS.secondary
                      : COLORS.gray2,
                },
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    color:
                      activeJobType === item.slug
                        ? COLORS.secondary
                        : COLORS.gray2,
                  },
                ]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
