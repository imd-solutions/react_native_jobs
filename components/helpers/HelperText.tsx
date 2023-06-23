import React from "react";
import { Text, ActivityIndicator, View } from "react-native";
import useFetch from "../../hook/useFetch";
import { COLORS } from "../../constants";
import HelperErrorText from "./HelperErrorText";

interface iHelperText {
  url: string;
  infokey: string;
  value: number;
}

export default function HelperText({ url, infokey, value }: iHelperText) {
  const { data, isLoading, error } = useFetch(url, {
    [infokey]: value,
  });
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <HelperErrorText />
      ) : data && data[0] ? (
        <Text>{data[0].title}</Text>
      ) : (
        ""
      )}
    </View>
  );
}
