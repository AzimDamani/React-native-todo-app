import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
    children: React.ReactNode;
}

const CustomText = ({children}: Props) =>(
    <Text style={style.generalText}>{children}</Text>
)

export default CustomText;

const style = StyleSheet.create({
    generalText :{
        color:"black",
        fontSize:30
    }
})