interface EmailData {
  name: string;
  email: string;
  message: string;
}

export function createMailtoLink(data: EmailData) {
  const recipient = 'contact@cbecapitalsc.com';
  const subject = `Contact Form Submission from ${data.name}`;
  const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
  
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}