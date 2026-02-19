import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function Detalhes() {
const router = useRouter();
return (
<View style={styles.container}>
<Text style={styles.title}>Tela de Detalhes</Text>
<Image
source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
style={styles.image}
/>
<Text style={styles.description}>
Aqui você pode adicionar mais informações,
imagens e outros componentes!
</Text>
<TouchableOpacity
style={styles.button}
onPress={() => router.back()}
>
<Text style={styles.buttonText}>← Voltar</Text>
</TouchableOpacity>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#fff',
padding: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
color: '#333',
marginBottom: 20,

},
image: {
width: 100,
height: 100,
marginBottom: 20,
},
description: {
fontSize: 16,
color: '#666',
textAlign: 'center',
marginBottom: 30,
},
button: {
backgroundColor: '#34C759',
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