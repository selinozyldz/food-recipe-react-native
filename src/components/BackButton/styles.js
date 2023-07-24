import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 180,
    padding: 8,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: 'rgba(73,182,77,0.9)',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3
  },
  btnIcon: {
    top: -3,
    height: 17,
    width: 17
  }
});

export default styles;
