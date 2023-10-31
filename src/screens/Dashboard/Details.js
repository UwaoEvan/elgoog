import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { useSelector } from "react-redux";

import { FONTS } from "../../constants";

export default function Details ({ route }){
    const { characters } = useSelector(state => state.characters);
    const { characterId } = route?.params;
    const selectedCharacter = characters.find(character => character.id == characterId);
   
    const renderColor = (status) => {
        switch(status){
            case "unknown":
                return "#000"
            case "Dead":
                return "red"
            case "Alive":
                return "green"
            default:
                return null
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Image
                style={styles.image}
                resizeMode="stretch"
                source={{ uri: selectedCharacter.image }}
            />
            <View style={styles.footer}>
                <Text style={FONTS.subTitle}>{`Species: ${selectedCharacter.species}`}</Text>
                <Text style={FONTS.subTitle}>{`Gender: ${selectedCharacter.gender}`}</Text>
                <Text style={FONTS.subTitle}>Status: <Text style={{ color: renderColor(selectedCharacter.status)}}>{selectedCharacter.status}</Text></Text>
                <Text style={FONTS.subTitle}>{`Episodes: ${selectedCharacter.episode.length}`}</Text>
            </View>
        </View>
    )
}

const { height, width } = Dimensions.get("screen")
const styles = StyleSheet.create({
    image: {
        height: height / 2,
        width: width,
        backgroundColor: "#cccc"
    },
    footer: {
        height: height / 5,
        justifyContent: "space-around",
        paddingHorizontal: 20
    }
})