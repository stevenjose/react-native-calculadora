import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
  },
  resultado: {
    fontSize: 60,
    color: 'white',
    textAlign: 'right',
    marginBottom: 10,
  },
  calculadoraContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  resulSmall: {
    fontSize: 30,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
