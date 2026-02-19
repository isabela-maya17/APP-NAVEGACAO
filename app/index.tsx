import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function Home() {
const router = useRouter();
return (
<View style={styles.container}>
<Text style={styles.title}>Bem-vindo ao React Native!</Text>
<Text style={styles.subtitle}>
Esta é a tela inicial do nosso app
</Text>
<TouchableOpacity
style={styles.button}
onPress={() => router.push('/detalhes')}
>
<Text style={styles.buttonText}>Ir para Detalhes</Text>
</TouchableOpacity>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#f5f5f5',
padding: 20,
},
title: {
fontSize: 28,
fontWeight: 'bold',
color: '#333',
marginBottom: 10,
textAlign: 'center',
},
subtitle: {
fontSize: 16,
color: '#666',
marginBottom: 30,
textAlign: 'center',

},
button: {
backgroundColor: '#007AFF',
paddingVertical: 12,
paddingHorizontal: 30,
borderRadius: 8,
},
buttonText: {
color: '#fff',
fontSize: 16,
fontWeight: '600',
},
});