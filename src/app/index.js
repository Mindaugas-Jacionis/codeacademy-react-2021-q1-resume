import Pill from "./components/Pill";
import ContentBox from "./components/ContentBox";
import Divider from "./components/Divider";
import Select from "./components/Select";

import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="navigation">
          <Select
            options={[
              { value: "en", children: "English" },
              { value: "lt", children: "Lietuviu" },
            ]}
          />
        </div>
        <div className="header__name-container">
          <h1>Sophie Alpert</h1>
          <span className="header__name-title">Programmer</span>
        </div>
      </header>
      <main>
        <ContentBox title="Link">
          <ul>
            <li>
              <p>linkedin</p>
            </li>
            <li>
              <p>github</p>
            </li>
            <li>
              <p>twitter</p>
            </li>
            <li>
              <p>blog</p>
            </li>
          </ul>
        </ContentBox>
        <ContentBox title="About Me">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam
            vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et,
            lobortis ex. Nullam tortor diam, venenatis at enim a, lacinia
            porttitor erat. Vivamus tempor dictum leo id aliquam. Praesent elit
            lacus, tempus ac vehicula in, imperdiet dapibus elit. Nullam
            scelerisque euismod leo id vestibulum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum
            vitae mattis diam.
          </p>
        </ContentBox>
        <ContentBox title="Education">
          <div>
            <p>Hogwartz</p>
            <p>2009-2013</p>
            <p>Wizard</p>
          </div>
          <Divider />
          <div>
            <p>Hogwartz</p>
            <p>2009-2013</p>
            <p>Wizard</p>
          </div>
        </ContentBox>
        <ContentBox title="Personal Skills">
          <Pill color="green">Teamwork</Pill>
          <Pill color="yellow">Communication</Pill>
          <Pill color="redish">Organisation</Pill>
          <Pill>Leadership</Pill>
        </ContentBox>
        <ContentBox>
          <Pill color="green">HTML</Pill>
        </ContentBox>
      </main>
    </div>
  );
}

export default App;
