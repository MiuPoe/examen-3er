import "./ExerciseDetails.css";

interface ExerciseDetailsProps {
  series: number;
  reps: number;
}

function ExerciseDetails({ series, reps }: ExerciseDetailsProps) {
  return (
    <span className="exercise-details">
      {series} séries x {reps} repetições
    </span>
  );
}

export default ExerciseDetails;