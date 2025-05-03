export interface EmailParams {
  address: string;
  subject: string;
  body: string;
}

export const sendEmail = (email:EmailParams) => {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email.address}&su=${email.subject}&body=${email.body}`;
  window.open(gmailUrl, "_blank", "noopener,noreferrer");
};
