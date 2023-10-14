import React from "react";
import { Image, Text, View, ScrollView } from "react-native";
import styles from "./styles";
import { Sizing } from "../../styles";
import { Platform } from "react-native";

const A2HSTutorial = Platform.select({
    ios: () => <A2HSTutorialIOS />,
    android: () => <A2HSTutorialIOS />,
    web: () => <A2HSTutorialIOS />,
});

const A2HSTutorialAndroid = () => {
    const { width } = Sizing.screen;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.step}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>1</Text>
                    <Text> - Pressione o ícone indicado na figura:</Text>
                </View>
                <Image
                    source={require("../../../assets/A2HSTutorial/android/a2hs1.png")}
                    alt="Imagem mostrando o icone"
                    style={{
                        marginTop: 16,
                        width: "100%",
                        ...Platform.select({
                            web: { maxWidth: 500 },
                        }),
                        height: 80,
                        borderRadius: 16,
                    }}
                />
            </View>
            <View style={styles.step}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>2</Text>
                    <Text> - Selecione a opção “Adicionar à tela principal”</Text>
                </View>
                <View style={{ borderRadius: 16 }}>
                    <Image
                        source={require("../../../assets/A2HSTutorial/android/a2hs2.png")}
                        alt="asdf"
                        style={{
                            marginTop: 16,
                            width: "100%",
                            ...Platform.select({
                                web: { maxWidth: 500, maxHeight: 500 * (16 / 9) },
                            }),
                            height: width * (16 / 9),
                            borderRadius: 16,
                        }}
                    />
                </View>
            </View>
            <View style={styles.step}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>3</Text>
                    <Text> - Em seguida em “Adicionar”</Text>
                </View>

                <Image
                    source={require("../../../assets/A2HSTutorial/android/a2hs3.png")}
                    alt="asdf"
                    style={{
                        marginTop: 16,
                        width: "100%",
                        ...Platform.select({
                            web: { maxWidth: 500, maxHeight: 500 * (16 / 9) },
                        }),
                        height: width * (16 / 9),
                        borderRadius: 16,
                    }}
                />
            </View>
        </ScrollView>
    );
};

const A2HSTutorialIOS = () => {
    const { width } = Sizing.screen;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.step}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>1</Text>
                    <Text> - Pressione o ícone indicado na figura:</Text>
                </View>
                <Image
                    source={require("../../../assets/A2HSTutorial/ios/A2HS1.png")}
                    alt="Imagem mostrando o icone"
                    style={{
                        resizeMode: "contain",
                        marginTop: 16,
                        width: "100%",
                        ...Platform.select({
                            web: { maxWidth: 500, maxHeight: 500 * 0.27 },
                        }),
                        height: width * 0.27,
                    }}
                />
            </View>
            <View style={styles.step}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>2</Text>
                    <Text> - Selecione a opção “Adicionar à Tela de início”</Text>
                </View>
                <View style={{ borderRadius: 16 }}>
                    <Image
                        source={require("../../../assets/A2HSTutorial/ios/A2HS2.png")}
                        alt="asdf"
                        style={{
                            resizeMode: "contain",
                            marginTop: 16,
                            width: "100%",
                            ...Platform.select({
                                web: { maxWidth: 500, maxHeight: 500 * 1.2 },
                            }),
                            height: width * 1.2,
                        }}
                    />
                </View>
            </View>
            <View style={styles.step}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>3</Text>
                    <Text> - Em seguida em “Adicionar”</Text>
                </View>

                <Image
                    source={require("../../../assets/A2HSTutorial/ios/A2HS3.png")}
                    alt="asdf"
                    style={{
                        resizeMode: "contain",
                        marginTop: 16,
                        width: "100%",
                        ...Platform.select({
                            web: { maxWidth: 500, maxHeight: 500 * 0.6 },
                        }),
                        height: width * 0.6,
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default A2HSTutorial;
