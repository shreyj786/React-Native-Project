import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Attractions, Avatar, Hotels, Restaurants} from '../assets';
import MenuContainer from '../components/MenuContainer';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import ItemCardContainer from '../components/ItemCardContainer';

const DiscoverScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, []);

  const [type, setType] = useState('restaurant');

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Discover section */}
      <View className="flex-row items-center justify-between px-8 ">
        <View>
          <Text className="text-[36px] text-customGreen font-bold">
            Discover
          </Text>
          <Text className="text-customGray100 text-[32px]">
            the beauty today
          </Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-between shadow-lg">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      {/* Search Bar */}
      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
        />
      </View>

      {/* Menu Container */}
      <ScrollView>
          <View className=" flex-row items-center justify-between px-8 mt-8">
            <MenuContainer
              key={"hotels"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />

            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />

            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
              </TouchableOpacity>
            </View> 

             <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
             <ItemCardContainer
                imageSrc={Hotels}
                title="Something is going on and we can find what it is
            "
                location="India"
              />
              <ItemCardContainer
                imageSrc={Hotels}
                title="Amazing job"
                location="Ghana"
              />
              <ItemCardContainer imageSrc={Hotels} title="" location="" />
            </View>
          </View>
        </ScrollView>
     
    </SafeAreaView>
  );
};

export default DiscoverScreen;


// import {
//   View,
//   Text,
//   SafeAreaView,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import React, { useEffect, useLayoutEffect, useState } from "react";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { useNavigation } from "@react-navigation/native";
// import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";
// import MenuContainer from "../components/MenuContainer";
// import ItemCardContainer from "../components/ItemCardContainer";


// const DiscoverScreen = () => {
//   const navigation = useNavigation();

//   const [type, setType] = useState("restaurants");


//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: false,
//     });
//   }, []);

//   return (
//     <SafeAreaView className="flex-1 bg-white relative">
//       <View className="flex-row items-center justify-between px-8">
//         {/* <View>
//           <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
//           <Text className="text-[#527283] text-[36px]">the beauty today</Text>
//         </View> */}

//         {/* <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
//           <Image
//             source={Avatar}
//             className="w-full h-full rounded-md object-cover"
//           />
//         </View> */}
//       </View>

//       <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
//         {/* <GooglePlacesAutocomplete
//           // GooglePlacesDetailsQuery={{ fields: "geometry" }}
//           placeholder="Search"
//           fetchDetails={true}
//           onPress={(data, details = null) => {
//             // 'details' is provided when fetchDetails = true
//           }}
//           query={{
//             key: "YOUR_API_KEY",
//             language: "en",
//           }}
//         /> */}
//       </View>

//       {/* Menu Container */}
      
//       (
//         <ScrollView>
//           <View className=" flex-row items-center justify-between px-8 mt-8">
//             <MenuContainer
//               key={"hotels"}
//               title="Hotels"
//               imageSrc={Hotels}
//               type={type}
//               setType={setType}
//             />

//             <MenuContainer
//               key={"attractions"}
//               title="Attractions"
//               imageSrc={Attractions}
//               type={type}
//               setType={setType}
//             />

//             <MenuContainer
//               key={"restaurants"}
//               title="Restaurants"
//               imageSrc={Restaurants}
//               type={type}
//               setType={setType}
//             />
//           </View>

//           <View>
//             {/* <View className="flex-row items-center justify-between px-4 mt-8">
//               <Text className="text-[#2C7379] text-[28px] font-bold">
//                 Top Tips
//               </Text>
//               <TouchableOpacity className="flex-row items-center justify-center space-x-2">
//                 <Text className="text-[#A0C4C7] text-[20px] font-bold">
//                   Explore
//                 </Text>
//               </TouchableOpacity>
//             </View> */}

//             {/* <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
//             <ItemCardContainer
                      
//                       imageSrc={
//                         data?.photo?.images?.medium?.url
//                           ? data?.photo?.images?.medium?.url
//                           : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
//                       }
//                       title={data?.name}
//                       location={data?.location_string}
//                       data={data}
//                     />
//                     <ItemCardContainer
//                       key={i}
//                       imageSrc={
//                         data?.photo?.images?.medium?.url
//                           ? data?.photo?.images?.medium?.url
//                           : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
//                       }
//                       title={data?.name}
//                       location={data?.location_string}
//                       data={data}
//                     />
//                     <ItemCardContainer
//                       key={i}
//                       imageSrc={
//                         data?.photo?.images?.medium?.url
//                           ? data?.photo?.images?.medium?.url
//                           : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
//                       }
//                       title={data?.name}
//                       location={data?.location_string}
//                       data={data}
//                     />
//             </View> */}
//           </View>
//         </ScrollView>
     
//       )
//     </SafeAreaView>
//   );
// };

// export default DiscoverScreen;