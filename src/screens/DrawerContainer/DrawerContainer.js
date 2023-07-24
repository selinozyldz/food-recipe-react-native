import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="Ana Sayfa"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("AnaSayfa");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Kategoriler"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Kategoriler");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Arama"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Arama");
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
