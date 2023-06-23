import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons, images } from "../../../constants";
import { imageCheck } from "../../../utils/imageCheck";

interface iCompany {
  logo: string;
  jobTitle: string;
  name: string;
  location: string;
}

export default function Company({ logo, jobTitle, name, location }: iCompany) {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        {imageCheck(logo) ? (
          <Image
            source={{ uri: logo }}
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
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{name}</Text>
        {location ? (
          <>
            <Text> /</Text>
            <View style={styles.locationBox}>
              <Image
                source={icons.location}
                resizeMode="contain"
                style={styles.locationImage}
              />
              <Text style={styles.locationName}> {location}</Text>
            </View>
          </>
        ) : (
          ""
        )}
      </View>
    </View>
  );
}
