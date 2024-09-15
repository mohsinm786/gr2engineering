import { TeamMember } from "@/types/team";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ member }: { member: TeamMember }) => {
  const { title, image, jobRole } = member;
  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          {/* <Image src={image} alt="image" fill /> */}
          <div className="relative w-auto h-[300px]">
            <Image src={image} alt="image" fill className="object-cover" />
          </div>
        </Link>
        <div className="items-center sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <Link
              href="/blog-details"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="border-body-color border-opacity-10 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {jobRole}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
