import React from 'react';
import { View, Image, Button, Platform, TouchableOpacity, Text } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from 'react-native-vector-icons';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};

const UploadImage = ({ photo, setPhoto, title }) => {

  const handleChoosePhoto = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access the media library is required!');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (result.cancelled) {
        // If the user cancels the image selection, setPhoto to null
        setPhoto(null);
        return;
      }
  
      if (!result.cancelled) {
        setPhoto(null);
      }

    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  const handleUploadPhoto = async () => {
    if (!photo) {
      alert('Please select a photo first!');
      return;
    }

    const formData = createFormData(photo, { userId: '123' });

    try {
      const response = await fetch(`${SERVER_URL}/api/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log('Upload response:', data);
    } catch (error) {
      console.log('Upload error:', error);
    }
  };

  return (
    <View >
      {photo && (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto} />
        </>
      )}
      <TouchableOpacity className="flex-row items-center mb-4" onPress={handleChoosePhoto}>
        <Feather name="image" size={32} className="mr-2" />
        <Text className="text-lg font-semibold">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadImage;
