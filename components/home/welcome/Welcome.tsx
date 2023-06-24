import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { COLORS, icons, SIZES } from "../../../constants";

import styles from "./welcome.style";
import useFetch from "../../../hook/useFetch";
import CardTypesJob from "../../common/cards/types/CardTypesJob";

interface iWelcome {
  searchTerm: string;
  setSearchTerm: any;
  handleClick: any;
}

export default function Welcome({
  searchTerm,
  setSearchTerm,
  handleClick,
}: iWelcome) {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello User</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <CardTypesJob />
      </View>
    </View>
  );
}
