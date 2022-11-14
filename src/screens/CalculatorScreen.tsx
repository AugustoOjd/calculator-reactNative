import React, { useState } from 'react'
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

export const CalculatorScreen = () => {


    const [numeroAnterior, setNumerAnterior] = useState('1200')
    const [numero, setNumero] = useState('100')


    const limpiar = () =>{
        setNumero('0')
        setNumerAnterior('0')
    }

    const armarNumero = (numeroTexto: string) =>{

        setNumero(numero + numeroTexto)
    }

  return (
    <View
        style={ styles.calculatorContainer }
    >
        <Text
            style={ styles.miniResultado}
        >
            {numeroAnterior}
        </Text>
        <Text
            style={ styles.resultado}
            numberOfLines={1}
            adjustsFontSizeToFit
        >
            {numero}
        </Text>

{/* Fila de botones */}

        <View
            style={ styles.fila}
        >
            <BotonCalc texto='C' color='#9B9B8B' accion={limpiar}/>
            <BotonCalc texto='+/-' color='#9B9B8B' accion={limpiar}/>
            <BotonCalc texto='del' color='#9B9B8B' accion={limpiar}/>
            <BotonCalc texto='/' color='#FF9427' accion={limpiar}/>
        </View>

        <View
            style={ styles.fila}
        >
            <BotonCalc texto='7' accion={armarNumero}/>
            <BotonCalc texto='8' accion={armarNumero}/>
            <BotonCalc texto='9' accion={armarNumero}/>
            <BotonCalc texto='X' color='#FF9427' accion={limpiar}/>
        </View>

        <View
            style={ styles.fila}
        >
            <BotonCalc texto='4' accion={armarNumero}/>
            <BotonCalc texto='5' accion={armarNumero}/>
            <BotonCalc texto='6' accion={armarNumero}/>
            <BotonCalc texto='-' color='#FF9427' accion={limpiar}/>
        </View>

        <View
            style={ styles.fila}
        >
            <BotonCalc texto='1' accion={armarNumero}/>
            <BotonCalc texto='2' accion={armarNumero}/>
            <BotonCalc texto='3' accion={armarNumero}/>
            <BotonCalc texto='+' color='#FF9427' accion={limpiar}/>
        </View>

        <View
            style={ styles.fila}
        >
            <BotonCalc texto='0' ancho accion={armarNumero}/>
            <BotonCalc texto='.' accion={armarNumero}/>
            <BotonCalc texto='=' color='#FF9427' accion={limpiar}/>
        </View>





    </View>
  )
}
