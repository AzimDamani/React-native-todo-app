import React from "react";
import { TextInput } from "react-native";

type Props = {
    value: string,
    onChangeText: (text: string) => void;
    placeholder?: string;
}
const CustomInputText = ({value, onChangeText, placeholder}: Props) => {
    return(
        <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder}/>
    )
}

export default CustomInputText;