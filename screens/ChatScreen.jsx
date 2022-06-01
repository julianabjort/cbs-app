import { FlatList, View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Pressable, Modal, Alert, SectionList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'

import { addChatroom, deleteChatroom, fetchChatrooms } from '../store/actions/ChatActions';
import { fetchUserInfo } from '../store/actions/UserActions';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import MainButton from '../components/MainButton';
import Title from '../components/Title';
import colors from '../config/colors';
import Input from '../components/Input';

const messages = [
    {
        id: 1,
        title: 'CBS Surf',
        description: 'Thank you for your message...',
        image: require('../assets/surf.png'),
        date: '9:43'
    },
    {
        id: 2,
        title: 'CBS Feminist Society',
        description: 'Thank you for your message...',
        image: require('../assets/feminist.jpeg'),
        date: '19 May'
    },
    {
        id: 3,
        title: 'CBS Students',
        description: 'Thank you for your message...',
        image: require('../assets/logo.png'),
        date: '10 May'
    },
    {
        id: 4,
        title: 'CBS Golf',
        description: 'Thank you for your message...',
        image: require('../assets/golf.png'),
        date: '21 Apr'
    },
    {
        id: 5,
        title: 'CBS Poker',
        description: 'Thank you for your message...',
        image: require('../assets/poker.png'),
        date: '1 jan'
    },
]

export default function ChatScreen(props) {
const [modalVisible, setModalVisible] = useState(false);
const username = useSelector(state => state.user.username);
const [text, onChangeText] = useState('');
const dispatch = useDispatch();
const chatrooms = useSelector(state => state.chat.chatrooms);

const id = useSelector(state => state.user.localId);
const users = useSelector(state => state.user.users);
const user = users.filter(user => user.id == id)[0]

    useEffect(() => {
        dispatch(fetchChatrooms())
    }, []);

    useEffect(() => {
        dispatch(fetchUserInfo())
    }, []);

    // const renderItem = ({ item }) => (
    //     <TouchableOpacity>
    //         <Text>{item.title}</Text>
    //         <Text>Thank you for your message...</Text>
    //         <Button title="Delete this chatroom" onPress={() => dispatch(deleteChatroom(item.id))} />
    //     </TouchableOpacity>
    // );

   return (
    <View>

        <View style={styles.top}>
        
        { user !== undefined ? 
          
                <Title>{user.username}</Title>
                :
                <Title>Chat</Title>
            }
        <Ionicons name="create-outline" size={24} color={colors.primary} onPress={() => setModalVisible(true)}/>
        </View>

        <View style={styles.notifications}>
            <Text style={styles.text}>Enable notifications to stay in the loop</Text>
            <Ionicons name="md-notifications" size={24} color="white" />
        </View>
        <SectionList
        sections={[
            {data:chatrooms,
            renderItem: ({ item }) => (
            <ListItem
                title={item.title}
                description="Thank you for your message..."
                image={require('../assets/logo.png')}
                date="9:43"
                onPress={() => console.log("Message selected", item)}
                renderRightActions={() => (
                    <View
                        style={{ backgroundColor: colors.red,
                        width: 70, justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons 
                        name="trash" 
                        size={24} 
                        color="white" 
                        onPress={() => dispatch(deleteChatroom(item.id))}/>
                    </View>
                )}
            />)
            },
            {data:messages,
                renderItem: ({ item }) => (
                <ListItem
                title={item.title}
                description={item.description}
                image={item.image}
                date={item.date}
                    onPress={() => console.log("Message selected", item)}
                    renderRightActions={() => (
                        <View
                            style={{ backgroundColor: colors.red,
                            width: 70, justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons 
                            name="trash" 
                            size={24} 
                            color="white" 
                            onPress={() => dispatch(deleteChatroom(item.id))}/>
                        </View>
                    )}
                />)
                },
        ]}
        />
        {/* <FlatList 
        data={chatrooms}
        renderItem={({ item }) => (<ListItem 
            title={item.title}
            description="Thank you for your message..."
            image={require('../assets/logo.png')}
            date="9:43"
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
                <View
                style={{ backgroundColor: colors.red,
                width: 70, justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons 
                    name="trash" 
                    size={24} 
                    color="white" 
                    onPress={() => dispatch(deleteChatroom(item.id))}/>
                </View>
            )}
        />)}
        // ItemSeparatorComponent={ListItemSeparator}
        />
    
        <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (<ListItem 
            title={item.title}
            description={item.description}
            image={item.image}
            date={item.date}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
                <View
                style={{ backgroundColor: colors.red,
                width: 70, justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name="trash" size={24} color="white" />
                </View>
            )}
            
            />)}
        // ItemSeparatorComponent={ListItemSeparator}
        /> */}



        <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>

                    <View style={styles.inputContainer}>
                        <Title>Add Chatroom</Title>
                        
                        <Input placeholder="Chatroom name"
                            onChangeText={onChangeText}
                            value={text}
                            keyExtractor={item => item.name}
                            autoCorrect={false}
                            icon="search"
                            />
                    
                    <View style={styles.modalButtons}>
                        <MainButton 
                            style={styles.addButton}
                            title='Add' 
                            onPress={() => {dispatch(addChatroom(text)); setModalVisible(!modalVisible); onChangeText(''); } } />
                        
                        <MainButton
                            style={styles.closeModalButton}
                            title="Cancel" 
                            color="primary"
                            onPress={() => setModalVisible(!modalVisible)}
                        />
                        </View>

                    </View>
                </View>
            </View>
        </Modal>

            
        </View>
    </View>
    );         
    }

const styles = StyleSheet.create({
    top: {
        flexDirection:'row',
        paddingHorizontal: 20,
        paddingVertical: 12,
        justifyContent: 'space-between',
        backgroundColor: colors.white
    },
    title: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        width: '100%',
        backgroundColor: 'white'
    },
    notifications: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.secondary
    },
    text: {
        color: 'white',
        fontWeight: '600',
        marginRight: 70
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        width: '90%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        
        },
    modalButtons:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 10
    },
    addButton: {
        width: 130
    },
    closeModalButton: {
        width: 130,
        backgroundColor: colors.white,
        borderWidth: 1.5,
        borderColor: colors.primary
    },
    inputContainer:{
        width: '80%',
        marginTop: 20
    },
    
})
