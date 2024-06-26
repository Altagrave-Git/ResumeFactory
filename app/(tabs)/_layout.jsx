import { Tabs } from 'expo-router';

import { useTheme } from 'react-native-paper';
import { HeaderBackButton } from '../../components';

import { Icon } from '../../components/icons/icon';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.navbar,
          borderColor: theme.colors.navbar
        },
        tabBarActiveTintColor: theme.colors.onNavbarVariant,
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => {
            const source = focused ? "profile" : "profileOutline";
            return <Icon source={source} style={{fill: color, height: 30, width: 30}} />;
          },
          headerLeft: () => <HeaderBackButton path="/" theme={theme} />,
        }}
      />
      <Tabs.Screen
        name="templates"
        options={{
          title: 'Templates',
          tabBarIcon: ({ color, focused }) => {
            const source = focused ? "templates" : "templatesOutline";
            return <Icon source={source} style={{fill: color, height: 28, width: 30}} />;
          },
          headerLeft: () => <HeaderBackButton path="/" theme={theme} />,
        }}
      />
    </Tabs>
  );
}