import { Tabs } from "keep-react";
import video from "../videos/sample.mp4";
import { Button } from "keep-react";

const Tab = () => {
  return (
    <div className="flex ml-20 mt-5 mb-20">
      <Tabs activeLabel="one">
        <Tabs.List className="gap-60">
          <Tabs.Item label="one">Tab1</Tabs.Item>
          <Tabs.Item label="two">Tab2</Tabs.Item>
          <Tabs.Item label="three">Tab3</Tabs.Item>
          <Tabs.Item label="four">Tab4</Tabs.Item>
        </Tabs.List>
        <Tabs.Content label="one">
          <div className="flex justify-start gap-32">
          <video  width="750" height="500" controls autoPlay  muted >
            <source src={video} type="video/mp4" />
            </video>
            <div className="flex flex-col justify-center ">
              <Button size="sm" className="text-white  rounded p-2 px-10">Get Started</Button>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content label="two">
          <div className="flex justify-start gap-32">
            <video width="750" height="500" controls  autoPlay  muted >
              <source src={video} type="video/mp4" />
            </video>
            <div className="flex flex-col justify-center ">
              <button className="bg-blue-600 text-white  rounded p-2 px-10 hover:bg-blue-800">
                Get Started
              </button>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content label="three">
          <div className="flex justify-start gap-32">
          <video width="750" height="500" controls  autoPlay  muted >
              <source src={video} type="video/mp4" />
            </video>
            <div className="flex flex-col justify-center ">
              <button className="bg-blue-600 text-white  rounded p-2 px-10 hover:bg-blue-800">
                Get Started
              </button>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content label="four">
          <div className="flex justify-start gap-32">
          <video width="750" height="500" controls  autoPlay  muted >
              <source src={video} type="video/mp4" />
            </video>
            <div className="flex flex-col justify-center ">
              <button className="bg-blue-600 text-white  rounded p-2 px-10 hover:bg-blue-800">
                Get Started
              </button>
            </div>
          </div>
        </Tabs.Content>
      </Tabs>
    </div>
  );
};

export default Tab;
