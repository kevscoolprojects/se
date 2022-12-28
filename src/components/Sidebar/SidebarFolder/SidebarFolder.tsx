import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import jsonData from "./TreeData.json";
/*import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem, {
  TreeItemProps,
  useTreeItem,
  TreeItemContentProps,
} from '@mui/lab/TreeItem';
import clsx from 'clsx';
import Typography from '@mui/material/Typography';
import { treeData } from './TreeBody';


const CustomContentRoot = styled('div')(({ theme }) => ({
  WebkitTapHighlightColor: 'transparent',
  '&:hover, &.Mui-disabled, &.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused, &.Mui-selected:hover':
    {
      backgroundColor: 'transparent',
    },
  [`& .MuiTreeItem-contentBar`]: {
    position: 'absolute',
    width: '100%',
    height: 24,
    left: 0,
    '&:hover &': {
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-disabled &': {
      opacity: theme.palette.action.disabledOpacity,
      backgroundColor: 'transparent',
    },
    '&.Mui-focused &': {
      backgroundColor: theme.palette.action.focus,
    },
    '&.Mui-selected &': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity,
      ),
    },
    '&.Mui-selected:hover &': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity,
      ),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    '&.Mui-selected.Mui-focused &': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity,
      ),
    },
  },
}));

const CustomContent = React.forwardRef(function CustomContent(
  props: TreeItemContentProps,
  ref,
) {
  const {
    className,
    classes,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon,
  } = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection,
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    preventSelection(event);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleExpansion(event);
    handleSelection(event);
  };

  return (
    <CustomContentRoot
      className={clsx(className, classes.root, {
        'Mui-expanded': expanded,
        'Mui-selected': selected,
        'Mui-focused': focused,
        'Mui-disabled': disabled,
      })}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      ref={ref as React.Ref<HTMLDivElement>}
    >
      <div className="MuiTreeItem-contentBar" />
      <div className={classes.iconContainer}>{icon}</div>
      <Typography component="div" className={classes.label}>
        {label}
      </Typography>
    </CustomContentRoot>
  );
});

function CustomTreeItem(props: TreeItemProps) {
  return <TreeItem ContentComponent={CustomContent} {...props} />;
}

export default function BarTreeView() {
  return (
    // create a recursion function
    // stoping/skip criteria would be, if node is already rendered then skip
    // recursion criteria would be simply relationships array length
    <TreeView
      aria-label="icon expansion"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, position: 'relative' }}
    >
        { treeData.map(data=>{
            if(data.Relationships.length > 0){
            return <CustomTreeItem nodeId={data?.AssetId} label={data?.AssetName}>
                {
                   data.Relationships.map((child:any)=>{
                    //if(child.TargetAssetId == data?.AssetId)
                        return <CustomTreeItem nodeId={child?.TargetAssetId} label={data?.AssetName}></CustomTreeItem>
                    })
                }
            </CustomTreeItem>
}})}
      <CustomTreeItem nodeId="1" label="Applications">
        <CustomTreeItem nodeId="2" label="Calendar" />
        <CustomTreeItem nodeId="3" label="Chrome" />
        <CustomTreeItem nodeId="4" label="Webstorm" />
      </CustomTreeItem>
      <CustomTreeItem nodeId="5" label="Documents">
        <CustomTreeItem nodeId="10" label="OSS" />
        <CustomTreeItem nodeId="6" label="MUI">
          <CustomTreeItem nodeId="7" label="src">
            <CustomTreeItem nodeId="8" label="index.js" />
            <CustomTreeItem nodeId="9" label="tree-view.js" />
          </CustomTreeItem>
        </CustomTreeItem>
      </CustomTreeItem>
    </TreeView>
  );
}*/

import React from "react";
import Tree from "./Tree";
import { treeData } from "./TreeBody";

