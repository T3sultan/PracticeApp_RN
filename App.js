import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/HomeScreen/Home';
import Portifolio from './src/screens/PortfolioScreen/Portfolio';
import Network from './src/screens/NetworkScreen/Network';
import Transfer from './src/screens/TransferScreen/Transfer';
import Price from './src/screens/PriceScreen/Price';
import Setting from './src/screens/SettingScreen/Settings';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            backgroundColor: "cyan",
            elevation: 0,
            borderRadius: 10,
            height: 60
          }
        }}

      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: '', headerTransparent: true,
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, color, size }) => (
              <Image style={{ height: 25, width: 25, marginTop: 5 }}
                source={
                  focused
                    ? require('./assets/images/home-inactive.png')
                    : require('./assets/images/home1.png')
                }
              >

              </Image>
            ),
          }}
        >

        </Tab.Screen>
        <Tab.Screen
          name="Portifio"
          component={Portifolio}
          options={{
            title: '', headerTransparent: true,
            tabBarLabel: 'Portifio',
            tabBarIcon: ({ focused, color, size }) => (
              <Image style={{ height: 25, width: 25, marginTop: 5 }}
                source={
                  focused
                    ? require('./assets/images/portifolio.png')
                    : require('./assets/images/portifolio2.png')
                }
              >

              </Image>
            ),
          }}


        >

        </Tab.Screen>
        <Tab.Screen
          name="Transfer"
          component={Transfer}
          options={{
            title: '', headerTransparent: true,
            tabBarLabel: 'Transfer',
            tabBarIcon: ({ focused, color, size }) => (
              <Image style={{ height: 25, width: 25, marginTop: 5 }}
                source={
                  focused
                    ? require('./assets/images/transfer2.png')
                    : require('./assets/images/transfer.png')
                }
              >

              </Image>
            ),
          }}


        >

        </Tab.Screen>
        <Tab.Screen
          name="Price"
          component={Price}
          options={{
            title: '', headerTransparent: true,
            tabBarLabel: 'Price',
            tabBarIcon: ({ focused, color, size }) => (
              <Image style={{ height: 25, width: 25, marginTop: 5 }}
                source={
                  focused
                    ? require('./assets/images/price2.png')
                    : require('./assets/images/price1.png')
                }
              >

              </Image>
            ),
          }}
        >

        </Tab.Screen>
        <Tab.Screen 
        name="Setting" 
        component={Setting} 
        options={{
            title: '', headerTransparent: true,
            tabBarLabel: 'Setting',
            tabBarIcon: ({ focused, color, size }) => (
              <Image style={{ height: 25, width: 25, marginTop: 5 }}
                source={
                  focused
                    ? require('./assets/images/settings.png')
                    : require('./assets/images/settings2.png')
                }
              >

              </Image>
            ),
          }}
        >

        </Tab.Screen>


      </Tab.Navigator>
    </NavigationContainer>
  );
}