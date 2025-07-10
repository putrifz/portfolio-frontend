import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { fadeIn } from "../../utils/motion";
import { Header } from "../atoms/Header";
import { TTestimonial } from "../../types";
import { useTranslation } from "react-i18next";
import { testimonials as images } from "../../constants";

const FeedbackCard: React.FC<{ index: number } & TTestimonial> = (testimonial) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", testimonial.index * 0.5, 0.75)}
      className="bg-black-200 xs:w-[320px] w-full rounded-3xl p-10"
    >
      <p className="text-[48px] font-black text-white">"</p>

      <div className="mt-1">
        <p className="text-[18px] tracking-wider text-white">{testimonial.testimonial}</p>

        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-[16px] font-medium text-white">
              <span className="blue-text-gradient">@</span> {testimonial.name}
            </p>
            <p className="text-secondary mt-1 text-[12px]">
              {testimonial.designation} of {testimonial.company}
            </p>
          </div>

          <img
            src={images[testimonial.index].image}
            alt={`feedback_by-${testimonial.name}`}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

const Feedbacks = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials", { returnObjects: true });
  return (
    <div className="bg-black-100 mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary min-h-[300px] rounded-2xl`}
      >
        <Header useMotion={true} p={t('sections.feedbacks.p')} h2={t('sections.feedbacks.h2')} />
      </div>
      <div
        className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14 max-sm:justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