const jsTreeData = JSON.parse(JSON.stringify(treeData));
const nodesToDelete = [];
const recursiveRelationship = (Relationships: any, rest: any) => {
  if (Relationships && Relationships.length > 0) {
    const children = Relationships.map((node: any) => {
      const childNode = jsTreeData.find(
        (item: any) => item.AssetId === node.TargetAssetId,
      );

      if (childNode) nodesToDelete.push(node.TargetAssetId);
      return childNode;
    });
    return { ...rest, children };
  }
  // recursiveRelationship(Relationships,rest)
};
const organizedTreeData = jsTreeData.map((treeNode: any) => {
  const { Relationships, ...rest } = treeNode;
  //recursiveRelationship(Relationships,rest)

  if (Relationships && Relationships.length > 0) {
    const children = Relationships.map((node: any) => {
      const childNode = jsTreeData.find(
        (item: any) => item.AssetId === node.TargetAssetId,
      );

      if (childNode) nodesToDelete.push(node.TargetAssetId);
      return childNode;
    });
    return { ...rest, children };
  }
  return { ...rest };
  // debugger;
});
// debugger;
// const treeData = [
//   {
//     key: "0",
//     label: "Documents",
//     icon: "fa fa-folder",
//     title: "Documents Folder",
//     children: [
//       {
//         key: "0-0",
//         label: "Document 1-1",
//         icon: "fa fa-folder",
//         title: "Documents Folder",
//         children: [
//           {
//             key: "0-1-1",
//             label: "Document-0-1.doc",
//             icon: "fa fa-file",
//             title: "Documents Folder",
//           },
//           {
//             key: "0-1-2",
//             label: "Document-0-2.doc",
//             icon: "fa fa-file",
//             title: "Documents Folder",
//           },
//           {
//             key: "0-1-3",
//             label: "Document-0-3.doc",
//             icon: "fa fa-file",
//             title: "Documents Folder",
//           },
//           {
//             key: "0-1-4",
//             label: "Document-0-4.doc",
//             icon: "fa fa-file",
//             title: "Documents Folder",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     key: "1",
//     label: "Desktop",
//     icon: "fa fa-desktop",
//     title: "Desktop Folder",
//     children: [
//       {
//         key: "1-0",
//         label: "document1.doc",
//         icon: "fa fa-file",
//         title: "Documents Folder",
//       },
//       {
//         key: "0-0",
//         label: "documennt-2.doc",
//         icon: "fa fa-file",
//         title: "Documents Folder",
//       },
//     ],
//   },
//   {
//     key: "2",
//     label: "Downloads",
//     icon: "fa fa-download",
//     title: "Downloads Folder",
//     children: [],
//   },
// ];

// const TreeList = () => {
//   return (
//     <>

//       <div className="row">
//         <div className="col text-center">
//           <h2>Tree Visualization component</h2>
//           <p className="mt-3">
//             <div className="row mt-3 d-flex justify-content-center">
//               <div className="col-lg-8 text-left text-dark">
//                 <Tree data={treeData} />
//               </div>
//             </div>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

const TreeList = () => {
  const ModifiedTreeItem = (item: any) => {
    if (item.Relationships[0].Relation === "contains") {
      const some: any = jsonData.find(
        (s) => s.AssetId === item.Relationships[0].TargetAssetId,
      );
      console.log("ran here: ", item);

      return (
        <TreeItem label={item.AssetName} nodeId={item.AssetId}>
          {some?.Relationships[0].Relation === "contains" ? (
            ModifiedTreeItem(some)
          ) : (
            <TreeItem nodeId={item.AssetId} label={item.AssetName} />
          )}
        </TreeItem>
      );
    } else {
      return <TreeItem label={item.AssetName} nodeId={item.AssetId} />;
    }
  };
  return (
    <TreeView
      aria-label="multi-select"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      multiSelect
      sx={{ height: 216, flexGrow: 1, maxWidth: 500, overflowY: "auto" }}
    >
      {jsonData.map((item: any) => {
        const relations: any[] = item.Relationships;
        const relationData: any[] = [];

        for (let i = 0; i < relations.length; i++) {
          if (relations[i].Relation === "contains") {
            const found = jsonData.find(
              (s) => s.AssetId === relations[i].TargetAssetId,
            );
            // console.log(
            // 	"something is here: ",
            // 	jsonData.find(
            // 		(s) => s.AssetId === relations[i].TargetAssetId,
            // 	),
            // );
            relationData.push(found);
          } else {
            // console.log("i don't know");
          }
        }

        return item.Relationships[0].Relation === "contains" ? (
          <TreeItem label={item.AssetName} nodeId={item.AssetId}>
            {relationData.map((item) =>
              item.Relationships[0].Relation === "contains" ? (
                ModifiedTreeItem(item)
              ) : (
                <TreeItem label={item.AssetName} nodeId={item.AssetId} />
              ),
            )}
          </TreeItem>
        ) : null;
      })}
    </TreeView>
  );
};

export default TreeList;
