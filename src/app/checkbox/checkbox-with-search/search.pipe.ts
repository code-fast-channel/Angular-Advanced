import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(list: any = [], value: any =[], key:any= []): any {
    value.forEach((name:any, index:any) => {
      console.log('sadfasdf',name)
      if (name) {
        list = list.filter((item:any) => {
          return (item[key[index]]
            .toString()
            .toLowerCase()
            .indexOf(name?.toString().toLowerCase()) !== -1)
        });
      }
    });
    return list;
  }

  
}

// or

// transform(list: any[], value: [], key: []): any {
//     value.forEach((name, index) => {
//       if (name) {
//         list = list.filter((item) => {
//           return (item[key[index]]
//             .toString()
//             .toLowerCase()
//             .indexOf(name.toString().toLowerCase()) !== -1)
//         });
//       }
//     });
//     return list;
//   }