import { View, Text} from "react-native";


export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
      ></View>
      <View style={{
        width:200, height:200, backgroundColor:"green", padding:60
      }}>
          <Text>
            <Text style={{ color: "white"}}>Hello</Text>
            Hello world
          </Text>
      </View>
    </View>
  );
}
