import { Formik, Form } from "formik";
import { PatternFormat } from "react-number-format";
import React, { useRef, useState } from "react"
import * as yup from "yup";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";

import { TabPanel } from "../components/TabPanel";
import debPortrait from "../images/deb_portrait.jpg";
import header from "../images/harvest_basket.jpg";
import logo from "../images/logo.jpg";
import logoWithText from "../images/logo_w_text.png";

import "./index.scss";

const IndexPage = () => {
  const topRef = useRef(null);
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <main id="top" ref={topRef}>
      <div id="menu">
        <Button onClick={() => topRef.current?.scrollIntoView()} disableRipple>
          <img
            src={logoWithText}
            style={{ height: '50px' }}
          />
        </Button>
        <a href="#meet-deb">Meet Deb!</a>
        <a href="#course-information">Course Information</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>
      <section id="header">
        <img src={header} />
        <h1>Let's Get Dirty!</h1>
        <h2>Grow it Organic</h2>
      </section>
      <div id="body">

        <div id="content">
          <section id="content2">
            <p>
              <b>Let's Get Dirty! Grow it Organic</b> is an <b>educational</b> series of workshops for business and government wellness programs, schools,
              and private groups. Founder and Workshop Leader Deb Kates, a lifetime organic grower, helps everyone dig in to the science and art of growing
              healthy food without harmful chemicals. Deb's warm and direct approach helps people enjoy the learning process and stay committed to applying it.
            </p>
            <p>Growing that head of lettuce from seed to salad bowl?  <b>Good!</b></p>
            <p>Growing it without artificial fertilizers and toxic pesticides?  <b>Even better!</b></p>
            <p>Loving learning while doing it? <b>The best!</b></p>
            <h1 className="flex fancy"><hr />Why?<hr /></h1>
            <p>
              Gardening helps ease the mind, so you can slow down to catch up with life. Interest in organics has been exploding because, in addition to health
              benefits, people want to know where their food comes from in times of unpredictable weather, economy, and food safety. This healthy activity also
              promotes stress relief, improved mood and mental outlook, saving money, burning calories, and learning first-hand about good nutrition.
            </p>
            <h1 className="flex fancy"><hr />Where?<hr /></h1>
            <p>
              Businesses, municipal governments, medical facilities, and other entities offer <b>Let's Get Dirty! Grow it Organic</b> sessions for a
              fun and unique twist on being healthy. They are full of useful and easy-to-understand information, delivered by Deb with humor and a wealth of
              knowledge. Take a look at our list of <a href="#meet-deb">current and past clients</a>!
            </p>
            <h1 className="flex fancy"><hr />What?<hr /></h1>
            <p>
              From starting seeds indoors, transplanting, and planting schedules,  to raised beds, Nature's garden helpers, how-to for small spaces, safe pest
              controls, and fall crops, it's always the right time to connect with the soil, polish that green thumb, and get growing. Don't have a green thumb?
              Not sure where to start? <b>Deb can help!</b>
            </p>
          </section>

          <hr id="meet-deb" />

          <h1>Meet Deb!</h1>
          <section id="content2">
            <img src={debPortrait} className="responsive-img" style={{ padding: '10px', height: 'auto', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4), 0 15px 40px rgba(0, 0, 0, 0.15)' }} />
            <p>Deborah Kates is a third-generation gardener and Certified Master Composter who has been growing organically for almost fifty years.</p>
            <p>She loves turning people on to...</p>
            <ul>
              <li>The magic of watching something grow from a tiny seedling to delicious and healthy food on the table</li>
              <li>A new or renewed appreciation of Nature</li>
              <li>Discovering the amazing array of approaches and tricks which help make an organic garden and great soil happen.</li>
            </ul>
            <p><b>Experience counts!</b> See our past and present clients below:</p>
            <p>Aclaris Therapeutics, Aqua America, Ardent Federal Credit Union, the Chester County Government, Chester County Hospital, Brandywine Hospital, the Coatesville Veterans Administration Medical Center, DSM Biomedical, Independence Blue Cross, the National Iron and Steel Heritage Museum, The Pennsylvania Dept. of Environmental Resources, Shire Pharmaceuticals, Sikorsky Aircraft Corp., Valley Forge Historical Park, and Weston Solutions.  In addition:   ACAC Fitness Center, Chester County Night School, the Chester County Public Library system, Downingtown Area Recreation Consortium, Kimberton Whole Foods, Montgomery County Community College, and the Twin Valleys and Valley Garden Clubs, as well as farmer's markets, senior centers, and private groups in the Philadelphia region.</p>
          </section>

          <hr id="course-information" />

          <h1>Course Information</h1>
          <section id="content2">
            <p>
              The <b>Let's Get Dirty! Grow it Organic</b> program is typically comprised of a monthly series of one-hour sessions which
              chronologically follows the natural rhythms of the growing seasons, from early Spring to late Fall.
            </p>
            <p>
              The following is an example course "syllabus" for eight months of <b>Let's Get Dirty! Grow it Organic</b>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Tabs
                value={currentTab}
                onChange={(e, newValue) => setCurrentTab(newValue)}
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              >
                <Tab label="March" />
                <Tab label="April" />
                <Tab label="May" />
                <Tab label="June" />
                <Tab label="July" />
                <Tab label="August" />
                <Tab label="September" />
                <Tab label="October" />
              </Tabs>
              <Paper style={{ padding: '1rem' }}>
                <TabPanel value={currentTab} index={0} class="flex-auto">
                  <ul>
                    <li>Series introduction: Why growing organic is healthier for you and better for our world</li>
                    <li>Location, location, location: Site your growing space for the best results</li>
                    <li>What and how to plant in the merry month of March</li>
                    <li>Don't guess - get a soil test: Learn cool info about your growing space and how to improve it</li>
                  </ul>
                </TabPanel>
                <TabPanel value={currentTab} index={1} class="flex-auto">
                  <ul>
                    <li>Raised beds: To know 'em is to love 'em</li>
                    <li>Companion growing: A seating chart for plants so there's no fighting!</li>
                    <li>Growing in small spaces: Balcony, deck, windowsill, anywhere!</li>
                  </ul>
                </TabPanel>
                <TabPanel value={currentTab} index={2} class="flex-auto">
                  <ul>
                    <li>Ooh-la-la tomatoes: A little history, and how to transplant, fertilize, and handle problems</li>
                    <li>Soil: What's in it and why, and help make it even better with...</li>
                    <li>Compost: Create your own "black gold"</li>
                  </ul>
                </TabPanel>
                <TabPanel value={currentTab} index={3} class="flex-auto">
                  <ul>
                    <li>Marvelous mulch</li>
                    <li>Organic fertilizers</li>
                    <li>Safer pest controls - leave the toxics alone</li>
                  </ul>
                </TabPanel>
                <TabPanel value={currentTab} index={4} class="flex-auto">
                  <ul>
                    <li>Garden friends and enemies</li>
                    <li>Save seeds! Have your own vegetable and flower seeds for fall planting and for next year</li>
                  </ul>
                </TabPanel>
                <TabPanel value={currentTab} index={5} class="flex-auto">
                  <ul>
                    <li>Plant it now to enjoy later: Get ready for fall and winter growing</li>
                    <li>Water the correct way to get the most out of every drop</li>
                    <li>Weeds: They're (always) heeeere - non-toxic ways to deal with them</li>
                  </ul>
                </TabPanel>
                <TabPanel value={currentTab} index={6} class="flex-auto">
                  <ul>
                    <li>Get the buzz on bees - pollinators supreme</li>
                    <li>Vampires in the neighborhood? Who ya gonna call...garlic, of course!</li>
                    <li>Bring a food friend: Show-and-tell with a vegetable or fruit from your garden</li>
                  </ul>
                </TabPanel>
                <TabPanel value={currentTab} index={7} class="flex-auto">
                  <ul>
                    <li>Late fall and winter plant protection to keep the harvest going</li>
                    <li>Breathe easier: House plants to clean the air indoors and lift your mood</li>
                    <li>Organic flower growing: Plan and nurture your colorful dreams for next year</li>
                  </ul>
                </TabPanel>
              </Paper>
            </div>

            <ul>
              <li>Each session is approximately forty-five to fifty-five minutes (depending on client needs), followed by a Q&amp;A</li>
              <li>Sessions can be monthly or biweekly</li>
              <li>Maximum of nine monthly sessions beginning in February</li>
              <li>Remote sessions via Zoom or Microsoft Teams</li>
              <li>In-person sessions available in a 30-mile radius from western Chester County, or a location in Center City Philadelphia</li>
              <li>Each one-hour session is $400</li>
              <li>5% discount for government entities, schools, and for any client that commits to a program of four or more sessions!</li>
              <li>Adjusted rates for non-profit organizations and groups</li>
            </ul>

            <p>The program can also be <b>customized</b> according to client needs and scheduling.</p>
          </section>

          <hr id="testimonials" />

          <h1>Testimonials</h1>
          <Paper style={{ padding: '1rem' }}>
            <p className="testimonials">
              "We have been working with Deb for almost a year now and I can't say enough about her. She is AMAZING, and a wealth of information! I would
              HIGHLY recommend her gardening workshops for any wellness program, and for anyone who likes to garden, or would like to learn. Engaging,
              entertaining, and informative! We love her!"
              <i style={{ display: "flex", justifyContent: "end", textAlign: 'right' }}>
                Gina Reed<br />
                Assistant to the President<br />
                Aclaris Therapeutics
              </i>
            </p>
          </Paper>

          <Paper style={{ padding: '1rem', marginTop: '20px' }}>
            <p className="testimonials">
              "Deb Kates and the <b>Let's Get Dirty!</b> program has been providing Independence Blue Cross with high-energy, fun-filled, informative
              organic gardening seminars for many years. Our associates learn ways to stay active and healthy while appreciating nature, improving the
              environment, cultivating home gardens and nourishing their lives. The lively sessions given by Deb explain how to prep our garden plots,
              when to mulch, water &amp; harvest, and how to savor our bounty all year long. It's amazing how much knowledge can be shared by one person! <b>Let's
                Get Dirty!</b> was so well attended, we added the series to another regional site."
              <i style={{ display: "flex", justifyContent: "end", textAlign: 'right' }}>
                Janine A. Brandolo<br />
                Preventive Health and Wellness<br />
                Independence Blue Cross
              </i>
            </p>
          </Paper>

          <Paper style={{ padding: '1rem', marginTop: '20px' }}>
            <p className="testimonials">
              "Deb of <b>Let's Get Dirty!</b> makes getting your hands "dirty" fun. She is excited about gardening and provides many interesting comments
              along the way. The Veterans loved her and her enthusiasm. Veterans who did not participate in other gardening projects enjoyed Deb's class and
              became involved beyond expectations."
              <i style={{ display: "flex", justifyContent: "end", textAlign: 'right' }}>
                Wanda Brown<br />
                Recreation Therapist<br />
                Coatesville Veteran's Administration Medical Center
              </i>
            </p>
          </Paper>

          <Paper style={{ padding: '1rem', marginTop: '20px' }}>
            <p className="testimonials">
              "For the hot summer of 2013, speaker Deborah Kates was like a fresh breeze and refreshing rain shower. From her extensive gardening experience
              and careful research, she shared a wealth of ideas and tips on successful gardening through drought and deluge. She engaged everyone from our
              long-time gardeners to our newest club member, and I would highly recommend Deb to any group because she "gets" the topics you want addressed
              - plus she is amazingly professional, energetic and entertaining!"
              <i style={{ display: "flex", justifyContent: "end", textAlign: 'right' }}>
                Dr. June Allred<br />
                2013-14 President of Twin Valleys Garden Club<br />
                (the oldest garden club in Pennsylvania)
              </i>
            </p>
          </Paper>

          <hr id="contact" />

          <h1>Contact</h1>
          <p>
            Want <b>Let's Get Dirty! Grow it Organic</b> sessions at your place of business or workspace? Have any questions that aren't answered here? Please
            contact Deb directly at <b>610-384-2535</b>.
          </p>
          {/* <p>Alternatively, submit the information below and Deb will get in touch with you as soon as possible:</p>
          <Formik
            initialValues={{ name: '', company: '', email: '', phone: '', comments: 'Could you give me more information on...' }}
            validationSchema={yup.object().shape({
              name: yup
                .string()
                .required('Please enter your name so we know to whom we are reaching out!'),
              email: yup
                .string()
                .when('phone', {
                  is: (val) => !val,
                  then: () => yup.string().email('Please enter a valid email address').required('Please give us some way to reach back out to you!'),
                  otherwise: () => yup.string().email('Please enter a valid email address')
                }),
              phone: yup.string()
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(JSON.stringify(values));
              setSubmitting(false);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
              <Form action="https://formsubmit.co/bahamutn@aol.com" method="POST">
                <Paper elevation={3} style={{ padding: '1rem' }}>
                  <Grid container spacing={2}>
                    <Grid size={12}>
                      <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                        fullWidth
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        id="company"
                        label="Company or group"
                        variant="outlined"
                        value={values.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.company && Boolean(errors.company)}
                        helperText={touched.company && errors.company}
                        fullWidth
                      />
                    </Grid>
                    <Grid size={6}>
                      <TextField
                        id="email"
                        label="Email address"
                        variant="outlined"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        fullWidth
                      />
                    </Grid>
                    <Grid size={6}>
                      <PatternFormat
                        id="phone"
                        label="Phone number"
                        variant="outlined"
                        format="(###) ###-####"
                        mask="_"
                        customInput={TextField}
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                        fullWidth
                      />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        id="comments"
                        label="Comments, questions, etc."
                        variant="outlined"
                        multiline
                        rows={3}
                        value={values.comments}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.comments && Boolean(errors.comments)}
                        helperText={touched.comments && errors.comments}
                        fullWidth
                      />
                    </Grid>
                    <Grid offset="auto">
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Form>
            )}
          </Formik> */}
        </div>
      </div>
    </main>
  )
}

export default IndexPage;

export const Head = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap" rel="stylesheet" />
      <title>Let's Get Dirty!</title>
      <link rel="icon" type="image/x-icon" href={logo}></link>
    </>
  );
};
