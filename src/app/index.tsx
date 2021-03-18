import { Component, Fragment, Suspense, lazy } from "react";
import loadable, { lazy as loadableLazy } from "@loadable/component";
import { Pill, Divider } from "@codeacademy/storybook-components";

import ContentBox from "./components/ContentBox";
import ErrorBoundary from "./components/ErrorBoundary";
import translations from "./translations";
import "./index.css";

const Select = lazy(() => import("./components/Select"));
const Footer = loadableLazy(() => import("./components/Footer"));

class App extends Component<undefined, { language: LanguageValues }> {
  constructor(props: undefined) {
    super(props);
    this.state = {
      language: "en",
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
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
    }: {
      header: any;
      links: any;
      about: any;
      education: any;
      personalSkills: any;
      technicalSkills: any;
    } = translations[language];

    return (
      <ErrorBoundary>
        <div className="App">
          <header className="header">
            <div className="navigation">
              <Suspense
                fallback={<div style={{ background: "gray", width: "76px", height: "20.8px" }} />}
              >
                <Select
                  data-testid="language_select"
                  value={language}
                  onChange={(value: LanguageValues) => {
                    this.setState({ language: value });
                  }}
                  options={[
                    { value: "en", children: "English" },
                    { value: "lt", children: "Lietuviu" },
                  ]}
                />
              </Suspense>
            </div>
            <div className="header__name-container">
              <h1>Sophie Alpert</h1>
              <span className="header__name-title" data-testid="header_job_title">
                {header.title}
              </span>
            </div>
          </header>
          <main className="grid grid-cols-3 gap-3 mx-4">
            <ContentBox title={links.title}>
              {links.values && !!links.values.length && (
                <ul>
                  {links.values.map(
                    ({ href, text }: { href: string; text: string }, index: number) => (
                      <li key={index}>
                        <a href={href} target="_blank" rel="noreferrer noopener">
                          {text}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              )}
            </ContentBox>
            <ContentBox className="col-span-2" title={about.title}>
              <p>{about.text}</p>
            </ContentBox>
            <ContentBox title={education.title}>
              {education.schools.map(
                (
                  { name, year, degree }: { name: string; year: string; degree: string },
                  i: number,
                  arr: [{ name: string; year: string; degree: string }]
                ) => (
                  <Fragment key={i}>
                    <div>
                      <p>{name}</p>
                      <p>{year}</p>
                      <p>{degree}</p>
                    </div>
                    {i !== arr.length - 1 && <Divider isShort />}
                  </Fragment>
                )
              )}
            </ContentBox>
            <ContentBox
              data-testid="personal_skills"
              title={personalSkills.title}
              language={language}
            >
              {personalSkills.skills.map(
                ({ text, level }: { text: string; level: string }, index: number) => (
                  <Pill className="mr-1 mb-1" key={index} color={level}>
                    {text}
                  </Pill>
                )
              )}
            </ContentBox>
            <ContentBox title={technicalSkills.title} language={language}>
              {technicalSkills.skills.map(
                ({ text, level }: { text: string; level: string }, index: number) => (
                  <Pill className="mr-1 mb-1" key={index} color={level}>
                    {text}
                  </Pill>
                )
              )}
            </ContentBox>
          </main>
          <ErrorBoundary
            component={() => <div style={{ background: "#7abcac", padding: "20px 0" }} />}
          >
            <Suspense
              fallback={<div style={{ background: "gray", width: "100%", height: "64px" }} />}
            >
              <Footer language={language} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
