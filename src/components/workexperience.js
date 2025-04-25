import { useState } from "react";
import { companies } from "../content/companies";
import { StyledWorkExperience } from "../styles/workexperience.style";
import { CaretRight } from "@phosphor-icons/react";
import getTimeline from "../hooks/getTimeline";

const WorkExperience = () => {
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);

  const { label: timeline, duration } = getTimeline(
    selectedCompany.startDate,
    selectedCompany.endDate
  );

  return (
    <StyledWorkExperience>
      <aside>
        <ul>
          {companies.map((company) => (
            <li
              key={company.id}
              onClick={() => setSelectedCompany(company)}
              className={selectedCompany.id === company.id ? "active" : ""}
            >
              {company.companyName}
            </li>
          ))}
        </ul>
      </aside>
      <article>
        <div>
          <h3>{selectedCompany.title}</h3>
          <a href={selectedCompany.link} target="_blank" rel="noreferrer">
            @{selectedCompany.companyName}
          </a>
        </div>

        <p>
          {timeline}
          <span>{` | ${duration}`}</span>
        </p>

        {selectedCompany.details.map((detail, index) => (
          <ul>
            <li key={index}>
              <span>
                <CaretRight weight="duotone" size={12} color="#d0a2f7" />
              </span>
              {detail}
            </li>
          </ul>
        ))}
      </article>
    </StyledWorkExperience>
  );
};

export default WorkExperience;
