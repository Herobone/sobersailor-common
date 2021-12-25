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

import * as fs from "fs";
import { MultiAnswerQuestion } from "../src/models/Task";
import * as console from "console";

try {
  const data = fs.readFileSync("./Tasks.json", "utf8");
  console.log(data);
  const quest = MultiAnswerQuestion.parseTasks(data);
  quest.forEach((value) => {
    console.log(value.question);
  });
} catch (err) {
  console.error(err);
}
