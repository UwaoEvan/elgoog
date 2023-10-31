import { 
    TouchableOpacity,
    Image,
    Text,
    StyleSheet, 
    Dimensions,
    View
} from "react-native";
import { useNavigation } from "@react-navigation/native"
import moment from "moment";

import { FONTS } from "../../constants";


export default function Character ({ properties }){
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate("Details", {
                characterId: properties.id
            })}
        >
            <Image
                style={styles.image}
                source={{ uri: properties.image }}
                resizeMode="cover"
            />
            <View style={styles.footer}>
                <Text style={FONTS.subTitle}>{`Species: ${properties.species}`}</Text>
                <Text style={[FONTS.subTitle, styles.location]}>Location: <Text style={FONTS.subTitle}>{properties.location.name}</Text></Text>
            </View>
            <Text style={[styles.created, FONTS.caption]}>{moment(properties.created).fromNow()}</Text>
        </TouchableOpacity>
    )
}

const { height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    card: {
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#fff",
        overflow: "hidden",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: -1,
        height: 2,
        },
        shadowOpacity: 0.18,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: "center"
    },
    image: {
        height: height / 5,
    },
    location: {
        paddingTop: 5
    },
    created: {
        textAlign: "right",
        paddingRight: 10,
        paddingBottom: 10
    },
    footer: {
        padding: 10,
    }
})