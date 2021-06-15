<template>
  <div class="resume">
    <h1 class="page-title">
      <span>Resume</span>
    </h1>
    <div class="section-to-print">
      <div class="resume-title">
        Nicholas Fisher
        <span>Web Devleoper</span>
      </div>

      <button class="std-btn print-btn not-on-print" onclick="window.print();">
        <fa :icon="['fas', 'print']"/>
        <span>Print</span>
      </button>

      <div class="resume-section a">
        <div class="title not-on-print">
          <fa :icon="['fas', 'user']"/>
          <span>About Myself</span>
        </div>
        <div class="card-container">
          <div class="info-card">
            <div class="title on-print">Passionate About Web Development</div>
            <p
              class="on-print"
            >Web development is really fun. The tools are better than they've ever been, and single a well-rounded web developer can build a landscape changing product in a matter of months. Even with an abundance of investment and excitement in tech companies, there's still so many problems to solve. The more developers there are who're trying to get better at what they do, the faster we can solve these problems.</p>
            <div class="personal-info">
              <fa :icon="['fas', 'mobile-android-alt']"/>
              <span>(647) 448 8243</span>
            </div>
            <div class="personal-info">
              <fa :icon="['fas', 'inbox']"/>
              <span>avidnick@gmail.com</span>
            </div>
            <div class="personal-info">
              <fa :icon="['fas', 'globe']"/>
              <span>www.nicholasfisher.me</span>
            </div>
            <div class="personal-info">
              <fa :icon="['fas', 'clock']"/>
              <span>8+ years web development experience</span>
            </div>
            <div class="personal-info">
              <fa :icon="['fas', 'handshake']"/>
              <span>Open to contract, full-time, or part-time work</span>
            </div>
          </div>
        </div>
      </div>

      <div class="resume-section b">
        <div class="title">
          <fa :icon="['fas', 'briefcase']"/>
          <span>Work Experience</span>
        </div>
        <div class="card-container">
          <div class="info-card">
            <div class="title">Freelancing Full-Stack Dev</div>
            <div class="location-duration">
              <div class="location">
                <fa :icon="['fas', 'map-marker']"/>
                <span>Toronto, ON</span>
              </div>
              <div class="duration">
                <fa :icon="['fas', 'calendar-alt']"/>
                <span>Dec 2018 - Present</span>
              </div>
            </div>
            <ul>
              <li>Developed and designed various websites.</li>
              <li>Built a complex real-time ordering system using Firebase serverless technology: <a href="https://sitch.cards">tapmenu.ca</a>.</li>
              <li>Built a sharing platform called Sitch: <a href="https://sitch.cards">sitch.cards</a>.</li>
              <li>Built an NFC utility web app.</li>
              <li>Built a real time chat application for teachers and students</li>
              <li>Added node.js experience by building express servers</li>
              <li>Added native app development to my toolkit by building various Flutter apps</li>
            </ul>
          </div>
          <div class="info-card">
            <div class="title">Front-End Web Dev at Skrumble</div>
            <div class="location-duration">
              <div class="location">
                <fa :icon="['fas', 'map-marker']"/>
                <span>Toronto, ON</span>
              </div>
              <div class="duration">
                <fa :icon="['fas', 'calendar-alt']"/>
                <span>Feb 2018 - Dec 2018</span>
              </div>
            </div>
            <ul>
              <li>Worked on a real-time chat application that competed with Slack.</li>
              <li>Mentored junior devs.</li>
              <li>Learned React intimately.</li>
            </ul>
          </div>
          <div class="info-card">
            <div class="title">Front-End Web Dev at TheRedPin</div>
            <div class="location-duration">
              <div class="location">
                <fa :icon="['fas', 'map-marker']"/>
                <span>Toronto, ON</span>
              </div>
              <div class="duration">
                <fa :icon="['fas', 'calendar-alt']"/>
                <span>Aug 2016 - Oct 2017</span>
              </div>
            </div>
            <ul>
              <li>Lead a group of co-ops in architecting a Vue powered front end from scratch.</li>
              <li>Learned a lot about SEO since TheRedPin was a real estate company and real estate web traffic is very reliant on SEO.</li>
              <li>Familiarized myself with an Atlassian-centric development stack (Bitbucket, Jira).</li>
            </ul>
          </div>

          <br>
          <br>
          <br>

          <div class="info-card">
            <div class="title">Front-End Web Dev at Prophix</div>
            <div class="location-duration">
              <div class="location">
                <fa :icon="['fas', 'map-marker']"/>
                <span>Mississauga, ON</span>
              </div>
              <div class="duration">
                <fa :icon="['fas', 'calendar-alt']"/>
                <span>Aug 2015 - Aug 2016</span>
              </div>
            </div>
            <ul>
              <li>Learned a great deal about modern best practices in front-end web development from an Object Sharp consultant.</li>
              <li>Familiarized myself with a Microsoft-centric development stack (Visual Studio, TFS, Skype, Windows, Sharepoint, One Drive).</li>
              <li>Worked within a large product team comprised of dozens of employees across product planning, quality assurance, and UX.</li>
            </ul>
          </div>
          <div class="info-card">
            <div class="title">Front-End Web Dev at Carrier's Edge</div>
            <div class="location-duration">
              <div class="location">
                <fa :icon="['fas', 'map-marker']"/>
                <span>Markham, ON</span>
              </div>
              <div class="duration">
                <fa :icon="['fas', 'calendar-alt']"/>
                <span>Feb 2014 - Jul 2014</span>
              </div>
            </div>
            <ul>
              <li>Modernized JS code by porting prototype.js to jQuery.</li>
              <li>Adapted Photoshop designs to functional web pages.</li>
            </ul>
          </div>

          <div class="info-card">
            <div class="title">Full Stack Developer at Blu Trumpet</div>
            <div class="location-duration">
              <div class="location">
                <fa :icon="['fas', 'map-marker']"/>
                <span>Toronto, ON</span>
              </div>
              <div class="duration">
                <fa :icon="['fas', 'calendar-alt']"/>
                <span>Apr 2012 - Mar 2013</span>
              </div>
            </div>
            <ul>
              <li>Working at a start-up I was exposed to both front-end and back-end software development.</li>
              <li>Benefited from the 1-on-1 tutelage of 3 very insightful senior programmers.</li>
              <li>Worked in an agile programming environment where we developed clean MVC adherent code via Ruby on Rails.</li>
              <li>Worked extensively with MySQL to run various reports for the business development staff.</li>
              <li>Took the initiative to create an automated reporting system of my own design for the business development staff.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="resume-section c">
        <div class="title">
          <fa :icon="['fas', 'book']"/>
          <span>Skills</span>
        </div>

        <div class="legend-container">
          <div class="legend info-card">
            <div class="set">
              <span>Proficient</span>
              <span>P</span>
            </div>
            <div class="set">
              <span>Intermediate</span>
              <span>I</span>
            </div>
            <div class="set">
              <span>Amateur</span>
              <span>A</span>
            </div>
          </div>
        </div>

        <div class="card-container">
          <div class="info-card">
            <div class="title">Languages</div>
            <div class="skill">
              <span>Javascript</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>TypeScript</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>HTML</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>CSS/SCSS</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Dart</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>SQL</span>
              <span>I</span>
            </div>
            <div class="skill">
              <span>Java</span>
              <span>I</span>
            </div>
            <div class="skill">
              <span>Python</span>
              <span>I</span>
            </div>
            <div class="skill">
              <span>C</span>
              <span>A</span>
            </div>
          </div>

          <div class="info-card">
            <div class="title">Frameworks and Services</div>
            <div class="skill">
              <span>Vue</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>VueX</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Vue Router</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>React</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Redux</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Firebase</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Firestore</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Flutter</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Express</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>AngularJS</span>
              <span>I</span>
            </div>
          </div>

          <br>

          <div class="info-card">
            <div class="title">Libraries</div>
            <div class="skill">
              <span>Storybook</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Cypress</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Vuetify</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Element</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Boostrap</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Foundation</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Material-UI</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>jQuery</span>
              <span>P</span>
            </div>
          </div>

          <br>

          <div class="info-card">
            <div class="title">Misc</div>
            <div class="skill">
              <span>NPM/Yarn</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Adobe Animate</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Pivotal</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Jira</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Github</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Bitbucket</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>TFS</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Windows</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>MacOS</span>
              <span>P</span>
            </div>
            <div class="skill">
              <span>Webpack</span>
              <span>I</span>
            </div>
          </div>
        </div>
      </div>

      <div class="resume-section d">
        <div class="title">
          <fa :icon="['fas', 'trophy']"/>
          <span>Accomplishments</span>
        </div>
        <div class="card-container">
          <div class="info-card">
            <ul>
              <li>Angelhack 2012 Toronto winner. Our team's prize included an all-expenses paid trip to San Francisco, and tours of the Google and Facebook campuses.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="resume-section e">
        <div class="title">
          <fa :icon="['fas', 'graduation-cap']"/>
          <span>Education</span>
        </div>
        <div class="card-container">
          <div class="info-card">
            <div class="location-duration">
              <div class="location">
                <fa :icon="['fas', 'map-marker']"/>
                <span>UofT, St. George Campus, Toronto, ON</span>
              </div>
              <div class="duration">
                <fa :icon="['fas', 'calendar-alt']"/>
                <span>Graduated April 2015</span>
              </div>
            </div>
            <ul>
              <li>Honours Bachelor of Science in Computer Science.</li>
              <li>Specialized in Computer Science (this basically means that both my major and minor were Computer Science).</li>
              <li>3.44 fourth year GPA.</li>
              <li>20.5/20 credits completed.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.section-to-print {
  svg {
    margin-right: 10px;
  }
  ul {
    padding-left: 20px;
  }
  li {
    margin: 5px 0;
  }
  br {
    display: none;
  }
  .resume-section > .title {
    font-family: h;
    text-transform: uppercase;
    font-size: 30px;
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .resume-section > .title > svg {
    margin-right: 25px;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .legend-container {
    display: flex;
    justify-content: center;
  }
  .legend {
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .legend .set {
    margin-right: 10px;
  }
  .legend .set span:last-child,
  .skill span:last-child {
    background-color: $theme-color1;
    border: 1px solid $theme-color1;
    color: #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    font-weight: bold;
  }
  .info-card .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .info-card {
    max-width: 550px;
    line-height: 20px;
    @include card-style();
    li {
      margin: 10px 0;
    }
  }
  svg {
    color: $theme-color1;
  }
  .location-duration {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    .location,
    .duration {
      margin-top: 10px;
    }
    svg {
      color: $theme-color1;
    }
  }
  .personal-info {
    margin: 10px 0;
  }
  .personal-info svg {
    width: 30px !important;
  }
  .skill {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .skill span:first-child {
    margin-right: 10px;
  }
  .resume-title {
    display: none;
    font-size: 20px;
    margin: 20px;
    text-align: center;
    font-weight: bold;
  }
  .resume-title span {
    font-size: 14px;
    margin-left: 10px;
    color: #888;
    border: none;
  }
  .std-btn.print-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    @media #{$mobile} {
      bottom: 60px;
    }
  }
  .print-btn svg {
    color: white;
  }
  .print-btn svg {
    margin-right: 10px;
  }
  .on-print {
    display: none;
  }
  @media print {
    .legend .set span:last-child,
    .skill span:last-child,
    .info-card,
    .resume-title,
    div {
      color: #333 !important;
    }
    br {
      display: initial;
    }
    .info-card {
      margin: 0;
      padding: 10px;
      border: none;
      line-height: 16px;
    }
    .info-card .title {
      font-size: 17px;
    }
    .not-on-print {
      display: none;
    }
    .on-print {
      display: block;
    }
    .resume-section > .title {
      font-size: 20px;
      margin: 10px;
    }
    .resume-section > .title > svg {
      margin-right: 10px;
    }
    .card-container {
      display: block;
    }
    .resume-section > .title {
      display: block;
    }
    .skill {
      display: inline-flex;
    }
    .skill span:first-child {
      margin-right: 3px;
      margin-left: 5px;
    }
    .legend-container {
      display: block;
    }
    .resume-title {
      display: block;
    }
    @page {
      size: auto; /* auto is the initial value */
      margin: 0; /* this affects the margin in the printer settings */
    }
    body {
      margin: 0 1.6cm;
    }
    .info-card {
      margin: 0;
      background-color: #fff;
      box-shadow: none;
      max-width: none;
    }
  }
}
</style>
