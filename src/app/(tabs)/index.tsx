import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { router } from 'expo-router';

export default function Produtos(){
    function carrinho(){
        router.navigate('/(tabs)/carrinho')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Acompanhe nosso catálogo!</Text>
            <Image source={require("../../../assets/images/Cd1.png")} style={styles.image}/>
            <Text style={styles.subtitle}>CD Número 1</Text>
            <Image source={require("../../../assets/images/Cd2.png")} style={styles.image}/>
            <Text style={styles.subtitle}>Vinil Número 1</Text>
            <Image source={require("../../../assets/images/Vinil2.png")} style={styles.image}/>
            <Text style={styles.subtitle}>Vinil Número 2</Text>
            <TouchableOpacity style={styles.button} onPress={carrinho}>
                <Text style={styles.textButton}>Adicionar Produto</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.back()}>
                <Text>Voltar</Text>
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
        fontSize: 22,
        fontWeight:'bold',
        color: '#ff4800'
    },
    subtitle:{
        fontWeight:'bold',
        color: '#ff4800',
        fontSize: 16,
    },
    textButton:{
        fontWeight:'bold',
        fontSize: 18,
        color: '#ff4800'
    },
    button:{
        backgroundColor: '#52b788',
        paddingVertical: 10,
        paddingHorizontal: 32,
        borderRadius: 10
    },
    image:{
        width: 110,
        height: 110,
    }
})