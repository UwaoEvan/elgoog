import { useState, useEffect } from "react";
import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    Image 
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Character from "../components/Character";
import { FONTS } from "../../constants";

export default function Dashboard (){
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const { characters } = useSelector(state => state.characters)
    const dispatch = useDispatch();
    const results = characters.filter(character => character.name.includes(search))
    
    useEffect(() => {
        fetchAllCharacters()
    },[])

    const fetchAllCharacters = () => {
        setIsLoading(true)
        fetch("https://rickandmortyapi.com/api/character")
        .then(res => {
            if(res.ok){
                return res.json()
            }
            throw res
        })
        .then(data => {
            dispatch({ type: "FETCHCHARACTERS", payload: data.results })
            setIsLoading(false)
        })
        .catch(error => {
            setIsLoading(false)
            error.json(body => {
                console.log(body)
            })
        })
    }
   
    const Empty = () => <Text style={[FONTS.caption, { textAlign: "center"}]}>Oooops! Not found</Text>
    return (
        <View>
            <TextInput
                placeholder="Filter by name"
                style={styles.input}
                value={search}
                onChangeText={text => setSearch(text)}
            />
            <FlatList
                onRefresh={fetchAllCharacters}
                refreshing={isLoading}
                data={search ? results : characters}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Character properties={item}/>
                )}
                contentContainerStyle={{ paddingBottom: 100 }}
                ListEmptyComponent={<Empty/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        marginVertical: 10,
        fontFamily: "Montserrat-Medium"
    },
    notFound: {
        height: 100,
        width: 100,
        backgroundColor: "red"
    },
    // notfoundImg: {
    //     width: "50%",
    //     height: "50%"
    // }
})