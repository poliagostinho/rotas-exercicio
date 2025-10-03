import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { router } from 'expo-router';

export default function Carrinho(){
    function pagamento(){
        router.navigate('/(tabs)/pagamento/89764')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Carrinho:</Text>
            <Image source={require("../../../assets/images/Cd2.png")}/>
            <Text style={styles.subtitle}>CD Número 1</Text>
            <Text style={styles.desconto}>R$150,90</Text>
            <Text style={styles.preco}>R$120,35</Text>
            <TouchableOpacity style={styles.button} onPress={pagamento}>
                 <Text style={styles.titleButton}>Pagar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#d8f3dc',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32
    },
    title:{
        fontSize: 20,
        fontWeight:'bold',
        color: '#ff4800',
        marginTop: 25
    },
    subtitle:{
        fontSize: 16,
        color: '#ff4800'
    },
    desconto:{
        fontSize: 18,
        fontWeight: 'heavy',
        textDecorationLine: 'line-through',
        marginTop: -20,
        color: '#ff4800'
    },
    preco:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ff4800',
        marginTop: -40
    },
    titleButton:{
        fontSize: 22,
        fontWeight:'bold',
        textAlign: 'center',
        color: '#ff4800'
    },
    button:{
        backgroundColor: '#52b788',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 10,
    }
})
