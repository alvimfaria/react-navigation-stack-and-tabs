import React from 'react';
import { View, Text, Button} from 'react-native';

//Importar o props de navegação.
export default function Home({navigation}){
    return(
        <View>
            <Text>Home</Text>

            {/* Navegar para tela sobre */}
            <Button
                title="Sobre"
                onPress={ () => navigation.navigate('Sobre', {nome: 'Marcos'})}
            />

            {/* Ao clicar vai mudar o título da página */}
            {/* <Button
                title="Muda Título"
                onPress={ () => navigation.setOptions({ title: 'INICIO'})}
            /> */}
        </View>
    )
}