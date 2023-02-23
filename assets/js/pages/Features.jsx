import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { MdFitnessCenter } from "react-icons/md";
import { IoFitnessSharp } from "react-icons/md";




const Features = () => {
  const style = { color: "white", fontSize: "3em" };
  return (
    <ScrollMenu>
      <div className="row">
        <div
          className="d-flex align-items-center bg-primary text-white px-5"
          style={{ minHeight: 300 }}
        >
          <div className="">
            <h2 className="text-white mb-3">Progression</h2>
            <ScrollMenu>
              <MdFitnessCenter style={style} />
              <p style={{ marginLeft: 5 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                suscipit orci velit id libero
              </p>
            </ScrollMenu>
          </div>
        </div>
      </div>
      <div
        className="d-flex align-items-center bg-Secondary text-white px-5"
        style={{ minHeight: 300 }}
      >
        <div className="">
          <h2 className="text-white mb-3">Workout</h2>
          <ScrollMenu>
            <MdFitnessCenter style={style} />
            <p style={{ marginLeft: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              suscipit orci velit id libero
            </p>
          </ScrollMenu>
        </div>
      </div>
      <div
        className="d-flex align-items-center bg-danger text-white px-5"
        style={{ minHeight: 300 }}
      >
        <div className="">
          <h2 className="text-white mb-3">Nutrition</h2>
          <ScrollMenu>
            <MdFitnessCenter style={style} />
            <p style={{ marginLeft: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              suscipit orci velit id libero
            </p>
          </ScrollMenu>
        </div>
      </div>
    </ScrollMenu>
  );
};

export default Features;
