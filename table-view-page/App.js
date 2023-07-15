import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView, SafeAreaView, Image, Switch, ActivityIndicator } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%" }}>
        <TableView>
          <Section>
            <Cell cellStyle="Basic" title="Basic cell" />
            <Cell cellStyle="RightDetail" title="Cell with right detail" />
            <Cell cellStyle="LeftDetail" title="Cell with left detail" />
          </Section>

          <Section header="Cells with accessories">
            <Cell cellStyle="Basic" accessory="DisclosureIndicator" title="Basic cell with pressable!" onPress={() => alert("test!")}></Cell>
            <Cell cellStyle="RightDetail" detail="Detail" accessory="DetailDisclosure" title="Cell with right detail"></Cell>
            <Cell cellStyle="Subtitle" accessory="Checkmark" title="basic cell" detail="with subtitle! And checkmark"></Cell>
          </Section>

          <Section header="Cells with other elements">
            <Cell cellStyle="Basic" title="Cell with image"></Cell>
            <Cell cellStyle="RightDetail" detail="Detail" rightDetailColor="blue" title="Cell with custom detail colour" image={
              <Image
                style={{ borderRadius: 5 }}
                source={require('./assets/favicon.png')}
              />
            }></Cell>
            <Cell cellStyle="Basic" cellAccessoryView={<Switch />} contentContainerStyle={{ paddingVertical: 4 }} title="Cell with a switch"></Cell>
            <Cell cellStyle="Basic" cellAccessoryView={<ActivityIndicator />} title="Cell with a switch"></Cell>
            <Cell cellStyle="Basic" cellContentView={
              <TextInput
                style={{ fontSize: 16, flex: 1 }}
                placeholder="A text input cell"
              />
            }></Cell>
          </Section>

          <Section
            header="Custom cells"
            contentContainerStyle={{ alignItems: 'center', height: 60, backgroundColor: "lightblue" }}>

            <Cell cellContentView={
              <Text style={{ flex: 1, fontSize: 16, textAlign: 'center', color: "darkblue", fontWeight: "bold" }}>
                Hello world! This is custom cell.
              </Text>
            }>

            </Cell>

          </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
}