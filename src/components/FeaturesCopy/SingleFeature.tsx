import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  
  return (
    <div className="w-full text-center"> {/* Center the content */}
      <div className="wow fadeInUp" data-wow-delay=".15s">
        {/* Icon */}
        <div className="mb-10 flex h-[120px] w-[120px] items-center justify-center mx-auto transition-transform duration-300 hover:scale-110"> {/* Enlarged icon size with hover effect */}
          <div className="relative h-full w-full flex items-center justify-center">
            {icon}
          </div>
        </div>
        {/* Title */}
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        {/* Paragraph */}
        <p className="text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
