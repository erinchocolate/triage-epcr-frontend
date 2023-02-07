import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



export default function GooglePlacesInput() {
  return (
    <Text>
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyCNmGOd9IOd65dOmqG9AX85z-Yart19YDE',
          language: 'en',
          components: 'country:nz'
        }}
      />
    </Text>
  );
}




