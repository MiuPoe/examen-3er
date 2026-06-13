export interface Exercise {
  id: number;
  name: string;
  series: number;
  reps: number;
  image: string;
}

const exercises: Exercise[] = [
  { id: 1, name: "Puxada frontal",     series: 3, reps: 12, image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=200&h=200&fit=crop" },
  { id: 2, name: "Remada curvada",     series: 3, reps: 12, image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&h=200&fit=crop" },
  { id: 3, name: "Remada unilateral",  series: 3, reps: 12, image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200&h=200&fit=crop" },
  { id: 4, name: "Levantamento terra", series: 3, reps: 12, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=200&fit=crop" },
];

export default exercises;