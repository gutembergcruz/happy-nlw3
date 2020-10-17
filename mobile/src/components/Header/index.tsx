import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import styles from './styles';


interface HeaderProps {
  title: string;
  showCancell?: boolean;
}
const Header = ({ title, showCancell = true }: HeaderProps) => {
  const navigation = useNavigation();

  function handleGoBackHome() {
    navigation.navigate('OrphanagesMap');
  }
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15BCD6" />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>

      {showCancell ? (
        <BorderlessButton onPress={handleGoBackHome}>
          <Feather name="x" size={24} color="#FF669D" />
        </BorderlessButton>
      )
        : (<View />)
      }
    </View>
  );
}

export default Header;