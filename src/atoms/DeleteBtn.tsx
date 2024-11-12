import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
}
const DeleteBtn = ({title, onPress}: Props) => {
    return(
        <Pressable onPress={onPress} style={styles.fullbody}>
            <Text style={{color:"white",fontSize:20, textAlign:"center",fontWeight:500}}>{title}</Text>
        </Pressable>
       
    )
}

export default DeleteBtn;

const styles = StyleSheet.create({
    fullbody:{
       backgroundColor:"#ff2c2c",
       margin:10,
       borderRadius:20,
       padding:10,
       width:"90%"
    }
})