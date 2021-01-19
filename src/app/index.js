import { useState } from "react";

import { Pill, Divider, ContentBox, Select, Footer } from "./components";
import translations from "./translations";
import "./index.css";

function App() {
  const [language, setLanguage] = useState("en");
  const {
    header,
    links,
    about,
    education,
    personalSkills,
    technicalSkills,
  } = translations[language];

  return (
    <div className="App">
      <header className="header">
        <div className="navigation">
          <Select
            value={language}
            onChange={setLanguage}
            options={[
              { value: "en", children: "English" },
              { value: "lt", children: "Lietuviu" },
            ]}
          />
        </div>
        <div className="header__name-container">
          <h1>Sophie Alpert</h1>
          <span className="header__name-title">{header.title}</span>
        </div>
      </header>
      <main className="grid grid-cols-3 gap-3 mx-4">
        <ContentBox title={links.title}>
          {links.values && !!links.values.length && (
            <ul>
              {links.values.map(({ href, text }) => (
                <li>
                  <a href={href} target="_blank" rel="noreferrer noopener">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </ContentBox>
        <ContentBox className="col-span-2" title={about.title}>
          <p>{about.text}</p>
        </ContentBox>
        <ContentBox title={education.title}>
          {education.schools.map(({ name, year, degree }, i, arr) => (
            <>
              <div>
                <p>{name}</p>
                <p>{year}</p>
                <p>{degree}</p>
              </div>
              {i !== arr.length - 1 && <Divider isShort />}
            </>
          ))}
        </ContentBox>
        <ContentBox title={personalSkills.title}>
          {personalSkills.skills.map(({ text, level }) => (
            <Pill color={level}>{text}</Pill>
          ))}
        </ContentBox>
        <ContentBox title={technicalSkills.title}>
          {technicalSkills.skills.map(({ text, level }) => (
            <Pill color={level}>{text}</Pill>
          ))}
        </ContentBox>
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
