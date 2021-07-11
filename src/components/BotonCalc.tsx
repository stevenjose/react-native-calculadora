import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  texto: string;
  color?: string;
  ancho?: number;
  border?: number;
  accion: (numeroText: string) => void;
}
export const BotonCal = ({
  texto,
  color = '#2D2D2D',
  ancho = 80,
  border = 100,
  accion,
}: Props) => {
  const styles = StyleSheet.create({
    boton: {
      height: 80,
      width: ancho,
      backgroundColor: color,
      borderRadius: border,
      justifyContent: 'center',
      marginHorizontal: 10,
    },
    botonTexto: {
      textAlign: 'center',
      padding: 10,
      fontSize: 30,
      color: 'black',
      fontWeight: '300',
    },
  });

  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View style={styles.boton}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.botonTexto,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
