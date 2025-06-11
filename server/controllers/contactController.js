export const handleContact = (req, res) => {
  const { name, email, message } = req.body;

  console.log(`📨 New message from ${name} (${email}): ${message}`);

  res.status(200).json({ message: 'Your message has been received!' });
};
