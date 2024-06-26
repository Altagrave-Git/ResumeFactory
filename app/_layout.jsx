import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import * as NavigationBar from 'expo-navigation-bar';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { Pressable, useColorScheme } from 'react-native';
import { PaperProvider, ActivityIndicator } from 'react-native-paper';

import { store, persistor } from '../redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { CombinedDefaultTheme, CombinedDarkTheme } from '../configs';
import { FONT } from '../constants';
import { HeaderBackButton } from '../components';
import { Icon } from '../components/icons/icon';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme;
  NavigationBar.setBackgroundColorAsync("#000", true);
  NavigationBar.setButtonStyleAsync("light");

  const router = useRouter();

  SplashScreen.hideAsync();

  return (
    <PaperProvider theme={colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<ActivityIndicator animating={true} color={theme.colors.error} size='large' />}>
          <Stack
            screenOptions={{
              contentStyle: { backgroundColor: theme.colors.inverseOnSurface },
              headerStyle: { backgroundColor: theme.colors.navbar},
              headerTintColor: theme.colors.onNavbarVariant,
              headerTitleStyle: { color: theme.colors.onNavbar, fontFamily: FONT.SairaB, fontSize: 22},
              animation: "fade_from_bottom",
            }}
          >
            <Stack.Screen name="index" options={{title: "ResumeIO", headerShown: false, contentStyle: {backgroundColor: "#D0BCFF"}}} />
            <Stack.Screen name="settings" options={{title: "Settings"}} />
            <Stack.Screen 
              name="(tabs)" 
              headerLeft={() => <HeaderBackButton path="/" theme={theme} />}
              options={({ route }) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? 'default';
                let title = routeName[0].toUpperCase() + routeName.slice(1);
                headerRight = () => (
                  <Pressable  onPress={() => router.navigate('/settings')}>
                    <Icon source="settings" style={{ height: 22, width: 22, fill: theme.colors.outline }} />
                  </Pressable>
                );
                return { title, headerRight };
              }}
            />
          </Stack>
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
}