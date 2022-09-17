export default function orderByProps(obj, sorting) {
//  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const initialArr = [];
  const sortedArr = [];

  sorting.forEach((item) => {
    initialArr.push({ key: item, value: obj[item] });
  });

  for (const item in obj) {
    if (!sorting.includes(item)) {
      sortedArr.push({ key: item, value: obj[item] });
    }
  }

  sortedArr.sort((a, b) => ((a.key > b.key) ? 1 : -1));

  return initialArr.concat(sortedArr);
}

/*

[
  {key: "name", value: "мечник"}, // порядок взят из массива с ключами
  {key: "level", value: 2}, // порядок взят из массива с ключами
  {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
  {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
  {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
]

// ["name", "level"]

*/
