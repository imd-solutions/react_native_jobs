import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  HeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import HelperErrorText from "../../components/helpers/HelperErrorText";

export default function Jobdetails() {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("jobs", {
    job_id: params.id,
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {};

  const tabs = ["About", "Qualifications", "Responsibilities"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.qualifications ?? ["N/A"]}
          />
        );
      case "About":
        return <JobAbout info={data[0].description ?? "No data provided"} />;
      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.responsibilities ?? ["N/A"]}
          />
        );
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <HeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            ></HeaderBtn>
          ),
          headerRight: () => (
            <HeaderBtn
              iconUrl={icons.share}
              dimension="60%"
              handlePress={() => console.log("Share this")}
            ></HeaderBtn>
          ),
          headerTitle: "",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <>
          {isLoading ? (
            <ActivityIndicator size="large" />
          ) : error ? (
            <HelperErrorText />
          ) : data.length === 0 ? (
            <Text>No Text</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                logo={data[0].company_logo}
                jobTitle={data[0].title}
                name={data[0].company}
                location={data[0].location}
              />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {displayTabContent()}
            </View>
          )}
        </>
      </ScrollView>

      <JobFooter url={data[0]?.job_link ?? "https://www.reed.com"} />
    </SafeAreaView>
  );
}
