<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Gaming Zone - Ramrao Deshmukh</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      min-height: 100vh;
      padding: 40px 20px;
      background: linear-gradient(to bottom right, #001f3f, #003366);
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 2.8rem;
      margin-bottom: 20px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.4);
    }

    .profile-card {
      background: linear-gradient(145deg, #1f1f2f, #2e2e4d);
      color: #fff;
      border-radius: 24px;
      padding: 30px;
      width: 280px;
      text-align: center;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
      margin-bottom: 30px;
    }

    .profile-card img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 4px solid #fff;
      object-fit: cover;
      margin-bottom: 20px;
    }

    .profile-card h2 {
      margin-bottom: 5px;
      font-size: 1.4rem;
    }

    .profile-card p {
      font-size: 0.95rem;
      color: #ccc;
      margin-bottom: 15px;
    }

    .game-section {
      width: 100%;
      max-width: 700px;
    }

    .game-card {
      background-color: #002b5c;
      border-radius: 16px;
      padding: 20px;
      margin-bottom: 20px;
      box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
    }

    .game-card h3 {
      margin-bottom: 8px;
      font-size: 1.5rem;
      color: #87cefa;
    }

    .game-card p {
      font-size: 1rem;
      color: #ddd;
    }

    .coming-soon {
      background-color: #1a1a1a;
      border: 2px dashed #888;
      color: #bbb;
      text-align: center;
    }

    .btn-home {
      margin-top: 30px;
      background: #00bfff;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .btn-home:hover {
      background: #0099cc;
    }

    footer {
      margin-top: 40px;
      color: #ccc;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>

  <h1>🎮 Gaming Zone</h1>

  <div class="profile-card">
    <img src="ram-profile-pic.jpg" alt="Ram Profile">
    <h2>Ram the Teenager</h2>
    <p>Gaming since 2K16</p>
  </div>

  <div class="game-section">
    <div class="game-card">
      <h3>Free Fire</h3>
      <p>ID: <strong>2803397893</strong><br>IGN: <strong>Javi</strong><br>Device: <strong>Infinix Zero 5G</strong></p>
    </div>

    <div class="game-card">
      <h3>Roblox</h3>
      <p>Username: <strong>v8nanyak</strong></p>
    </div>

    <div class="game-card">
      <h3>Minecraft</h3>
      <p>ID: <strong>ramispro89</strong><br>Platform: <strong>TLauncher</strong></p>
    </div>

    <div class="game-card coming-soon">
      <h3>GTA Online</h3>
      <p>Coming Soon</p>
    </div>

    <div class="game-card coming-soon">
      <h3>War Thunder</h3>
      <p>Coming Soon</p>
    </div>
  </div>

  <button class="btn-home" onclick="location.href='index.html'">⬅ Back to Home</button>

  <footer>© 2025 Ramrao Deshmukh</footer>

</body>
</html>
