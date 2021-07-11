import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {BotonCal} from '../components/BotonCalc';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const limpiar = () => {
    setNumero('0');
  };

  const armarNumero = (numeroText: string) => {
    if (numero.includes('.') && numeroText === '.') return;

    setNumero(numero + numeroText);
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resulSmall}>{numeroAnterior}</Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>
      <View style={styles.fila}>
        <BotonCal texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCal texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCal texto="%" color="#9B9B9B" accion={limpiar} />
        <BotonCal texto="/" color="#FF9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCal texto="7" accion={armarNumero} />
        <BotonCal texto="8" accion={armarNumero} />
        <BotonCal texto="9" accion={armarNumero} />
        <BotonCal texto="X" color="#FF9427" accion={limpiar} />
      </View>
      <View style={styles.fila}>
        <BotonCal texto="4" accion={armarNumero} />
        <BotonCal texto="5" accion={armarNumero} />
        <BotonCal texto="6" accion={armarNumero} />
        <BotonCal texto="-" accion={armarNumero} color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <BotonCal texto="1" accion={armarNumero} />
        <BotonCal texto="2" accion={armarNumero} />
        <BotonCal texto="3" accion={armarNumero} />
        <BotonCal texto="+" accion={armarNumero} color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <BotonCal
          texto="0"
          accion={armarNumero}
          ancho={Number(180)}
          border={Number(40)}
        />
        <BotonCal texto="." accion={armarNumero} />
        <BotonCal texto="=" color="#FF9427" accion={limpiar} />
      </View>
    </View>
  );
};
