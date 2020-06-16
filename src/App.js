/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {ViewContainer} from './components/view-container';
import {Button} from './components/button';
import {Label} from './components/label';
import {Product} from './components/product';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <ViewContainer>
              <Button
                text="Click"
                onPress={() => Alert.alert('Click on button')}
                style={{width: 300, marginBottom: 20}}
              />
              <Label text="Label" style={{width: 200, marginBottom: 20}} />
              <Product />
              <Product
                title="Nike Air Max 95"
                description="Shoe"
                price="$180"
                image="https://static.nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/5efc19ea-b3b5-428b-9558-bf4ca3f6d05f/air-max-95-korea-shoe-ZKTfcL.jpg"
                onPress={() => Alert.alert('on press!')}
              />
            </ViewContainer>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
