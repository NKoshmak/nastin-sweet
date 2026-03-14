/** @format */

import Hero from "@/components/Course/Hero/Hero";
import styles from "../../styles/newcourse.module.css";
import CourseTimeline from "@/components/Course/CourseTimeline/CourseTimeline";
import ForWhom from "@/components/Course/ForWhom/ForWhom";
import AboutCourse from "@/components/Course/AboutCourse/AboutCourse";
import CourseSection from "@/components/Course/CoursesSection/CoursesSection";
import ResultsSection from "@/components/Course/ResultsSection/ResultsSection";
import AuthorSection from "@/components/Course/AuthorSection/AuthorSection";
import PricingSection from "@/components/Course/PricingSection/PricingSection";
import TestimonialGrid from "@/components/Course/TestimonialSection/TestimonialGrid";
import FAQSection from "@/components/Course/FaqSection/FaqSection";

export default function NewCoursePage() {
  return (
    <>
     <Hero />
     <ForWhom />
     <AboutCourse />
      <CourseTimeline />
      <CourseSection />
      <ResultsSection />
      <AuthorSection />
      <PricingSection />
      <TestimonialGrid />
      <FAQSection />
    </>
  );
}
