import { FlatList, SectionList, View } from 'react-native';
import EventCard from '../components/EventCard';
import OrganisationCard from '../components/OrganisationCard';
import { EVENTS, ORGANISATIONS } from '../data';


const HomeScreen = ({ navigation }) => {
// const chatroom = new Chatroom(2, [], '');
    
    return (
        <View>

        {/* <FlatList 
        data={EVENTS}
        keyExtractor={event => event.id.toString()}
        renderItem={({ item }) => (<EventCard
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
            date={item.date}
            location={item.location}
            onPress={() => navigation.navigate('View Event', { event: item })}
            />)}/> */}

        <SectionList
        sections={[
            {data: ORGANISATIONS, 
            keyExtractor: event => event.id.toString(),
            renderItem: ({ item }) => (<OrganisationCard
                image={item.image}
                title={item.title}
                text={item.text}
                onPress={() => navigation.navigate('View Organisation Home', { event: item })}/>)
            },
            {data: EVENTS, 
                keyExtractor: event => event.id.toString(),
                renderItem: ({ item }) => (<EventCard
                    image={item.image}
                    title={item.title}
                    subTitle={item.subTitle}
                    date={item.date}
                    location={item.location}
                    onPress={() => navigation.navigate('View Event Home', { event: item })}/>)
                },
        ]}/>
        </View>
);}


export default HomeScreen;