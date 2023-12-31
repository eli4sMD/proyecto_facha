// Archivo: Predict.js
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const Predict = ({ chartData }) => {
  // Asegúrate de que 'data' es el array de datos que proporcionaste
  return (
    <ScrollView horizontal={true}>
        <LineChart
            areaChart
            initialSpacing={25}
            data={chartData}
            height={280}
            maxValue={620000}
            showVerticalLines
            backgroundColor="black"
            startFillColor="rgba(20,105,81,0.3)"
            endFillColor="rgba(20,85,81,0.01)"
            startOpacity={0.9}
            endOpacity={0.2}
            spacing={74}
            color1="skyblue"
            textColor1="white"
            hideRules
            dataPointsHeight={6}
            dataPointsWidth={6}
            verticalLinesColor={"skyblue"}
            dataPointsColor1="red"
            yAxisColor="black"
            xAxisColor="black"
            yAxisTextStyle={{ color: 'black' }}
            textShiftY={-2}
            textShiftX={6}
            textFontSize={11}
            pointerConfig={{
            pointerStripUptoDataPoint: true,
            pointerStripColor: 'lightgray',
            pointerStripWidth: 2,
            strokeDashArray: [2, 5],
            pointerColor: 'red',
            radius: 4,
            pointerLabelWidth: 100,
            pointerLabelHeight: 120,
            pointerLabelComponent: items => {
                const item = items[0];
                return (
                <View
                    style={{
                    height: 120,
                    width: 120,
                    backgroundColor: '#282C3E',
                    borderRadius: 4,
                    justifyContent: 'center',
                    paddingLeft: 16,
                    paddingRight: 16
                    }}>
                    <Text style={{ color: 'lightgray', fontSize: 12 }}>Producción estimada:</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.value}</Text>
                    <Text style={{ color: 'lightgray', fontSize: 12, marginTop: 12 }}>Fecha estimada:</Text>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.label}</Text>
                </View>
                );
            },
            }}
        />
    </ScrollView>
  );
};

export default Predict;
