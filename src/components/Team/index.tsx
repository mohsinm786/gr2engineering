
import React from 'react';
import SingleBlog from "./SingleBlog";
import { TeamMember } from "@/types/team";


type TeamProps = {
  teamData: TeamMember[];
};

const Team: React.FC<TeamProps> = ({ teamData }) => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
      {teamData.map((member) => (
        <div key={member.id} className="w-full">
          <SingleBlog member={member} />
        </div>
      ))}
    </div>
  );
};

export default Team;
