<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ramrao's Gaming Zone</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 40px 20px;
      background: linear-gradient(135deg, #8ec5fc, #e0c3fc);
      background-size: cover;
      min-height: 100vh;
      text-align: center;
      color: #222;
    }

    h1 {
      font-size: 2.8rem;
      margin-bottom: 10px;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    }

    .game-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin-top: 30px;
    }

    .game-card {
      background-color: white;
      border-radius: 16px;
      padding: 20px;
      width: 220px;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .game-card:hover {
      transform: translateY(-8px);
      background-color: #f2faff;
    }

    .coming-soon h3 {
      font-style: italic;
      color: #888;
    }

    footer {
      margin-top: 40px;
      font-size: 0.9rem;
      color: #555;
    }

    a {
      display: inline-block;
      margin-top: 20px;
      text-decoration: none;
      color: #0077ff;
      font-weight: bold;
    }

    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>🎮 Welcome to My Gaming Zone</h1>

  <div class="game-cards">
    <div class="game-card">
      <h3>Free Fire</h3>
      <p>ID: <strong>2803397893</strong></p>
    </div>
    <div class="game-card">
      <h3>Roblox</h3>
      <p>Username: <strong>v8nanyak</strong></p>
    </div>
    <div class="game-card">
      <h3>Minecraft</h3>
      <p>ID: <strong>ramispro89 (TLauncher)</strong></p>
    </div>
    <div class="game-card coming-soon">
      <h3>GTA Online – Coming Soon</h3>
    </div>
    <div class="game-card coming-soon">
      <h3>War Thunder – Coming Soon</h3>
    </div>
  </div>

  <a href="index.html">⬅️ Back to Home</a>

  <footer>© 2025 Ramrao Deshmukh</footer>
</body>
</html>
