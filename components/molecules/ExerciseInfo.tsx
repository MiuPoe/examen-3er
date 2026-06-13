import ExerciseTitle from "@/components/atoms/ExerciseTitle";
import ExerciseDetails from "@/components/atoms/ExerciseDetails";
import "./ExerciseInfo.css";

interface ExerciseInfoProps {
  name: string;
  series: number;
  reps: number;
}

function ExerciseInfo({ name, series, reps }: ExerciseInfoProps) {
  return (
    <div className="exercise-info">
      <ExerciseTitle>{name}</ExerciseTitle>
      <ExerciseDetails series={series} reps={reps} />
    </div>
  );
}

export default ExerciseInfo;