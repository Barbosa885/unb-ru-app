import Header from "../../components/Header";
import OnBoarding from "../../pages/OnBoarding";
import useFetchMenu from "../../hooks/useFetchMenu";
import { useDispatch, useSelector } from "react-redux";
import BottomTabNavigator from "../BottomTabNavigator";
import { setMenu } from "../../redux/features/menuSlice";
import { GeneralContext } from "../../context/GeneralContext";
import React, { useContext, useEffect, useState } from "react";
import SettingsStackNavigator from "../SettingsStackNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator(): React.ReactElement | null {
    const { isFirstLaunch } = useContext(GeneralContext);
    const fetchMenu = useFetchMenu();
    const meal = useSelector((state) => state.meal.value);
    const dispatch = useDispatch();
    const [menuReady, setMenuReady] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            fetchMenu()
                .then((res) => {
                    dispatch(setMenu(res));
                })
                .finally(() => setMenuReady(true));
        };
        fetchData();
    }, []);

    if (!menuReady) {
        return null;
    }

    return (
        <Stack.Navigator>
            {isFirstLaunch && (
                <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                    options={{ headerShown: false }}
                />
            )}
            <Stack.Screen
                name="Menu"
                options={{
                    title: "Cardápio",
                    header: (props) => <Header {...props} />,
                }}
            >
                {() => (meal ? <BottomTabNavigator mealTime={meal} /> : null)}
            </Stack.Screen>
            <Stack.Screen
                name="Settings"
                component={SettingsStackNavigator}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
