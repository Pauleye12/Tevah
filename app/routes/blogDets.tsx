import RelatedArticle from "~/components/Blogs/BlogOpen.tsx/RelatedArticle";
import ReadBlog from "../components/Blogs/BlogOpen.tsx/ReadBlog";
import Footer from "~/components/Footer";

const blogDets = () => {
  return (
    <div>
      <ReadBlog />
      <RelatedArticle />
      <Footer bgColor="#fff" />
    </div>
  );
};

export default blogDets;
