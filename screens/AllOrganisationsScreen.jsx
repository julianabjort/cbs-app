import React from "react";
import { FlatList, View } from "react-native";
import OrganisationCard from "../components/OrganisationCard";
import { ORGANISATIONS } from "../data";


function AllOrganisationsScreen({ navigation }){
  return (
    <View>
      <FlatList
      data={ORGANISATIONS}
      keyExtractor={event => event.id.toString()}
      renderItem={({ item }) => (<OrganisationCard
      image={item.image}
      title={item.title}
      text={item.text}
      onPress={() => navigation.navigate('View Organisation Discover', { event: item })}/>)} />
    </View>
  )
}

export default AllOrganisationsScreen;