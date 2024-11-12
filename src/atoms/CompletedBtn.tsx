import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
    children: string; // children should be a string representing the task's completion status.
}

const CompletedBtn = ({ children }: Props) => {
    return (
        <View style={styles.donebtn}>
            <Text style={styles.text}>
                {children === "Completed" ? "🥳" : "✅"}
            </Text>
        </View>
    );
};

export default CompletedBtn;

const styles = StyleSheet.create({
    donebtn: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    text: {
        fontSize: 20,
        color: "white",
    },
});
