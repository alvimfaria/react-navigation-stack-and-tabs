import React from 'react';
import { View, Text, Button} from 'react-native';

//Importar o props de navegação.
export default function Perfil({navigation}){
    return(
        <View>
            <Text>Perfil</Text>
            <Button
                title="Sobre"
                onPress={ () => navigation.navigate('Home')}
            />
        </View>
    )
}