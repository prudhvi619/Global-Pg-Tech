export interface WhatsAppMessageProps {
  phoneNumber: string;
  message: string;
}

export const sendWhatsappMessage = (whatsappDetails: WhatsAppMessageProps) => {
  const whatsappUrl = `https://wa.me/${whatsappDetails.phoneNumber}?text=${whatsappDetails.message}`;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = whatsappUrl;
  } else {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }
};
