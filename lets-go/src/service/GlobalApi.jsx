import axios from "axios";
import config from "../constants/config";

const BASE_URL='https://places.googleapis.com/v1/places:searchText';

const GlobalAPi = {
    headers:{
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': 'AIzaSyDV1bdHApTC4YKhByKja9dM5BV-_Q_B-AU',
        'X-Goog-FieldMask':[
            'places.photo',
            'places.displayName',
            'places.id'
        ]
    }
}

export const GetPlaceDetails=(data)=>axios.post(BASE_URL,data,GlobalAPi);