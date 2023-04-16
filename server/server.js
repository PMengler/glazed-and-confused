const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
// for email setup
app.use(express.json());
app.use(cors());
app.use('/', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// For contact us email setup
const contactEmail = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, //ssl
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Contact Form Submission',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'ERROR' });
      console.log(error);
    } else {
      res.json({ status: 'Message Sent' });
    }
  });
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
