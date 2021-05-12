import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Button, View, TouchableOpacity, SafeAreaView, Text, TextInput } from 'react-native';
import Picker from '@gregfrench/react-native-wheel-picker'

var PickerItem = Picker.Item;



const AppButton = ({ onPress, title }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);




export default function App() {

  const [selectedItem, setSelectedItem ] = useState(2);
  const [itemList , setItemList ] = useState(['10%', '12%', '15%', '18%', '20%']);
  
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style = {styles.calculationPadding}>
        <Text style = {styles.calculation}>Bill total</Text>
        </View>
      <TextInput
          style={styles.billInput}
          placeholder="0.00"
          keyboardType="numeric"
      />
      <View style = {styles.percentagePadding}>
        <Text style = {styles.percentage}>Tip</Text>
      
        <Text>
          <Picker style={{width: 150, height: 150}}
            selectedValue={selectedItem}
            itemStyle={{color:"#8B47E6", fontSize:26, fontFamily: "ArialRoundedMTBold"}}
            onValueChange={(index) => setSelectedItem(index) }>
            {itemList.map((value, i) => (
              <PickerItem label={value} value={i} key={i}/>
            ))}
          </Picker>
        </Text>
      </View>
      <View style = {styles.splitPadding}>
        <Text style = {styles.split}>Split</Text>
        <Text style = {styles.price}>0.00</Text>
      </View>
      <View style = {styles.digitsPadding}>
      <View style={styles.firstRow}>
        <AppButton
          title="1"
          onPress={() => console.log('1')}
        />
        <AppButton
          title="2"
          onPress={() => console.log('2')}
        />
        <AppButton
          title="3"
          onPress={() => console.log('3')}
        />
      </View>
      <View style={styles.secondRow}>
        <AppButton
          title="4"
          onPress={() => console.log('4')}
        /> 
        <AppButton
          title="5"
          onPress={() => console.log('5')}
        />
        <AppButton
          title="6"
          onPress={() => console.log('6')}
        />
      </View>
      <View style={styles.thirdRow}>
        <AppButton
          title="7"
          onPress={() => console.log('7')}
        />
        <AppButton
          title="8"
          onPress={() => console.log('8')}
        />
        <AppButton
          title="9"
          onPress={() => console.log('9')}
        />
        </View>
        <View style={styles.fourthRow}>
        <AppButton
          title="."
          onPress={() => console.log('Decimal')}
        />
        <AppButton 
          title="0"
          onPress={() => console.log('0')}
        /> 
        <AppButton
          title="<"
          onPress={() => console.log('Erase')}
        />
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: "90%",
  },
  calculationPadding:{
    minWidth: "10%",
    width: "90%",
    minHeight: 10,
    backgroundColor: "#fff",
    marginTop: "50%",
    paddingTop: "1%",
    paddingLeft: "5%",
  },
  calculation: {
    fontSize: 18,
    color: "grey",
    fontFamily: "ArialRoundedMTBold",
  },
  percentagePadding: {
    minWidth: "10%",
    width: "90%",
    paddingTop: "-5%",
    paddingLeft: "0%",
    minHeight: 5,
    backgroundColor: "#fff",
  },
  percentage: {
    paddingLeft: "5%",
    fontSize: 18,
    color: "grey",
    fontFamily: "ArialRoundedMTBold",
  },
  splitPadding: {
    marginTop: "1%",
    minWidth: "10%",
    width: "90%",
    paddingTop: "3%",
    paddingLeft: "5%",
    minHeight: 90,
    height: 100,
    backgroundColor: "#EEF0F8",
    borderRadius: 20,
  },
  split: {
    fontSize: 18,
    color: "#8B47E6",
    fontFamily: "ArialRoundedMTBold",
  },
  splitPrice:{
    fontSize: 30,
    fontFamily: "ArialRoundedMTBold",
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  digitsPadding: {
    flex: 1,
    minWidth: "25%",
    width: "90%",
    minHeight: 150,
    marginTop: 35,
    marginBottom: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    fontFamily: "ArialRoundedMTBold",
  },
  digits: {
    fontSize: 24,
    color: "#8854d0",
    fontFamily: "ArialRoundedMTBold",
  },
  firstRow: {
    borderColor: "#dcdde1",
    minWidth: "10%",
    width: "100%",
    marginTop: "50%",
    paddingTop: "3%",
    minHeight: 100,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  secondRow: {
    marginVertical: 0.2,
    borderColor: "#dcdde1",
    minWidth: "10%",
    width: "100%",
    paddingTop: "3%",
    minHeight: 100,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  thirdRow: {
    marginVertical: 0.2,
    borderColor: "#dcdde1",
    minWidth: "10%",
    width: "100%",
    paddingTop: "3%",
    minHeight: 100,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  fourthRow: {
    marginVertical: 0.2,
    borderColor: "#dcdde1",
    minWidth: "10%",
    width: "100%",
    paddingTop: "1%",
    paddingBottom: "5%",
    minHeight: 50,
    alignContent: "center",
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#fff",
    borderColor: "#dcdde1",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  appButtonText: {
    fontSize: 30,
    fontFamily: "ArialRoundedMTBold",
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  circleButtonContainer: {
    elevation: 8,
    backgroundColor: "#D1D0F7",
    borderColor: "#dcdde1",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 35,
    height: 35,
    borderRadius: 100,
    marginTop: 7,
  },
  circleButtonText: {
    fontSize: 30,
    fontFamily: "ArialRoundedMTBold",
    color: "#000",
    alignSelf: "center",
    justifyContent: "center",
  },
  billInput: {
    width: "80%",
    height: "15%",
    fontSize: 48,
    fontFamily: "ArialRoundedMTBold",
  },
  tipInput: {
    width: "80%",
    height: "10%",
    fontSize: 48,
    fontFamily: "ArialRoundedMTBold",
  },
  price: {
    fontFamily: "ArialRoundedMTBold",
    fontSize: 48,
    color: "#8B47E6",
  }
});