export interface Exercise {
  id: number;
  name: string;
  series: number;
  reps: number;
  image: string;
}

const exercises: Exercise[] = [
  { id: 1, name: "Puxada frontal",     series: 3, reps: 12, image: "/images/imagen1pesas.png" },
  { id: 2, name: "Remada curvada",     series: 3, reps: 12, image: "/images/imagen2pesas.png" },
  { id: 3, name: "Remada unilateral",  series: 3, reps: 12, image: "/images/imagen3pesas.png" },
  { id: 4, name: "Levantamento terra", series: 3, reps: 12, image: "/images/imagen4pesas.png" },
];

export default exercises;