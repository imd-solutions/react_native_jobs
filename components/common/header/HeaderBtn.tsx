import React from 'react';
import { TouchableOpacity, Image, ImageProps, ImageSourcePropType, GestureResponderEvent} from 'react-native';

import styles from './headerbtn.style';

interface iHeader {
  iconUrl: ImageSourcePropType,
  dimension: string,
  handlePress?: (event: GestureResponderEvent) => void
}

export default function HeaderBtn({ iconUrl, dimension, handlePress }: iHeader) {
  return (
    
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={[styles.btnImg, {width: dimension, height: dimension}]}
      />
    </TouchableOpacity>
  )
}