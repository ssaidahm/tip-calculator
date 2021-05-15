import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { TouchableWithoutFeedback, StyleSheet, Button, View, TouchableOpacity, SafeAreaView, Text, TextInput } from 'react-native';
import Picker from '@gregfrench/react-native-wheel-picker';

var PickerItem = Picker.Item;
var bill_total = 0;
bill_total = bill_total.toFixed(2);

var tip_total = 0;
tip_total = tip_total.toFixed(2);

var split_total = 0;
split_total = split_total.toFixed(2);

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const CircleButton = ({ onPress, title }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={styles.circleButtonContainer}>
    <Text style={styles.circleButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default function App() {
  const [selectedItem, setSelectedItem ] = useState(2);
  const [itemList , setItemList ] = useState(['10%', '12%', '15%', '18%', '20%']);
  const [count, setCount] = useState(1);
  const [flexDirection, setflexDirection] = useState("row");
  const [billTotal, setBillTotal] = useState();

  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const incrementCount = () => {
    if (count < 9) setCount(count + 1);
  };

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
      <View style = {styles.splitPadding}
        label="flexDirection"
        values={["row"]}
        selectedValue={flexDirection}
        setSelectedValue={setflexDirection}>
        <Text style = {styles.split}>Split</Text>
        <Text style = {styles.split}>Split total</Text>
      </View>
      <View style = {styles.splitCounter}
      label="flexDirection"
      values={["row"]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}>
      <CircleButton
        title="-"
        onPress={() => decrementCount()}
      />
        <Text style = {styles.price}>{count}</Text>
        <CircleButton
        title="+"
        onPress={() => incrementCount()}
      />
      <View style = {styles.split_counter_price}></View>
      <Text style = {styles.price}>0.00</Text>
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
    marginTop: "20%",
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
    paddingTop: "0%",
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
    marginTop: "15%",
    minWidth: "10%",
    width: "90%",
    paddingTop: "3%",
    paddingLeft: "5%",
    minHeight: 90,
    height: 100,
    backgroundColor: "#EEF0F8",
    borderRadius: 20,
    flexDirection: "row",
  },
  splitCounter: {
    marginTop: "-15%",
    minWidth: "10%",
    width: "90%",
    paddingTop: "3%",
    paddingLeft: "5%",
    minHeight: 90,
    height: 100,
    backgroundColor: "#EEF0F8",
    borderRadius: 20,
    flexDirection: "row",
  },
  split: {
    fontSize: 18,
    color: "#8B47E6",
    fontFamily: "ArialRoundedMTBold",
    flex: 1,
    marginVertical: 1,
  },
  splitPrice:{
    fontSize: 30,
    fontFamily: "ArialRoundedMTBold",
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  split_counter_price:{
    marginHorizontal: "11%",
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
    marginTop: 10,
  },
  circleButtonText: {
    fontSize: 30,
    fontFamily: "ArialRoundedMTBold",
    color: "#8B47E6",
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