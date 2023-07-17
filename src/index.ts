import { data } from "./files/data-rep";
import fs from "fs";

export interface Data {
  description: string;
  code: string | null;
}

const filterData: Data[] = [];

data.forEach((item, index) => {
  if (!filterData.find((element) => element.description === item.description)) {
    filterData.push({
      description: item.description,
      code: item.code,
    });
  } else {
    if (item.code) {
      const index = filterData.findIndex(
        (element) => element.description === item.description
      );
      filterData[index].code = item.code;
    }
    /* if (item.department_id) {
      const index = filterData.findIndex(
        (element) => element.name === item.name
      );
      filterData[index].department_id = item.department_id;
    } */
  }
});

// filterData.sort((a, b) => a.name.localeCompare(b.name));
// filterData.sort((a, b) => a.department_id - b.department_id);
filterData.sort((a, b) => a.description.localeCompare(b.description));

fs.writeFile("filterData.txt", JSON.stringify(filterData), (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
