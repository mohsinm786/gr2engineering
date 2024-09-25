import { TeamMember } from "@/types/team";
import Image from "next/image";

import "./SingleBlog.css";

const SingleBlog = ({ member }: { member: TeamMember }) => {
  const { id, title, image, jobRole } = member;

  return (
    
      <div className="leadership_card rounded cursor-pointer">
        <div className="child_1">
          <Image className="leader_img" src={image} alt={title} width={200} height={200} />
        </div>
        <div className="child_2">
          <h1 className="text-lg text-blue-900"><b>{title}</b></h1>
          <h5 className="text-base font-medium leading-relaxed text-body-color">{jobRole}</h5>
        </div>
      </div>
    
  );
};

export default SingleBlog;
