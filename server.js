const http = require("http");

const server = http.createServer((req, res) => {
  const html = `
    <html>
      <head>
        <title>Autopilot Test Project 🚀</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
          }

          .container {
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 30px rgba(0,0,0,0.3);
            max-width: 600px;
          }

          h1 {
            font-size: 3rem;
            margin-bottom: 10px;
          }

          p {
            font-size: 1.25rem;
            opacity: 0.9;
          }

          .glow {
            color: #fff;
            text-shadow: 0 0 10px #fff, 0 0 30px #6a11cb, 0 0 60px #2575fc;
          }

          .footer {
            margin-top: 20px;
            font-size: 0.9rem;
            opacity: 0.7;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <h1 class="glow">🚀 Autopilot Deployment Successful!</h1>
          <p>Your Node.js test application is running perfectly.</p>
          <p>Hosted via <strong>Autopilot Deployment System</strong> ⚙️</p>
          <div class="footer">Designed with ❤️ by Saksham</div>
        </div>
      </body>
    </html>
  `;

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(80, () =>
  console.log("✨ Beautiful Autopilot Test Project running on port 80 ✨")
);
