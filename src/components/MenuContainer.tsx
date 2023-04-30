import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const MenuContainer = ({title, imageSrc, type, setType}: any) => {

  const handlePress = () => {
    setType(title.toLowerCase())
  }

  return (
    <TouchableOpacity className="items-center space-y-2" onPress={handlePress}>
      <View
        className={`shadow-sm rounded-full p-2 items-center justify-between ${
          type === title.toLowerCase() ? 'bg-gray-200' : ''
        }`}>
        <Image source={imageSrc} className="w-24 h-24 object-contain" />
      </View>
      <Text className="text-customBlue text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
