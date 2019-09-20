import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { ACTIVE_COLOR, INACTIVE_COLOR } from "../constants/Color";

interface Props {
  name: string;
  focused: boolean;
}

const TabBarIcon: React.FC<Props> = ({ name, focused }) => {
  return (
    <Ionicons
      size={26}
      name={name}
      color={focused ? ACTIVE_COLOR : INACTIVE_COLOR}
    />
  );
};
export default TabBarIcon;
