import React from 'react'
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View
        style={ styles.calculatorContainer }
    >
        <Text
            style={ styles.miniResultado}
        >
            127,989.99
        </Text>
        <Text
            style={ styles.resultado}
        >
            127,989.99
        </Text>


        <View
            style={ styles.fila}
        >
            <BotonCalc texto='C' />
            <BotonCalc texto='+' />
            <BotonCalc texto='/' />
            <BotonCalc texto='*' color='#FF9427'/>
        </View>






    </View>
  )
}
