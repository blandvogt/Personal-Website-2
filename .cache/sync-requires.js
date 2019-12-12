const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/About.js"))),
  "component---src-pages-about-text-clubs-and-comps-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/AboutText/ClubsAndComps.js"))),
  "component---src-pages-about-text-college-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/AboutText/College.js"))),
  "component---src-pages-about-text-cs-club-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/AboutText/CSClub.js"))),
  "component---src-pages-about-text-high-school-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/AboutText/HighSchool.js"))),
  "component---src-pages-about-text-interests-1-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/AboutText/Interests1.js"))),
  "component---src-pages-about-text-interests-2-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/AboutText/Interests2.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Experience.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Projects.js"))),
  "component---src-pages-projects-binder-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Projects/Binder.js"))),
  "component---src-pages-projects-data-science-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Projects/DataScience.js"))),
  "component---src-pages-projects-website-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Projects/Website.js"))),
  "component---src-pages-projects-wi-move-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Projects/WiMove.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Skills.js"))),
  "component---src-pages-skills-back-end-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Skills/BackEnd.js"))),
  "component---src-pages-skills-front-end-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Skills/FrontEnd.js"))),
  "component---src-pages-skills-other-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Skills/Other.js"))),
  "component---src-pages-skills-overview-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Skills/Overview.js"))),
  "component---src-pages-skills-react-tools-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Skills/ReactTools.js"))),
  "component---src-pages-skills-salesforce-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Skills/Salesforce.js"))),
  "component---src-pages-website-js": hot(preferDefault(require("/Users/brianlandvogt/Code/website/src/pages/Website.js")))
}

