import React from "react";

export const DataItems = ({ map }) => {
  console.log(map);
  return (
    <>
      {data.data.length > 0 &&
        data.data.map((element, index) => {
          console.log(element);
          return (
            <li className="list-item" key={index}>
              {element.title}
            </li>
          );
        })}
    </>
  );
};

// const export DataItems = () => {
//   return (
//     <div>
//       {data.data.length > 0 &&
//         data.data.map((element, index) => {
//           console.log(element);
//           return (
//             <li className="list-item" key={index}>
//               {element.title}
//             </li>
//           );
//         })}
//     </div>
//   );
// };

// export default DataItems;
