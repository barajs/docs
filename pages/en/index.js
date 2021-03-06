/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const translate = require("../../server/translate.js").translate;

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>
          <translate desc="tag line">Created For Creating</translate>
        </small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">
              <translate>Explore</translate>
            </Button>
            <Button href={docUrl("introduction.html")}>
              <translate>Getting Started</translate>
            </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: "center" }}
      >
        <h2>Reactive Functional Programming</h2>
        <MarkdownBlock>
          <translate desc="project main feature">
            RFP make your application code more readable, extensible, and
            maintainable! Let's focus on the business logic and new features,
            Bara will take care the rest from beginning to the end of
            development cycle.
          </translate>
        </MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: (
              <translate>
                Coding like a talking in live, enjoy it instead of get your mood
                down everytime debugging.
              </translate>
            ),
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: "left",
            title: "Improve coding experience day by day."
          }
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              "This is another description of how this project is useful",
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: "right",
            title: "Description"
          }
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              "Each new Docusaurus project has **randomly-generated** theme colors.",
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: "right",
            title: "Randomly Generated Theme Colors"
          }
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: <translate>Control the flow of business logic</translate>,
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: "top",
            title: "Declarative"
          },
          {
            content: (
              <translate>Handling the JS event-based functional</translate>
            ),
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: "top",
            title: "Reactive"
          },
          {
            content: (
              <translate>
                Everything is a pure function. It is testable, extensible!
              </translate>
            ),
            image: `${baseUrl}img/undraw_tweetstorm.svg`,
            imageAlign: "top",
            title: "Functional"
          },
          {
            content: (
              <translate>
                Build application using Portion, each one present for a
                pluggable module.
              </translate>
            ),
            image: `${baseUrl}img/undraw_building_blocks.svg`,
            imageAlign: "top",
            title: "Portion"
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users.html")}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

Index.defaultProps = {
  language: "en"
};

module.exports = Index;
