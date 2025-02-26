import ExperienceCard from "@/app/components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

export default function ExperiencesSection({ sections }) {

  return (
    <div className="experience-accord">
        {sections.map((section) => (
          <div key={section.title} style={{ paddingTop: "10px" }}>
            <h3 style={{ textAlign: "center" }}>{section.title}</h3>
            {section["experiences"].map((experience, ind) => (
              <ExperienceCard experience={experience} key={ind} />
            ))}
          </div>
        ))}
    </div>
  );
}