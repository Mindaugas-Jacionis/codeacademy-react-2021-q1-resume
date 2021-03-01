import { Component, Fragment } from "react";
import { Pill, Divider } from "@codeacademy/storybook-components";

import { ContentBox, Select, Footer, ErrorBoundary } from "./components";
import translations from "./translations";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "en",
    };
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch", { error, info });
  }

  render() {
    const { language } = this.state;
    const {
      header,
      links,
      about,
      education,
      personalSkills,
      technicalSkills,
    } = translations[language];

    return (
      <ErrorBoundary>
        <div className="App">
          <header className="header">
            <div className="navigation">
              <Select
                value={language}
                onChange={(value) => {
                  this.setState({ language: value });
                }}
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
                  {links.values.map(({ href, text }, index) => (
                    <li key={index}>
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
                <Fragment key={i}>
                  <div>
                    <p>{name}</p>
                    <p>{year}</p>
                    <p>{degree}</p>
                  </div>
                  {i !== arr.length - 1 && <Divider isShort />}
                </Fragment>
              ))}
            </ContentBox>
            <ContentBox title={personalSkills.title} language={language}>
              {personalSkills.skills.map(({ text, level }, index) => (
                <Pill className="mr-1 mb-1" key={index} color={level}>
                  {text}
                </Pill>
              ))}
            </ContentBox>
            <ContentBox title={technicalSkills.title} language={language}>
              {technicalSkills.skills.map(({ text, level }, index) => (
                <Pill className="mr-1 mb-1" key={index} color={level}>
                  {text}
                </Pill>
              ))}
            </ContentBox>
          </main>
          <ErrorBoundary
            component={() => (
              <div style={{ background: "#7abcac", padding: "20px 0" }} />
            )}
          >
            <Footer language={language} />
          </ErrorBoundary>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
