import LatestPost from "~/components/Blogs/LatestPost";
import MorePosts from "~/components/Blogs/MorePosts";
import Stories from "~/components/Blogs/Stories";
import Footer from "~/components/Footer";
import Volunteer from "~/components/Blogs/Volunteer";

const blog = () => {
  return (
    <div>
      <Stories />
      <LatestPost />
      <MorePosts />
      <Volunteer />
      <Footer bgColor="#fff" />
    </div>
  );
};

export default blog;
