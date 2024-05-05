import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import LottieView from 'lottie-react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Modal from "react-native-modal";
import logo from "../assets/logo.png"
import homeJson from "../assets/home_1.json";

let ah1;

export default infoQuat = () => {
  const [mode, setMode] = useState("TẮT");
  const [timer, setTimer] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date().getDate());
  const [isModalVisible, setModalVisible] = useState(false);
  const [bt, set_bt] = useState("Đặt lịch bảo trì");
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [activityTime, setActivityTime] = useState("");
  const [lt, set_lt] = useState("Thêm lịch trình");
  const [isFanOn, setIsFanOn] = useState(false); // Thay đổi state fanStrength thành isFanOn
  const [activityHistory, setActivityHistory] = useState([]); // Lịch sử hoạt động
  const [isEditing, setIsEditing] = useState(false); // Trạng thái chỉnh sửa lịch trình
  const timerRef = useRef(null); // Tham chiếu cho việc dừng đếm ngược

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

  const resetTimer = () => {
    setTimer(0);
    setMode("TẮT");
    clearTimeout(timerRef.current);
    set_lt("Thêm lịch trình");
    setIsEditing(false);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  const handleConfirm = () => {
    set_bt("Đặt lịch thành công!");
    setModalVisible(false);
  };

  const handleCancel = () => {
    set_bt("Đặt lịch bảo trì");
    setModalVisible(false);
  }
  const handleConfirm2 = () => {
    setIsEditing(true);
    const timeInSeconds = parseInt(activityTime, 10);
    resetTimer();
    setTimer(timeInSeconds);
    countdown(timeInSeconds);
    setModalVisible2(false);
  
    const newActivity = `Thêm lịch trình ${timeInSeconds} giây, Trạng thái: ${isFanOn ? "BẬT" : "TẮT"}`;
    setActivityHistory([newActivity]);
    set_lt("Chỉnh sửa lịch trình");
  };
  

  const handleCancel2 = () => {
    set_lt("Thêm lịch trình");
    setIsEditing(false);
    setModalVisible2(false);
  };

  const countdown = (remainingTime) => {
    if (remainingTime > 0) {
      setTimer(remainingTime);
      timerRef.current = setTimeout(() => countdown(remainingTime - 1), 1000);
    } else {
      setTimer(0);
      set_lt("Thêm lịch trình");
      setIsEditing(false);
    }
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
ah1 = activityHistory;
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

        <TouchableOpacity onPress={resetTimer} className='py-8 px-16 m-9 bg-bluebg rounded-3xl'>
          <Text className='text-xl text-white'>Xóa lịch trình</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal} className='py-8 px-16 m-9 bg-bluebg rounded-3xl'>
          <Text className='text-xl text-white'>{bt}</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={toggleModal2} className='py-8 px-16 m-9 bg-bluebg rounded-3xl'>
          <Text className='text-xl text-white'>{lt}</Text>
        </TouchableOpacity>     

        <Modal isVisible={isModalVisible}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
              <Text>Xác nhận đặt lịch</Text>
              <TouchableOpacity onPress={handleConfirm} style={{ marginTop: 10 }}>
                <Text>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel} style={{ marginTop: 10 }}>
                <Text>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal isVisible={isModalVisible2}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
              <Text>Chọn trạng thái của quạt:</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <TouchableOpacity onPress={() => setIsFanOn(true)}>
                  <Text>BẬT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsFanOn(false)}>
                  <Text>TẮT</Text>
                </TouchableOpacity>
              </View>
              <Text>Thời gian hoạt động:</Text>
              <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, padding: 5, marginBottom: 10 }}
                onChangeText={text => setActivityTime(text)}
                value={activityTime}
                keyboardType="numeric"
              />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={handleConfirm2}>
                  <Text>{isEditing ? "Chỉnh sửa" : "Thêm lịch trình"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel2}>
                  <Text>Thoát</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

      </View>
    </TailwindProvider>
  );
};
