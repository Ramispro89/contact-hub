import React from "react";
import ProfileCard from "./ProfileCard";
import "./ProfileCard.css";
import "./GamingSection.css";

const GamingSection = () => {
  return (
    <div className="gaming-section">
      <h2>🎮 Gaming Profiles</h2>

      <div className="gaming-cards-grid">
        <ProfileCard
          avatarUrl="https://mc-heads.net/avatar/ramispro89"
          miniAvatarUrl="https://mc-heads.net/avatar/ramispro89"
          name="Minecraft"
          title="ramispro89 (TLauncher)"
          handle="ramispro89"
          status="Online"
          contactText="Join Server"
        />

        <ProfileCard
          avatarUrl="/images/ff-avatar.png"
          miniAvatarUrl="/images/ff-avatar.png"
          name="Free Fire"
          title="ID: 2803397893"
          handle="Ramrao999"
          status="Online"
          contactText="1v1 Challenge"
        />

        <ProfileCard
          avatarUrl="/images/roblox-avatar.png"
          miniAvatarUrl="/images/roblox-avatar.png"
          name="Roblox"
          title="v8nanyak"
          handle="v8nanyak"
          status="Online"
          contactText="Play Now"
        />

        <ProfileCard
          name="GTA Online"
          title="Coming Soon"
          handle="--"
          status="Offline"
          contactText="Stay Tuned"
        />

        <ProfileCard
          name="War Thunder"
          title="Coming Soon"
          handle="--"
          status="Offline"
          contactText="Stay Tuned"
        />
      </div>
    </div>
  );
};

export default GamingSection;
