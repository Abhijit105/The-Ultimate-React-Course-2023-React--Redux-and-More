import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

const skills = [
  { skill: "C++", level: "beginner", color: "#0dbbbf" },
  { skill: "Java", level: "intermediate", color: "#009c6b" },
  { skill: "HTML", level: "advanced", color: "#ff8916" },
  { skill: "CSS", level: "intermediate", color: "#9e146c" },
  { skill: "Bootstrap", level: "intermediate", color: "#22885c" },
  { skill: "Javascript", level: "intermediate", color: "#dd3224" },
  { skill: "React", level: "beginner", color: "#dbdcff" },
  { skill: "Git & GitHub", level: "beginner", color: "#020385" },
]

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

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
      alt="Abhijit Kumar"
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
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        ></Skill>
      ))}
    </ul>
  )
}

function Skill({ skill, level, color }) {
  const style = { backgroundColor: color }
  return (
    <li className="skill" style={style}>
      {skill} {level === "beginner" && "👶"}
      {level === "intermediate" && "👍"}
      {level === "advanced" && "💪"}
    </li>
  )
}
