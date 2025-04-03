import { LogoTwilioIcon } from "@twilio-paste/icons/esm/LogoTwilioIcon";
import React from "react";
import { IconSize, TextColor } from "@twilio-paste/style-props";
import ZanatechLogoSmall from "./components/icons/ZanatechLogoSmall";

export const LOGO_TITLE = "Zanatech Conversations";
export const LOGO_SUB_TITLE = "Chats de usuarios";
export const APP_TITLE = "Zanatech Conversations";

interface LogoTwilioIconProps {
  decorative?: boolean;
  color?: TextColor | undefined;
  size?: IconSize | undefined;
  title?: string;
}

export const AppLogo: React.FC = () => <ZanatechLogoSmall />;
