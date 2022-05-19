/*****************************
 * Sober Sailor - The online Party Game
 * Copyright (c) 2022.
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the
 * GNU Affero General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 * PURPOSE.  See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along with this program.
 * If not, see <https://www.gnu.org/licenses/>.
 */

export default class Util {
  /**
   * Convert a Map to a JSON-style object.
   *
   * **IMPORTANT:** The index of the map must be a string
   * @param map The map to be converted
   */
  static mapToObj<T>(map: Map<string, T>): { [key: string]: T } {
    const obj = Object.create(null);
    for (const [k, v] of map) {
      // We don’t escape the key '__proto__'
      // which can cause problems on older engines
      obj[k] = v;
    }
    return obj;
  }

  /**
   * Convert a JSON-style object map top a JavaScript Map
   * @param obj The object that will be converted to a map
   */
  static objToMap<T>(obj: { [key: string]: T }): Map<string, T> {
    const strMap: Map<string, T> = new Map();
    for (const k of Object.keys(obj)) {
      strMap.set(k, obj[k]);
    }
    return strMap;
  }

  /**
   * Convert a JSON-style object map top a JavaScript Map
   * This Object needs to be indexed with only numbers!
   * @param obj The object that will be converted to a map
   */
  static indexedObjectToMap<T>(obj: { [key: string]: T }): Map<number, T> {
    const map: Map<number, T> = new Map();
    for (const k of Object.keys(obj)) {
      map.set(Number(k), obj[k]);
    }
    return map;
  }

  static random(from: number, to: number): number {
    return Math.floor(Math.random() * to + from);
  }

  static randomCharOrNumber(): string {
    const num = this.random(0, 35);
    return this.charOrNumber(num);
  }

  static charOrNumber(num: number): string {
    return num < 26 ? String.fromCharCode(65 + num) : String(num - 26);
  }

  static randomCharOrNumberSequence(len: number): string {
    let sequence = "";

    for (let index = 0; index < len; index++) {
      sequence += this.randomCharOrNumber();
    }

    return sequence;
  }

  static getRandomKey<T>(collection: Map<T, unknown>): T {
    const keys = [...collection.keys()];
    return keys[Math.floor(Math.random() * keys.length)];
  }

  static getRandomItem<K, V>(set: Map<K, V>): [K, V] {
    const items = [...set];
    return items[Math.floor(Math.random() * items.length)];
  }

  static getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  static alphanumeric(text: string): RegExpMatchArray | null {
    const letters = /^[\da-z]+$/gi;
    return text.match(letters);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static hasKey<O>(obj: O, key: keyof any): key is keyof O {
    return key in obj;
  }

  static selectRandom<T>(obj: Array<T>): T {
    return obj[Util.random(0, obj.length)];
  }

  static getDateIn(years = 0, months = 0, days = 0): Date {
    const d = new Date();
    return new Date(
      d.getFullYear() + years,
      d.getMonth() + months,
      d.getDate() + days
    );
  }

  static countOccurrences<T>(array: T[]): Map<T, number> {
    const content: T[] = [];
    const count: number[] = [];
    let prev: T;

    const countMap: Map<T, number> = new Map<T, number>();

    array.sort();
    array.forEach((element) => {
      if (element !== prev) {
        content.push(element);
        count.push(1);
      } else {
        count[count.length - 1]++;
      }
      prev = element;
    });

    content.forEach((element, i) => {
      countMap.set(element, count[i]);
    });

    return countMap;
  }

  /// Filter method for removing an element from an array
  static arrayRemove<T>(arr: T[], value: T) {
    return arr.filter(function (geeks) {
      return geeks !== value;
    });
  }
}
