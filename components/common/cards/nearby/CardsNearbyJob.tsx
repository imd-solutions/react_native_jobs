import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { images } from "../../../../constants";
import styles from "./cardsnearbyjob.style";
import { iJob } from "../types/Job";
import { imageCheck } from "../../../../utils/imageCheck";
import API from "./../../../../utils/api";
import HelperText from "../../../helpers/HelperText";

interface iCardsNearbyJob {
  job: iJob;
  handleNavigate: any;
}

export default function CardsNearbyJob({
  job,
  handleNavigate,
}: iCardsNearbyJob) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        {imageCheck(job.company_logo) ? (
          <Image
            source={{ uri: job.company_logo }}
            resizeMode="contain"
            style={styles.logImage}
          ></Image>
        ) : (
          <Image
            source={images.noLogo}
            resizeMode="contain"
            style={styles.logImage}
          ></Image>
        )}
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.title}
        </Text>
        <HelperText
          url={"job_types"}
          infokey={"job_type_id"}
          value={job.job_type_id}
        ></HelperText>
      </View>
    </TouchableOpacity>
  );
}
