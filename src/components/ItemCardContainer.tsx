import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ItemCardContainer = ({imageSrc, title, location}: any) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
      <Image
        source={imageSrc}
        className="w-full h-40 rounded-md objet-cover "
      />
      <Text className="text-customBlue text-[18px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : `${title}`}
      </Text>

      <Text>{location}</Text>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
