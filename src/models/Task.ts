/*****************************
 * Sober Sailor - The online Party Game
 * Copyright (c) 2021.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export interface Task {
  id: string;
  singleTarget: boolean;
  multiAnswer: boolean;
}

export type Question = string;
export type Answer = string;

export type MultiAnswer = {
  id: number;
  answer: Answer;
  rightAnswer?: boolean;
};

export type SingleAnswerTasksExternal = {
  [key: string]: Question;
};

export type SingleAnswerTasks = Map<number, Question>;

export interface IMultiAnswerQuestion {
  question: Question;
  answers: MultiAnswer[];
}

export class MultiAnswerQuestion implements IMultiAnswerQuestion {
  constructor(readonly question: Question, readonly answers: MultiAnswer[]) {}

  // static parse(input: string): MultiAnswerQuestion {
  //     const parsed: IMultiAnswerQuestion = JSON.parse(input);
  //     return new MultiAnswerQuestion(parsed.question, parsed.answers);
  // }
}

export type MultiAnswerTaskExternal = {
  [key: string]: MultiAnswerQuestion;
};

export type MultiAnswerTask = Map<number, MultiAnswerQuestion>;
