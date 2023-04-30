import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import {HeroImage} from '../assets';
import {Navigation} from '../utility/Navigation';

const HomeScreen = ({navigation} : any) => {

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, []);

  return (
    <SafeAreaView className="flex-1 relative">
      {/* First Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center ">
          <Text className="text-customBlue text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-customBlack text-3xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-customGray text-[42px] ">
          Enjoy the trip with
        </Text>
        <Text className="text-customBlue text-[30px] font-bold">
          Good Moments
        </Text>
        <Text className="text-customGray text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          repudiandae expedita ea.
        </Text>
      </View>

      {/* Circle Section */}
      <View className="w-[400px] h-[400px] bg-customBlue rounded-full absolute bottom-16 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-8 -left-36"></View>
      {/* Image Container */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />

        <TouchableOpacity
          className="absolute bottom-28 w-24 h-24 border-l-2 border-r-2 border-t-4 border-customBlue rounded-full items-center justify-center"
          onPress={() => navigation.navigate(Navigation.DiscoverScreen)}>
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount="infinite"
            className="w-20 h-20 items-center justify-center rounded-full bg-customBlue
          ">
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
