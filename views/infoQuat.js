import React, { useState, useEffect } from "react";
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';

import logo from "../assets/logo.png"
import homeJson from "../assets/home_1.json";



export default infoQuat = () => {

  const [mode, setMode] = useState("TẮT");
  const [timer, setTimer] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date().getDate());
  
  useEffect(() => {
    let interval =null;

    if (mode === "MỨC 1" || mode === "MỨC 2" || mode === "MỨC 3") {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [mode]);

  useEffect(() => {
    const checkResetTime = () => {
      const now = new Date().getDate();
      if (now !== currentDate) {
        resetTimer();
        setCurrentDate(now);
      }
    };

    const interval = setInterval(checkResetTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentDate]);


  const toggleMode = () => {
    if (mode === "TẮT"){
        setMode("MỨC 1");
    } else if (mode === "MỨC 1") {
      setMode("MỨC 2");
    } else if (mode === "MỨC 2") {
      setMode("MỨC 3");
    } else {
      setMode("TẮT");
    }  
    };
    const resetTimer = () => {
    setTimer(0);
    };

    const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };


  return (
  <TailwindProvider>
      <View className='flex-1 items-center pb-10 pt-10'>
        <Text className='font-bold text-2xl'>Thông tin chi tiết</Text>
        <Image 
          source={logo}
          className="w-[140] h-[70]"
        />    
        <LottieView 
          source={homeJson}
          autoPlay
          loop
          style={{width: 70, height:50}}
        />           
        <Text className='text-xl'>Thời gian sử dụng hôm nay: {formatTime(timer)}</Text>
        <TouchableOpacity onPress={toggleMode} className='py-8 px-16 m-9 bg-bluebg rounded-3xl'>
            <Text className='text-xl text-white'>
            {mode}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={resetTimer} className='py-8 px-16 m-9 bg-bluebg rounded-3xl'>
            <Text className='text-xl text-white'>
                Đặt lại thời gian
            </Text>
        </TouchableOpacity>        
      </View>
    </TailwindProvider>
  );
};
