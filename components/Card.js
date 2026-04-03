
import { View, Text, Image ,StyleSheet } from "react-native";

export default function Card({imageUrl, title, subTitle}){
    return(
        <View style={styles.card}>
            <Image 
                source={{uri: imageUrl}}
                style={styles.cardImg}
            />
            <Text style={styles.cardText}>{title}</Text>
            <Text style={styles.cardSubtext}>{subTitle}</Text>
        </View>
    )
}
const styles = StyleSheet.create({ 
    card: {
        backgroundColor: '#1a0a2e',
        width: 140,
        height: '100%',
        margin: 15,
        borderRadius: 8,
        overflow: 'hidden',
    },
    cardImg: {
        width: '100%',
        height: 130,
    },
    cardText: {
        color: 'white',
        padding: 6,
        fontSize: 16,
        fontWeight: '700',
    },
    cardSubtext: {
        color: 'white',
        paddingLeft: 10,
        fontSize: 12,
    }
})

