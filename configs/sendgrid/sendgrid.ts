const client = require("@sendgrid/mail");

export default client.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_SEC);
