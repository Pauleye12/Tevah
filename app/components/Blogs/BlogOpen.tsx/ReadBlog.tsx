import { useState } from "react";
import { Link } from "react-router";
import Dropdown from "~/components/SVGs/Dropdown";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "~/components/SVGs/Socials";

const ReadBlog = () => {
  const [donate, setDonate] = useState(false);
  return (
    <div className="w-full flex flex-col font-DMSans items-center justify-center bg-white mt-[80px] pt-[70px]">
      <div className="max-w-[950px] w-full px-5 flex-col gap-[56px] flex items-start justify-center">
        <Link
          to={"/blog"}
          className="flex font-Manrope items-center justify-center gap-2 text-[#1E1E1E] text-lg font-medium"
        >
          <span className="rotate-90">
            <Dropdown />
          </span>{" "}
          Back to Blog
        </Link>
        <div className="flex flex-col gap-4">
          <p className="text-[#1E1E1E80] text-xl font-semibold">
            Published on March 5, 2025
          </p>
          <h1 className="text-[#1E1E1E] mt-2 text-[32px] font-semibold ">
            Empowering Futures: How Scholarships Are Changing Lives
          </h1>
          <div className="flex items-center gap-3">
            <Facebook /> <Twitter /> <Instagram /> <LinkedIn />
          </div>
        </div>

        <div className="w-full flex flex-col gap-9 ">
          <img src="/blogImg.webp" alt="" />
          <div className="flex text-[#1E1E1E] flex-col gap-7">
            <p>
              Education is one of the most powerful tools for transformation,
              yet for many students, financial barriers stand in the way of
              their dreams. Scholarships don’t just provide financial aid—they
              offer hope, opportunity, and a path toward a brighter future. At
              [Foundation Name], we’ve seen firsthand how a single scholarship
              can change the course of a student’s life, breaking cycles of
              poverty and opening doors to endless possibilities.
            </p>
            <p>
              For many students, the dream of higher education is often
              overshadowed by financial struggles. Tuition fees, books, and
              living expenses create an overwhelming burden, forcing some to put
              their education on hold. Scholarships help remove these obstacles,
              allowing students to focus on their studies without the constant
              worry of making ends meet.
            </p>
            <p className="flex flex-col gap-1">
              <span>
                <strong>✅ Breaking Barriers:</strong>
                Scholarships make education accessible to students who might
                otherwise miss out.
              </span>
              <span>
                <strong>✅ Reducing Financial Stress:</strong> Students can
                concentrate on learning rather than worrying about tuition.
              </span>{" "}
              <span>
                <strong>✅ Encouraging Academic Excellence:</strong> Many
                scholarships reward high-achieving students, motivating them to
                push further.
              </span>{" "}
            </p>
            <p>
              Take David Adeyibi, for example. Coming from a low-income family,
              he had the ambition and drive to succeed but lacked the financial
              means to pursue his college education. Through our scholarship
              program, he was able to enroll in his dream university and is now
              excelling in his studies, working toward a career in engineering.
            </p>
            <p>
              Beyond financial aid, scholarships provide students with
              confidence, motivation, and access to resources they might not
              otherwise have. Many recipients gain entry to mentorship programs,
              networking events, and career development opportunities that set
              them up for long-term success. For some, this support extends
              beyond their education, shaping their future in ways they never
              imagined.
            </p>
            <p className="flex flex-col gap-1">
              <strong>✨ Scholarship Benefits Beyond Tuition:</strong>
              <span>
                <strong>- Mentorship & Guidance:</strong>- Many scholarships
                include mentoring programs to help students navigate their
                careers.
              </span>
              <span>
                <strong> - Networking Opportunities:</strong> Scholars get
                access to industry leaders, internships, and job prospects.
              </span>
              <span>
                <strong>- Encouraging Community Impact:</strong> Many
                scholarship recipients give back, creating a cycle of support.
              </span>
            </p>
            <p>
              One inspiring story is that of <strong>Mary Kukeyi</strong>, who,
              after completing his degree, started a local tutoring program to
              help underprivileged children. His journey from scholarship
              recipient to community leader is a from scholarship recipient to
              community leader is a testament to the lasting impact of
              educational support.
            </p>
            <p>
              When a student receives a scholarship, the effect ripples beyond
              just one life. Families are lifted out of hardship, communities
              gain educated leaders, and the cycle of poverty begins to break.
              Education fuels progress, and scholarships are a catalyst for that
              change.
            </p>
            <p className="flex flex-col gap-1">
              <strong>📌 How You Can Help:</strong>
              <span>
                {" "}
                <strong>✔️ Donate to our Scholarship Fund –</strong> Every
                contribution helps a student stay in school.
              </span>
              <span>
                <strong>✔️ Become a Mentor –</strong> Guide and support a
                student’s educational journey.
              </span>
              <span>
                <strong>✔️ Share Our Mission –</strong> Help us reach more
                students by spreading awareness.
              </span>{" "}
            </p>
            <p>
              {" "}
              At [Foundation Name], we believe in the power of education to
              transform lives, and we invite you to be part of this journey.
              Whether you choose to donate, sponsor a student, or simply spread
              the word, you’re helping create opportunities that will last for
              generations. Want to make a difference?
            </p>
          </div>
          <button
            onClick={() => setDonate(true)}
            className="bg-[#1E1E1E] text-white px-5 py-4 w-fit rounded-lg cursor-pointer"
          >
            Support A Scholar today!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadBlog;
