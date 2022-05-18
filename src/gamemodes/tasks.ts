import { Task } from "../models/Task";

export enum TaskType {
  WHO_WOULD_RATHER = "whowouldrather",
  TRUTH_OR_DARE = "truthordare",
  TIC_TAC_TOE = "tictactoe",
  WOULD_YOU_RATHER = "wouldyourather",
}

export const tasks: Task[] = [
  {
    id: TaskType.WHO_WOULD_RATHER,
    targetCount: -1,
    multiAnswer: false,
  },
  {
    id: TaskType.TRUTH_OR_DARE,
    targetCount: 1,
    multiAnswer: false,
  },
  {
    id: TaskType.TIC_TAC_TOE,
    targetCount: 2,
    multiAnswer: false,
  },
  {
    id: TaskType.WOULD_YOU_RATHER,
    targetCount: -1,
    multiAnswer: true,
  },
];
