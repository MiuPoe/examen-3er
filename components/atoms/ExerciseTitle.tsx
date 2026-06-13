import { ReactNode } from "react";
import "./ExerciseTitle.css";

interface ExerciseTitleProps {
  children: ReactNode;
}

function ExerciseTitle({ children }: ExerciseTitleProps) {
  return <h3 className="exercise-title">{children}</h3>;
}

export default ExerciseTitle;