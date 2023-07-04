import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AboutMe = () => {
  return (
    <div className="pt-24 ">
      <Tabs>
        <TabList className="text-center w-full bg-green-600 text-white">
          <Tab>
            <div className="px-8  py-3">EDUCATION</div>
          </Tab>
          <Tab>
            <div className="px-8 py-3 font-bold">PROFESSIONAL SKILLS</div>
          </Tab>
          <Tab>
            <div className="px-8 py-3">CERTIFICATE</div>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content ASFSADFASDFASDFAS1</h2>
        </TabPanel>
        <TabPanel>
              <div className="card  grid grid-cols-1 lg:grid-cols-3 w-full mx-auto  shadow-2xl ">
                <div className="card-body  ">
                    <h1 className="text-white text-3xl font-bold">Design</h1>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">HTML</span>
                    </label>
                    <progress className="progress  w-100 text-red-700 bg-orange-500" value="80" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">CSS</span>
                    </label>
                    <progress className="progress w-100  bg-orange-500" value="70" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Boostrap</span>
                    </label>
                    <progress className="progress w-100  bg-orange-500" value="70" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Tailwind</span>
                    </label>
                    <progress className="progress w-100  bg-orange-500" value="80" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Daisy UI</span>
                    </label>
                    <progress className="progress w-100  bg-orange-500" value="90" max="100"></progress>
                  </div>
                </div>
                <div className="card-body  ">
                <h1 className="text-white text-3xl font-bold">Development</h1>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">JavaScript</span>
                    </label>
                    <progress className="progress  w-100 text-red-700 bg-orange-500" value="70" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">ES6</span>
                    </label>
                    <progress className="progress  w-100 text-red-700 bg-orange-500" value="70" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">React.js</span>
                    </label>
                    <progress className="progress w-100  bg-orange-500" value="70" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Node.js</span>
                    </label>
                    <progress className="progress w-100  bg-orange-500" value="60" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">MongoDB</span>
                    </label>
                    <progress className="progress w-100  bg-orange-500" value="70" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Express.js</span>
                    </label>
                    <progress className="progress w-100  bg-orange-500" value="60" max="100"></progress>
                  </div>
                </div>
                <div className="card-body  ">
                <h1 className="text-white text-3xl font-bold">Tools</h1>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Firebase</span>
                    </label>
                    <progress className="progress  w-100 text-red-700 bg-orange-500" value="70" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Vercel</span>
                    </label>
                    <progress className="progress  w-100 text-red-700 bg-orange-500" value="70" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Netlify</span>
                    </label>
                    <progress className="progress  w-100 text-red-700 bg-orange-500" value="70" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Figma</span>
                    </label>
                    <progress className="progress w-100  bg-orange-500" value="70" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Github</span>
                    </label>
                    <progress className="progress w-100  bg-orange-500" value="60" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Stripe</span>
                    </label>
                    <progress className="progress w-100  bg-orange-500" value="70" max="100"></progress>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">VS Code</span>
                    </label>
                    <progress className="progress w-100  bg-orange-500" value="60" max="100"></progress>
                  </div>
                </div>
              </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AboutMe;
