import React from "react";
import { ActivityIndicator } from "react-native";

const Loading = ({ isIconAnimating }) => (
  <ActivityIndicator size="large" color="#000ff" animating={isIconAnimating} />
);

export default Loading;
