import React, { useState, useEffect } from "react";
import axios from 'axios';
import { View, Text, TextInput,Image,TouchableOpacity} from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { useNavigation } from '@react-navigation/native';

import logo from "../assets/logo.png"
import homeJson from "../assets/home_1.json";



export default infoDenTran = () => {

  // const [mode, setMode] = useState("TẮT");
  // const [timer, setTimer] = useState(0);
  // const [currentDate, setCurrentDate] = useState(new Date().getDate());
  const [mode, setMode] = useState("TẮT");
  const [timer, setTimer] = useState(0);
  const [prevMode, setPrevMode] = useState("TẮT"); // Thêm biến trạng thái lưu giữ giá trị trước đó
  const [currentDate, setCurrentDate] = useState(new Date().getDate());
  const [sensorValue, setSensorValue] = useState(null); // Thêm state để lưu giá trị từ cambien1
  const [lightValue, setLightValue] = useState(null); // Thêm state để lưu giá trị từ cambien2
  const [humiValue, setHumiValue] = useState(null); // Thêm state để lưu giá trị từ cambien
  const username = "thanhliemtala";
  const key = "aio_fBbi43NBxSOaZgmW3R2ROCkgbHsA";
  useEffect(() => {
    let interval =null;

    if (mode === "BẬT") {
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

  const sendDataToAdafruit = async (value) => {
    try {
      const response = await axios.post(
        'https://io.adafruit.com/api/v2/thanhliemtala/feeds/button1/data',
        {
          value: value,
        },
        {
          headers: {
            'X-AIO-Key': key,
            'Content-Type': 'application/json',
          },
        }
      );

      // Xử lý dữ liệu nhận được từ Adafruit
      console.log('Dữ liệu từ Adafruit:', response.data);
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu tới Adafruit:', error);
    }
  };

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://io.adafruit.com/api/v2/thanhliemtala/feeds/button1',
          {
            headers: {
              'X-AIO-Key': key,
              'Content-Type': 'application/json',
            },
          }
        );

        const value = response.data.last_value; // Lấy giá trị mới nhất từ Adafruit



          // Cập nhật giá trị vào trạng thái của ứng dụng
          if (value === "0") {
            // mode = "TẮT";
            setMode("TẮT");
          } else if (value === "1") {
            // mode = "MỨC 1";
            setMode("BẬT");
          } 

        setPrevMode(value); // Cập nhật giá trị mới vào biến trạng thái lưu giữ giá trị trước đó


      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ Adafruit:', error);
      }
    };

    const fetchSensorData = async () => {
      try {
        const response = await axios.get(
          'https://io.adafruit.com/api/v2/thanhliemtala/feeds/cambien1',
          {
            headers: {
              'X-AIO-Key': key,
              'Content-Type': 'application/json',
            },
          }
        );

        const value = response.data.last_value;

        setSensorValue(value);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ Adafruit:', error);
      }
    };


    const fetchLightData = async () => {
      try {
        const response = await axios.get(
          'https://io.adafruit.com/api/v2/thanhliemtala/feeds/cambien2',
          {
            headers: {
              'X-AIO-Key': key,
              'Content-Type': 'application/json',
            },
          }
        );

        const value = response.data.last_value;

        setLightValue(value);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ Adafruit:', error);
      }
    };

    const fetchHumiData = async () => {
      try {
        const response = await axios.get(
          'https://io.adafruit.com/api/v2/thanhliemtala/feeds/cambien3',
          {
            headers: {
              'X-AIO-Key': key,
              'Content-Type': 'application/json',
            },
          }
        );

        const value = response.data.last_value;

        setHumiValue(value);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ Adafruit:', error);
      }
    };

    

    fetchData(); // Gọi hàm fetchData lần đầu khi component được render
    fetchSensorData(); // Gọi hàm fetchSensorData lần đầu khi component được render
    fetchLightData(); // Gọi hàm fetchLightData lần đầu khi comonent được render
    fetchHumiData();

    const interval = setInterval(fetchData, 5000); // Gọi hàm fetchData sau mỗi 5 giây
    const temperture = setInterval(fetchSensorData, 5000);
    const light = setInterval(fetchLightData, 5000);
    const humidity = setInterval(fetchHumiData, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(temperture);
      clearInterval(light);
      clearInterval(humidity);
    };
  }, []); // Chỉ gọi useEffect này một lần duy nhất khi component được render



  const toggleMode = () => {
    if (mode === "TẮT"){
        setMode("BẬT");
        sendDataToAdafruit(1);
    } else {
      setMode("TẮT");
      sendDataToAdafruit(0);
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

        <Text className='font-bold text-xl mt-4'>Chế độ: {mode}</Text>
        <Text className='font-bold text-xl'>Thời gian: {formatTime(timer)}</Text>   
        <TouchableOpacity
          onPress={toggleMode}
          style={{
            alignItems: 'center',
            paddingVertical: 30,
            marginTop: 30,
            paddingHorizontal: 60,
            marginBottom: 30,
            backgroundColor: 'blue',
            borderRadius: 30,
          }}
        >
        <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Chuyển đổi chế độ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            paddingVertical: 30,
            paddingHorizontal: 60,
            marginTop: 8,
            backgroundColor: 'blue',
            borderRadius: 30,
            width: "70%",
          }}
        >
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Nhiệt độ: {sensorValue} °C</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            paddingVertical: 30,
            paddingHorizontal: 60,
            marginTop: 8,
            backgroundColor: 'blue',
            borderRadius: 30,
            width: "70%",
          }}
        >
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Ánh sáng: {lightValue} lux</Text>
        </TouchableOpacity>

          <TouchableOpacity
          style={{
            alignItems: 'center',
            paddingVertical: 30,
            paddingHorizontal: 60,
            marginTop: 8,
            backgroundColor: 'blue',
            borderRadius: 30,
            width: "70%",
          }}
        >
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Độ ẩm: {humiValue} %</Text>
        </TouchableOpacity>
      </View>
    </TailwindProvider>
  );
};
