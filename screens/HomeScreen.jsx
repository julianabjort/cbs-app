import { View } from 'react-native';
import EventCard from '../components/EventCard';

const HomeScreen = ({ navigation }) => {

    return (
    <View>
        <EventCard
            image={require("../assets/yoga.png")}
            title="Yoga and meditation"
            subTitle="CBS Yoga"
            date="Mon, 1.apr 15:00 - 18:00"
            location="Daigas Have, 2000 Frederiksberg"
        />    
        <EventCard
            image={require("../assets/film.png")}
            title="CBS Film presents: Ghost World"
            subTitle="CBS Film"
            date="Mon, 1.apr 15:00 - 18:00"
            location="Husets Biograf, Rådhusstræde 13, 1466 Copenhagen"
        />  
</View>
);}

export default HomeScreen;