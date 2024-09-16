
import React from 'react';
import SingleBlog from "./SingleBlog";
import { TeamMember } from "@/types/team";


type TeamProps = {
  teamData: TeamMember[];
};

const Team: React.FC<TeamProps> = ({ teamData }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mt-5 mb-5">
      {teamData.map((member) => (
        <div key={member.id} className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 text-center mx-auto">
          <SingleBlog member={member} />
        </div>
      ))}
    </div>
  );
};

export default Team;
