import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
};

const CustomAddTaskBtn = ({ title, onPress }: Props) => {
    return (
        <Pressable onPress={onPress} style={styles.pressable}>
            <View style={styles.button}>
                <Text style={styles.addBtn}>+</Text>
            </View>
        </Pressable>
    );
};

export default CustomAddTaskBtn;

const styles = StyleSheet.create({
    pressable: {
        position: "absolute",
        right: 148,
        top: 600,
        zIndex: 10,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        width: 68,
        height: 68, 
        borderRadius: 34,
        backgroundColor: "#4580fa",
    },
    addBtn: {
        fontSize: 50,
        color: "white",
        textAlign: "center",
        lineHeight: 68,
    },
});
