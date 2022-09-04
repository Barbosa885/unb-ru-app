import * as Font from "expo-font";
import { View } from "react-native";
import "react-native-url-polyfill/auto";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import * as SplashScreen from "expo-splash-screen";
import useFetchMenu from "./src/hooks/useFetchMenu";
import { checkIfFirstLaunch } from "./src/utils/storage";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import GeneralContextProvider from "./src/context/GeneralContext";
import RootStackNavigator from "./src/navigators/RootStackNavigator";
import * as serviceWorkerRegistration from "./src/serviceWorkerRegistration";
import { Lexend_500Medium, Lexend_600SemiBold, Lexend_700Bold } from "@expo-google-fonts/lexend";
import { getApropriateDate, getMealByTime } from "./src/utils/date";

SplashScreen.preventAutoHideAsync();

export default function App(): React.ReactElement | null {
    const [menu, setMenu] = useState<WeekMenu>([]);
    const [dayIndex, setDayIndex] = useState("");
    const [meal, setMeal] = useState<"Desjejum" | "Almoço" | "Jantar" | undefined>();
    const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false);
    const [appIsReady, setAppIsReady] = useState(false);
    const [isFirstLaunch, setIsFirstLaunch] = useState(false);
    const fetchMenu = useFetchMenu();

    useEffect(() => {
        setDayIndex(getApropriateDate());
        setMeal(getMealByTime());
        Promise.all([
            Font.loadAsync({
                IcoMoon: require("./assets/icomoon/fonts/icomoon.ttf"),
                Lexend_500Medium,
                Lexend_700Bold,
                Lexend_600SemiBold,
            }),
            checkIfFirstLaunch(),
            fetchMenu(),
        ])
            .then((values) => {
                setIsFirstLaunch(values[1]);
                setMenu(values[2]);
            })
            .finally(() => setAppIsReady(true));
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <SafeAreaProvider>
                <NativeBaseProvider>
                    <NavigationContainer>
                        <StatusBar style="auto" />
                        <GeneralContextProvider
                            value={{
                                menu,
                                setMenu,
                                dayIndex,
                                meal,
                                setDayIndex,
                                isCalendarModalOpen,
                                setIsCalendarModalOpen,
                                isFirstLaunch,
                            }}
                        >
                            <RootStackNavigator />
                        </GeneralContextProvider>
                    </NavigationContainer>
                </NativeBaseProvider>
            </SafeAreaProvider>
        </View>
    );
}

serviceWorkerRegistration.register();
