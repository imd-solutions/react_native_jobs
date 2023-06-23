import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "./../../../../constants";

const styles = StyleSheet.create({
  tab: {
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
  },

  tabText: {
    fontFamily: FONT.medium,
  },
});

export default styles;
