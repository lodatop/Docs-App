import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { KoroCard, KoroCollapse, KoroTable, KoroIcon, KoroBadge } from 'rn-koro-lib'
import { ScrollView } from 'react-native-gesture-handler';

export const GlobalComponentsScreen = (props) => {

    const tableTitle = ['Title', 'Title2', 'Title3', 'Title4'];
    
    const tableData = [['data', 'data2', 'data3', 'data4'], ['data5', 'data6', 'data7', 'data8']];
    
    const badgeHeader = () => (
        <View>
          <Text style={styles.title}>Badge</Text>
        </View>
    );
    const badgeCode = "<KoroBadge value={value} showValue={boolean} badgeSize={size}> Content with badge </KoroBadge>"
    const badgeFooter = () => (
        <KoroCollapse title='Show code'>
            <View style={[{backgroundColor: 'LightGrey'}]}>
                <Text> {badgeCode} </Text>
                <Text> Props: </Text>
                <Text> value: the value shown in the badge. </Text>
                <Text> showValue: a boolean that sets whether the badge is visible. </Text>
                <Text> badgeSize: a string that sets the size of the badge. </Text>
                <Text> position: a string that sets the position in which the badge will be shown. </Text>
            </View>
        </KoroCollapse>
      );
      
    const iconHeader = () => (
        <View>
          <Text style={styles.title}>Icon</Text>
        </View>
    );
    const iconCode = '<KoroIcon icon="icon" size="size" style="style"/>'
    const iconFooter = () => (
        <KoroCollapse title='Show code'>
            <View style={[{backgroundColor: 'LightGrey'}]}>
                <Text> {iconCode} </Text>
                <Text> Props: </Text>
                <Text> icon: name of the icon that will be displayed. </Text>
                <Text> size: the size of the icon. </Text>
                <Text> style: custom style for the icon component. </Text>
            </View>
        </KoroCollapse>
    );

    const tableHeader = () => (
        <View>
          <Text style={styles.title}>Table</Text>
        </View>
    );
    const tableCode = "<KoroTable  borderStyle={borderStyle} widthArr={[array]} headStyle={headStyle} heightArr={array of height} tableData={tableData} tableHead={tableTitle} />"
    const tableFooter = () => (
        <KoroCollapse title='Show code'>
            <View style={[{backgroundColor: 'LightGrey'}]}>
                <Text> {tableCode} </Text>
                <Text> Props: </Text>
                <Text> borderStyle: custom style for the table borders. </Text>
                <Text> headStyle: custom style for the table head row. </Text>
                <Text> widthArr: an array that sets the width of each column in the table. </Text>
                <Text> heightArr: an array that sets the height of each row in the table. </Text>
                <Text> tableHead: an array of the elements in the head row of the table. </Text>
                <Text> tableData: an array of each row of data in the table.. </Text>
            </View>
        </KoroCollapse>
      );  

      const cardHeader = () => (
        <View>
          <Text style={styles.title}>Card</Text>
        </View>
    );
    const cardCode = "<KoroCard header={Header} footer={Footer} style={style}> Content of the body goes here. </KoroCard>"
    const cardFooter = () => (
      <KoroCollapse title='Show code'>
          <View style={[{backgroundColor: 'LightGrey'}]}>
              <Text> {cardCode} </Text>
              <Text> Props: </Text>
              <Text> header: the content of the card's header. </Text>
              <Text> footer: the content of the card's footer. </Text>
              <Text> style: custom style for the card. </Text>
          </View>
      </KoroCollapse>
    );

    return(
        <View>
            <ScrollView>
                <KoroCard header={badgeHeader} footer={badgeFooter}>
                    <View>
                        <KoroBadge value={1} showValue={true} badgeSize={25}>
                            <Text>Badge</Text>
                        </KoroBadge>
                    </View>
                </KoroCard>

                <KoroCard header={iconHeader} footer={iconFooter}>
                    <View>
                        <KoroIcon icon="downArrow"/>
                    </View>
                </KoroCard>

                <KoroCard header={tableHeader} footer={tableFooter}>
                    <View>
                        <KoroTable  borderStyle={{borderWidth: 1}} widthArr={[50,50,50,50]} headStyle={[{ backgroundColor: 'gray'}]} tableData={tableData} tableHead={tableTitle} />
                    </View>
                </KoroCard>

                <KoroCard header={cardHeader} footer={cardFooter}>
                    <View>
                        <Text>This whole thing is a card.</Text>
                    </View>
                </KoroCard>
            </ScrollView>
        </View>
    )
}

GlobalComponentsScreen.navigationOptions = {
    headerTitle: 'Global Components'
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    }
})