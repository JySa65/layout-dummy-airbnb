import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./assets/img/bg.jpg')}
              style={styles.banner}
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.title}>Que hacer en Paris</Text>
            <ScrollView horizontal>
              <View>
                <Image
                  source={require('./assets/img/actividad1.jpg')}
                  style={styles.city}
                />
              </View>
              <View>
                <Image
                  source={require('./assets/img/actividad2.jpg')}
                  style={styles.city}
                />
              </View>
              <View>
                <Image
                  source={require('./assets/img/actividad3.jpg')}
                  style={styles.city}
                />
              </View>
              <View>
                <Image
                  source={require('./assets/img/actividad4.jpg')}
                  style={styles.city}
                />
              </View>
              <View>
                <Image
                  source={require('./assets/img/actividad5.jpg')}
                  style={styles.city}
                />
              </View>
            </ScrollView>
            <Text style={styles.title}>Los Mejores alojamiento</Text>
            <View>
              <View>
                <Image
                  source={require('./assets/img/mejores1.jpg')}
                  style={styles.moreEnd}
                />
              </View>
              <View>
                <Image
                  source={require('./assets/img/mejores2.jpg')}
                  style={styles.moreEnd}
                />
              </View>
              <View>
                <Image
                  source={require('./assets/img/mejores3.jpg')}
                  style={styles.moreEnd}
                />
              </View>
            </View>
            <Text style={styles.title}>Los Mejores Hospedajes</Text>
            <View style={styles.list}>
              <View style={styles.listItem}>
                <Image
                  source={require('./assets/img/hospedaje1.jpg')}
                  style={styles.moreEnd}
                />
              </View>
              <View style={styles.listItem}>
                <Image
                  source={require('./assets/img/hospedaje2.jpg')}
                  style={styles.moreEnd}
                />
              </View>
              <View style={styles.listItem}>
                <Image
                  source={require('./assets/img/hospedaje3.jpg')}
                  style={styles.moreEnd}
                />
              </View>
              <View style={styles.listItem}>
                <Image
                  source={require('./assets/img/hospedaje4.jpg')}
                  style={styles.moreEnd}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  container: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  city: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  moreEnd: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listItem: {
    flexBasis: '49%',
  },
});

export default App;
