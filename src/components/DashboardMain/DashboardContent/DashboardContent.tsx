import { styled } from "@mui/system";
import DasboardCard from "./DashboardCard/DashboardCard";
import jsonData from "../../Sidebar/SidebarFolder/TreeData.json";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

const Dashboard = styled("div")({
  width: "100%",
  height: "80vh",
  padding: "30px 0",
});

const Row = styled("div")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
});

const DasboardContent = () => {
  const [parents, setParents] = useState<Array<any | null>>([]);
  const isChild = (asset: any) => {
    const treeData: any = jsonData;
    for (let i = 0; i < treeData.length; i++) {
      for (let j = 0; j < treeData[i].Relationships.length; j++) {
        if (asset.AssetId === treeData[i].Relationships[j].TargetAssetId) {
          return false;
        }
      }
    }
    return true;
  };

  useEffect(() => {
    const arr: Array<any | null> = [];
    jsonData.forEach((i) => (isChild(i) ? arr.push(i) : null));
    setParents(arr);
  }, []);

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const items: any = reorder(
      parents,
      result.source.index,
      result.destination.index,
    );

    setParents(items);
  };
  return (
    <Dashboard>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided) => (
            <Row
              ref={provided.innerRef}
              style={{
                margin: "0 10px",
                userSelect: "none",
              }}
              {...provided.droppableProps}
            >
              {parents.map((item, index) => (
                <Draggable
                  draggableId={item.AssetId}
                  key={item.AssetId}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                      }}
                    >
                      <DasboardCard item={item} />
                    </div>
                  )}
                </Draggable>
              ))}
            </Row>
          )}
        </Droppable>
      </DragDropContext>
    </Dashboard>
  );
};

export default DasboardContent;
//

// import React from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//
// // fake data generator
// const getItems = (count: any) =>
//   Array.from({ length: count }, (v, k) => k).map((k) => ({
//     id: `item-${k}`,
//     content: `item ${k}`,
//   }));
//
// // a little function to help us with reordering the result
// const reorder = (list: any, startIndex: any, endIndex: any) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);
//
//   return result;
// };
//
// const grid = 8;
//
// const getItemStyle = (isDragging: any, draggableStyle: any) => ({
//   userSelect: "none",
//   padding: grid * 2,
//   margin: `0 ${grid}px 0 0`,
//
//   // change background colour if dragging
//   background: isDragging ? "lightgreen" : "grey",
//
//   // styles we need to apply on draggables
//   ...draggableStyle,
// });
//
// const getListStyle = (isDraggingOver: any) => ({
//   background: isDraggingOver ? "lightblue" : "lightgrey",
//   display: "flex",
//   padding: grid,
//   overflow: "auto",
// });
//
// class App extends React.Component<{}, { [key: string]: any }> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       items: getItems(6) as any,
//     };
//     this.onDragEnd = this.onDragEnd.bind(this);
//   }
//
//   onDragEnd(result: any) {
//     // dropped outside the list
//     if (!result.destination) {
//       return;
//     }
//
//     const items: any = reorder(
//       this.state.items,
//       result.source.index,
//       result.destination.index,
//     );
//
//     this.setState({
//       items,
//     });
//   }
//
//   // Normally you would want to split things out into separate components.
//   // But in this example everything is just done in one place for simplicity
//   render() {
//     return (
//       <DragDropContext onDragEnd={this.onDragEnd}>
//         <Droppable droppableId="droppable" direction="horizontal">
//           {(provided: any, snapshot: any) => (
//             <div
//               ref={provided.innerRef}
//               style={getListStyle(snapshot.isDraggingOver)}
//               {...provided.droppableProps}
//             >
//               {this.state.items.map((item: any, index: any) => (
//                 <Draggable key={item.id} draggableId={item.id} index={index}>
//                   {(provided: any, snapshot: any) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       style={getItemStyle(
//                         snapshot.isDragging,
//                         provided.draggableProps.style,
//                       )}
//                     >
//                       {item.content}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     );
//   }
// }
//
// export default App;
