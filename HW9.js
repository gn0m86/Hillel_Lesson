// ДЗ1

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function random(min, max) {
  let result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
}

function myBlend(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    let id = random(0, arr.length - 1);
    let temp = arr[id];
    arr[id] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

console.log("Origin Array", arr);
console.log("Blend Array", myBlend(arr));

//ДЗ2

const company = {
  name: "Велика Компанія",
  type: "Головна компанія",
  platform: "Платформа для продажу квитків",
  sellsSolution: "Рішення для продажу квитків",
  clients: [
    {
      name: "Клієнт 1",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 1.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Клієнт 1.1.1",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
            {
              name: "Клієнт 1.1.2",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
          ],
        },
        {
          name: "Клієнт 1.2",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
          partners: [
            {
              name: "Клієнт 1.2.3",
              type: "subSubCompany",
              uses: "Рішення для продажу квитків",
              sells: "Рішення для продажу квитків",
            },
          ],
        },
      ],
    },
    {
      name: "Клієнт 2",
      type: "subCompany",
      uses: "ПО для продажу квитків",
      sells: "Рішення для продажу квитків",
      partners: [
        {
          name: "Клієнт 2.1",
          type: "subSubCompany",
          uses: "Рішення для продажу квитків",
          sells: "Рішення для продажу квитків",
        },
      ],
    },
  ],
};

function findValueByKey(a, client) {
  if (a.name.toUpperCase() === client.toUpperCase()) {
    return a;
  }
  if (a.clients) {
    for (let i = 0; i < a.clients.length; i++) {
      let result = findValueByKey(a.clients[i], client);
      if (result) {
        return result;
      }
    }
  }
  if (a.partners) {
    for (let i = 0; i < a.partners.length; i++) {
      let result = findValueByKey(a.partners[i], client);
      if (result) {
        return result;
      }
    }
  }
}

const find = findValueByKey(company, "КЛієнт 1.2");

if (find) {
  console.log(find);
} else {
  console.log("client not found");
}
