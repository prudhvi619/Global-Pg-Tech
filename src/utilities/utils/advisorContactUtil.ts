import {
  prudhviEmailDetails,
  prudhviWhatsappDetails,
  srinuEmailDetails,
  srinuWhatsappDetails,
  uditEmailDetails,
  uditWhatsappDetails,
  abhishekEmailDetails,
  abhishekWhatsappDetails,
} from "../constants/UserCreds";

// Helper functions to send email and WhatsApp messages
import { EmailParams, sendEmail } from "../helpers/sendEmail";
import { sendWhatsappMessage, WhatsAppMessageProps } from "../helpers/sendWhatsappMessage";

// Map to store advisor names with their corresponding contact details
const advisorContactMap: Record<
  string,
  {
    email: EmailParams;
    whatsapp: WhatsAppMessageProps;
  }
> = {
  Prudhvi: {
    email: prudhviEmailDetails,
    whatsapp: prudhviWhatsappDetails,
  },
  Srinu: {
    email: srinuEmailDetails,
    whatsapp: srinuWhatsappDetails,
  },
  Udit: {
    email: uditEmailDetails,
    whatsapp: uditWhatsappDetails,
  },
  Abhishek: {
    email: abhishekEmailDetails,
    whatsapp: abhishekWhatsappDetails,
  },
};

// Function to handle email click
export const handleEmailClick = (advisorName: string) => {
  const advisorDetails = advisorContactMap[advisorName];
  if (advisorDetails) {
    sendEmail(advisorDetails.email);
  } else {
    console.error(`No email details found for advisor: ${advisorName}`);
  }
};

// Function to handle WhatsApp click
export const handleWhatsAppClick = (advisorName: string) => {
  const advisorDetails = advisorContactMap[advisorName];
  if (advisorDetails) {
    sendWhatsappMessage(advisorDetails.whatsapp);
  } else {
    console.error(`No WhatsApp details found for advisor: ${advisorName}`);
  }
};
