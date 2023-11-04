import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}

function Avatar() {
  return (
    <img
      src="microsoft_account_profile_picture.jfif"
      alt="photo of Abhijit Kumar"
      className="avatar"
    />
  )
}

function Intro() {
  return (
    <div>
      <h1>Abhijit Kumar</h1>
      <p>
        As a passionate learner, I'm constantly engaged in exploring new
        technologies, staying updated with industry trends, and fine-tuning my
        coding skills. I believe that the key to success in the ever-evolving
        field of Full Stack Development lies in adaptability and the willingness
        to embrace new challenges.
      </p>
    </div>
  )
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill className="skill" skill="C++" emoji="💪" bgcolor="#0dbbbf"></Skill>
      <Skill
        className="skill"
        skill="Java"
        emoji="💪"
        bgcolor="#009c6b"
      ></Skill>
      <Skill
        className="skill"
        skill="HTML"
        emoji="💪"
        bgcolor="#ff8916"
      ></Skill>
      <Skill className="skill" skill="CSS" emoji="👍" bgcolor="#9e146c"></Skill>
      <Skill
        className="skill"
        skill="Bootstrap"
        emoji="👍"
        bgcolor="#22885c"
      ></Skill>
      <Skill
        className="skill"
        skill="Javascript"
        emoji="💪"
        bgcolor="#dd3224"
      ></Skill>
      <Skill
        className="skill"
        skill="React"
        emoji="👍"
        bgcolor="#dbdcff"
      ></Skill>
      <Skill
        className="skill"
        skill="Git & GitHub"
        emoji="💪"
        bgcolor="#020385"
      ></Skill>
    </ul>
  )
}

function Skill(props) {
  const style = { backgroundColor: props.bgcolor }
  return (
    <li className="skill" style={style}>
      {props.skill} {props.emoji}
    </li>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
