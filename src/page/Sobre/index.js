import React from 'react';
import { View, Text} from 'react-native';

export default function Sobre({ route }){
    return(
        <View>
            {/* Recuperar os dados de navegação
            e garantir que caso venha nulo não ocorra algum erro */}
            <Text>Meu nome é: {route.params?.nome}</Text>
        </View>
    )
}