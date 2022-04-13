import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NativeIconicIcon from '../components/NativeIconicIcon';

import CountingScreen from '../screens/CountingScreen';

import DetailsStack from './DetailsStack';

const Tab = createBottomTabNavigator();

function ProjectTabs(){
 
  return(
    <Tab.Navigator  
      screenOptions={{headerShown:false}}
      >
      <Tab.Screen 
        name="Count" 
        component={CountingScreen} 
        options={{
          tabBarIcon:({ color, size})=> <NativeIconicIcon name="checkmark-circle-outline" color={color} size={size} />
        }}
        />
      <Tab.Screen 
        name="Details Stack" 
        component={DetailsStack} 
        options={{
          tabBarLabel:'Data',
          tabBarIcon:({ color, size})=> <NativeIconicIcon name="stats-chart" color={color} size={size} />
        }}
        />
    </Tab.Navigator>

  )
}

export default ProjectTabs;