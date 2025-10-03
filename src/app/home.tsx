import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Home(){

    function verCatalogo(){
        router.navigate('/(tabs)')
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Seja bem vindo à loja da T.S!</Text>
            <Text style={styles.subtitle}> Aqui você encontra todos os discos, CDs e vinis do novo álbum da Taylor Swift:</Text>
            <TouchableOpacity style={styles.button} onPress={verCatalogo}>
                <Text style={styles.titleButton}>Loja</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        padding:60
    },
    title:{
        fontSize: 22,
        fontWeight:'bold',
        textAlign: 'center',
        color: '#ff4800'
    },
    subtitle:{
        fontSize: 16,
        textAlign: 'center',
        color: '#ff4800'
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