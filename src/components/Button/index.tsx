import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
type Props = TouchableOpacityProps & {
  title: string;
  icon: React.ComponentProps<typeof Feather>['name'];
}

export function Button({ title, icon, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={.7} {...rest}>
      <Feather
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