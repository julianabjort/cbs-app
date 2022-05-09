import { View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addChatroom, deleteChatroom, fetchChatrooms } from '../store/actions/ChatActions';
import { useEffect, useState } from 'react'

export default function ChatScreen() {
    const [text, onChangeText] = useState('');
    const dispatch = useDispatch();
    const chatrooms = useSelector(state => state.chat.chatrooms);

    useEffect(() => {
        dispatch(fetchChatrooms())
    }, []);

    console.log("chatrooms", chatrooms);

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <Text>{item.title}</Text>
            <Button title="Delete this chatroom" onPress={() => dispatch(deleteChatroom(item.id))} />
        </TouchableOpacity>
    );

    return (
        <View>
            
            <TextInput placeholder="Chatroom name"
                
                onChangeText={onChangeText}
                value={text}
                keyExtractor={item => item.title} />

            <Button title='Add chatroom' onPress={() => dispatch(addChatroom(text))} />

            <FlatList data={chatrooms} renderItem={renderItem} />
        </View>

       
    );
}

