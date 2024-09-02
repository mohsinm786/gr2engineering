import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import teamData from "./teamData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {teamData.map((member) => (
            <div key={member.id} className="w-full">
              <SingleBlog member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
