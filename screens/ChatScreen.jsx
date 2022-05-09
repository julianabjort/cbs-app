import { FlatList, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

const messages = [
    {
        id: 1,
        title: 'Title 1',
        description: 'Description 1',
        image: require('../assets/laufey.jpeg')
    },
    {
        id: 2,
        title: 'Title 2',
        description: 'Description 2',
        image: require('../assets/laufey.jpeg')
    },
]

export default function ChatScreen(props) {
   return (
        <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (<ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
                <View
                style={{ backgroundColor: "red",
                width: 70,
            }}
                ></View>
            )}
            />)}
        ItemSeparatorComponent={ListItemSeparator}
        />
   );         
}

