const path = require('path');

const emailHeader = `
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Planet MotorHome</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f5f5f5;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      h1 {
        color: #717339;
      }

      h5 {
        color: #717339;
      }

      p {
        color: #333;
      }

      a {
        color: #0066cc;
        text-decoration: none;
      }

      img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 20px 0;
      }
    </style>
  </head>
`;
const logoDataURI = './logo.png'

const welcome = ({ name, token }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      ${emailHeader}
      <body>
        <div class="container">
          <h1>Olá ${name}</h1>
          <p>Seja bem-vindo à Planet MotorHome</p>
          <h5>Seu Token de ativação é ${token}</h5>
        </div>
      </body>
    </html>
  `;
};

const forgotPassword = ({ name, link }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      ${emailHeader}
      <body>
        <div class="container">
          <h1>Olá ${name}</h1>
          <p>Já que você esqueceu sua senha, clique no link abaixo para resetar sua senha:</p>
          <a href="${link}">
            <h5>Clique aqui para resetar sua senha</h5>
          </a>
        </div>
      </body>
    </html>
  `;
};

module.exports = { welcome, forgotPassword };