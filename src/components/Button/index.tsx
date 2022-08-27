import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons';
import { styles } from './styles';
type Props = TouchableOpacityProps & {
  title: string;
  icon: React.ComponentProps<typeof SimpleLineIcons>['name'];
}

export function Button({ title, icon, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={.7} {...rest}>
      <SimpleLineIcons
        name={icon}
        size={28}
        color={'#111729'}
      />
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}