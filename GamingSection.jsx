<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Gaming Zone - Ramrao Deshmukh</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 40px 20px;
      background: linear-gradient(to right, #c3ecff, #fceabb);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: #222;
    }

    .game-cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .game-card {
      background-color: white;
      border-radius: 16px;
      padding: 20px;
      width: 220px;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }

    .game-card:hover {
      transform: translateY(-8px);
      background-color: #f2faff;
    }

    .game-card h3 {
      margin-bottom: 10px;
      color: #0077ff;
    }

    .coming-soon h3 {
      font-style: italic;
      color: #888;
    }

    .minecraft-skin {
      width: 100px;
      height: auto;
      margin-top: 10px;
      border-radius: 10px;
    }

    a.back {
      margin-top: 40px;
      text-decoration: none;
      color: #0057ff;
      font-weight: bold;
    }

    footer {
      margin-top: 40px;
      font-size: 0.9rem;
      color: #666;
    }

    @media (max-width: 600px) {
      h1 {
        font-size: 2rem;
      }

      .game-card {
        width: 90%;
      }
    }
  </style>
</head>
<body>

  <h1>🎮 My Gaming Zone</h1>

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
      <p>ID: <strong>ramispro89</strong> (TLauncher)</p>
      <img src="minecraft.png" alt="Minecraft Skin" class="minecraft-skin" />
    </div>
    <div class="game-card coming-soon">
      <h3>GTA Online – Coming Soon</h3>
    </div>
    <div class="game-card coming-soon">
      <h3>War Thunder – Coming Soon</h3>
    </div>
  </div>

  <a href="index.html" class="back">← Back to Home</a>

  <footer>© 2025 Ramrao Deshmukh</footer>

</body>
</html>
