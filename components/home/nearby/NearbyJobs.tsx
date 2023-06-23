import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "../../../hook/useFetch";
import CardsNearbyJob from "../../common/cards/nearby/CardsNearbyJob";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import { iJob } from "../../common/cards/types/Job";
import HelperErrorText from "../../helpers/HelperErrorText";

export default function NearbyJobs() {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("jobs", { nearby: true });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data?.map((job: iJob) => (
            <CardsNearbyJob
              job={job}
              key={`nearby_job_${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
}
