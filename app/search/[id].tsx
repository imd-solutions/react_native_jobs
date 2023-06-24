import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";
import useFetch from "../../hook/useFetch";

import { HeaderBtn, CardsNearbyJob } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "../../styles/search";

export default function Search() {
  const params = useSearchParams();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [disablePrevBtn, setDisablePrevBtn] = useState(true);
  const [disableNextBtn, setDisableNextBtn] = useState(false);

  const { data, count, isLoading, error, refetch } = useFetch("jobs", {
    q: params.id,
    _page: page,
    _limit: limit,
  });

  const handlePagination = (direction: string) => {
    if (direction === "prev") {
      setDisableNextBtn(false);
      setPage(page - 1);
    } else if (direction === "next") {
      setDisablePrevBtn(false);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (page === 1) {
      setDisablePrevBtn(true);
    }
    let pageCount = Math.ceil(count / limit);
    if (pageCount === page) {
      setDisableNextBtn(true);
    }
    refetch();
  }, [page]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <HeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CardsNearbyJob
            job={item}
            handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.searchTitle}>{params.id}</Text>
              <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
            </View>
            <View style={styles.loaderContainer}>
              {isLoading ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
              ) : (
                error && <Text>Oops something went wrong</Text>
              )}
            </View>
          </>
        )}
        ListFooterComponent={(item) => (
          <View style={styles.footerContainer}>
            <TouchableOpacity
              disabled={disablePrevBtn}
              style={[
                styles.paginationButton,
                {
                  backgroundColor: disablePrevBtn
                    ? COLORS.disabledTertiary
                    : COLORS.tertiary,
                },
              ]}
              onPress={() => handlePagination("prev")}
            >
              <Image
                source={icons.chevronLeft}
                style={styles.paginationImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.paginationTextBox}>
              <Text style={styles.paginationText}>{page}</Text>
            </View>
            <TouchableOpacity
              disabled={disableNextBtn}
              style={[
                styles.paginationButton,
                {
                  backgroundColor: disableNextBtn
                    ? COLORS.disabledTertiary
                    : COLORS.tertiary,
                },
              ]}
              onPress={() => handlePagination("next")}
            >
              <Image
                source={icons.chevronRight}
                style={styles.paginationImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
