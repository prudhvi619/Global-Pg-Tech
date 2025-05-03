import { EmailParams } from "../helpers/sendEmail";
import { WhatsAppMessageProps } from "../helpers/sendWhatsappMessage";

export const orgEmailDetails: EmailParams = {
  address: "globalpgtech@gmail.com",
  subject: "Enquiry Regarding Placements",
  body: encodeURIComponent(
    `Hello Global PG Tech,\n\nI am interested in knowing more about your staffing and placement services.\n\nRegards,`
  ),
};

export const orgWhatsappDetails: WhatsAppMessageProps = {
  phoneNumber: "+16823750486",
  message: encodeURIComponent(
    "Hello Global PG Tech,\n\nI am interested in knowing more about your courses and placement support!"
  ),
};

export const prudhviEmailDetails: EmailParams = {
  address: "saiprudhvigudipati@gmail.com",
  subject: "Enquiry Regarding Placements",
  body: encodeURIComponent(
    `Hello Global PG Tech,\n\nI am interested in knowing more about your staffing and placement services.\n\nRegards,`
  ),
};

export const prudhviWhatsappDetails: WhatsAppMessageProps = {
  phoneNumber: "+16823750486",
  message: encodeURIComponent(
    "Hello Global PG Tech,\n\nI am interested in knowing more about your courses and placement support!"
  ),
};

export const srinuEmailDetails: EmailParams = {
  address: "techpgss@gmail.com",
  subject: "Enquiry Regarding Placements",
  body: encodeURIComponent(
    `Hello Global PG Tech,\n\nI am interested in knowing more about your staffing and placement services.\n\nRegards,`
  ),
};

export const srinuWhatsappDetails: WhatsAppMessageProps = {
  phoneNumber: "+19458105827",
  message: encodeURIComponent(
    "Hello Global PG Tech,\n\nI am interested in knowing more about your courses and placement support!"
  ),
};

export const uditEmailDetails: EmailParams = {
  address: "uditsinghania1992@gmail.com",
  subject: "Enquiry Regarding Training",
  body: encodeURIComponent(
    `Hello Global PG Tech,\n\nI am interested in your training modules on MicroStrategy, SQL, Power BI, Cloud, .NET, React, and Python to enhance my skills.\n\nRegards,`
  ),
};

export const uditWhatsappDetails: WhatsAppMessageProps = {
  phoneNumber: "+919451176919",
  message: encodeURIComponent(
    "Hello Global PG Tech,\n\nI am interested in your training modules on MicroStrategy, SQL, Power BI, Cloud, .NET, React, and Python to enhance my skills.\n\nRegards,"
  ),
};

export const abhishekEmailDetails: EmailParams = {
  address: "abhishek.paspunuri@gmail.com",
  subject: "Enquiry Regarding Placements",
  body: encodeURIComponent(
    `"Hello Global PG Tech,\n\nI am interested in learning more about your assessment, portfolio development and project support services and how they can help evaluate my technical skills."\n\nRegards,"`
  ),
};

export const abhishekWhatsappDetails: WhatsAppMessageProps = {
  phoneNumber: "+916302691478",
  message: encodeURIComponent(
    `"Hello Global PG Tech,\n\nI am interested in learning more about your assessment, portfolio development and project support services and how they can help evaluate my technical skills."\n\nRegards,"`
  ),
};
