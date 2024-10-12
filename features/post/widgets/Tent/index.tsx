import React from "react";
import { View, Text, Pressable } from "react-native";
import { Href, router, usePathname } from "expo-router";
import { BanIcon, CctvIcon, BotIcon } from "lucide-react-native";

import { tentStyles as s, iconProps } from "./styles";

interface IProps {
  status: number;
  message?: string;
}

const Tent: React.FC<IProps> = ({ status, message }) => {
  const pathname = usePathname();
  const config = getConfig(status, message);
  const handleReload = () => router.push(pathname as Href<string>);
  const handleReturn = () => router.back();
  console.log("🚀 ~ Tent");
  // renders
  return (
    <View style={s.container}>
      <View style={s.header}>{config.icon}</View>
      <Text style={s.h1}>
        {status}: {config.statusText}
      </Text>
      <Text style={s.h2}>{config.message}</Text>
      <View style={s.ul}>
        <Text style={s.p}>Troubleshoot:</Text>
        {[
          { message: "Verify you visited the correct URL path" },
          { message: "Reboot your internet connection" },
          { message: "Contact your ISP or tech support", isLink: true },
        ].map((e, i) => (
          <View key={i} style={s.li}>
            <View style={s.bullet}></View>
            <Text style={[s.p, e?.isLink && s.a]}>{e.message}</Text>
          </View>
        ))}
      </View>
      <Text style={s.h3}>#{pathname}</Text>
      <View style={s.footer}>
        <View style={s.button_wrapper}>
          <Pressable style={s.button} onPress={handleReload}>
            <Text style={s.button_text}>Retry</Text>
          </Pressable>
        </View>
        <Pressable onPress={handleReturn}>
          <Text style={[s.link]}>Go back</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default React.memo(Tent);

const getConfig = (status: number, message?: string) => {
  let config = {
    icon: <BanIcon {...iconProps} />,
    statusText: "NOT_FOUND",
    message: "Oops! It appears the requested resource does not exist.",
  };
  switch (status) {
    case 401:
      config.icon = <CctvIcon {...iconProps} />;
      config.statusText = "UNAUTHORIZED";
      config.message =
        "Oops! It appears you're not authorized to view this resource.";
      break;
    case 403:
      config.icon = <CctvIcon {...iconProps} />;
      config.statusText = "FORBIDDEN";
      config.message =
        "Oops! It appears you do not have access right(s) to view this resource.";
      break;
    case 500:
      config.icon = <BotIcon {...iconProps} />;
      config.statusText = "INTERNAL_SERVER_ERROR";
      config.message = message || "Something went wrong!";
      break;
    default:
  }
  return config;
};
