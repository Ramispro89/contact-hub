import React from "react";
import "./GamingSection.css";

const games = [
  {
    name: "Free Fire",
    username: "2803397893",
    icon: "🔥",
  },
  {
    name: "Roblox",
    username: "v8nanyak",
    icon: "🧱",
  },
  {
    name: "Minecraft",
    username: "ramispro89",
    icon: "⛏️",
  },
  {
    name: "GTA Online",
    username: "Coming Soon",
    icon: "🚗",
  },
  {
    name: "War Thunder",
    username: "Coming Soon",
    icon: "✈️",
  },
];

const GamingSection = () => {
  return (
    <section className="gaming-section">
      <h2>🎮 My Gaming Profiles</h2>
      <div className="gaming-cards">
        {games.map((game, index) => (
          <div key={index} className="game-card">
            <span className="icon">{game.icon}</span>
            <h3>{game.name}</h3>
            <p>{game.username}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamingSection;
