import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { SendMessageForm } from "../../components/SendMessageForm";
import { SignInBox } from "../../components/SignInBox";
import { useAuth } from "../../hooks/Auth";
import { styles } from "./styles";

export const Home = () => {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Header />
      <MessageList />
      {user ? <SendMessageForm /> : <SignInBox />}
    </View>
  );
};
