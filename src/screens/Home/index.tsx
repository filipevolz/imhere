import { Text, TextInput, View, TouchableOpacity, Alert, FlatList, Button} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from './styles';
import { useState } from "react";

export function Home(){
    const date = new Date().toLocaleString('pt')
    const [eventName, setEventName] = useState("Nome do evento")
    const [participants, setParticipants] = useState<string[]>([])
    const [participantsName, setParticipantsName] = useState('')

    function handleParticipantAdd(){
        if(participants.includes(participantsName)){
            return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome.")
        }
        
        setParticipants(prevState => [...prevState, participantsName])
        setParticipantsName('')
    }
    
    function handleParticipantRemove(name: string){        
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participants => participants !== name))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])

        console.log(`Você clicou para remove o participante: ${name}`);
    }

    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.eventName}
                onChangeText={setEventName}
                value={eventName}
            />

            <Text style={styles.eventDate}>{date}</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setParticipantsName}
                    value={participantsName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />
        </View>
  )
}