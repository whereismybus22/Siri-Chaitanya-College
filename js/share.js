function shareApp() {
  const message = `Hello!!
Now you can track your Institution buses' location 24/7 — from anywhere! 🚍
🔗 Visit: https://sirichaitanya-whereismybus.vercel.app
👤 Username: Sirichaitanya@1991
🔒 Password: Sirichaitanya@1991`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
}
