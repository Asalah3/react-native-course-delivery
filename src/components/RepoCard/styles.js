import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        //marginTop:50,
        //flexDirection:"row",
        //alignItems:"center",
        borderRadius:8,
        borderWidth:1,
        borderColor:"#E7E7E7",
        paddingVertical:14,
        paddingHorizontal:8,
        marginBottom:16,
        shadowColor:"#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.22,
        elevation: 3,
    },
    image:{
        height:80,
        width:80,
        borderRadius:8,
    },
    rightView:{
        marginStart:8,
    },
    title:{
        lineHeight:32,
        fontSize:20,
    },
    desc:{
        fontSize:14,
        lineHeight:24,
    },
    contentContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:16,
    },
    infoCardContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
})