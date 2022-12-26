import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { styled } from '@mui/material/styles';
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import jsonData from './TreeData.json'

type Props = {};

const MultiSelectTreeView = (props: Props) => {

    const CustomTreeItem = styled(TreeItem)({
        WebkitTapHighlightColor: 'blue',
        '&:hover, &.Mui-disabled, &.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused, &.Mui-selected:hover':
        {
            backgroundColor: 'green',
            position: 'relative'

        },
        '&.Mui-expanded': {
            background: 'purple !important'
        },
        // ' &.Mui-focused > &:before, &.Mui-selected > &:before, &.Mui-selected.Mui-focused > &:before, ': {
        //     content: '""', width: '3px', height: '40px',background:'black' 
        // }
    })

    const isChild = (asset: any) => {
        const treeData: any = jsonData;
        for (let i = 0; i < treeData.length; i++) {
            for (let j = 0  ; j < treeData[i].Relationships.length; j++) {
                if (asset.AssetId === treeData[i].Relationships[j].TargetAssetId) {
                    return false
                }
            }
        }
        return true
    }



    const ModifiedTreeItem = (item: any) => {
        if (item.Relationships[0].Relation === "contains") {
            const foundItem: any = jsonData.find(
                (s) => s.AssetId === item.Relationships[0].TargetAssetId,
            );


            return (
                <TreeItem label={item.AssetName} nodeId={item.AssetId}>
                    {foundItem?.Relationships[0].Relation === "contains" ? (
                        ModifiedTreeItem(foundItem)
                    ) : (
                        <TreeItem
                            nodeId={foundItem.AssetId}
                            label={foundItem.AssetName}
                        />
                    )}
                </TreeItem>
            );
        } 
    };
    return (
        <TreeView
            aria-label="multi-select"
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            multiSelect
            sx={{ height: 216, flexGrow: 1, width: '99%' }}>
            {jsonData.map((item: any) => {
                const relations: any[] = item.Relationships;
                const relationData: any[] = [];
                
                for (let i = 0; i < relations.length; i++) {
                    if (relations[i].Relation === "contains") {
                        const found = jsonData.find(
                            (s) => s.AssetId === relations[i].TargetAssetId,
                        );
                        if(found){
                            relationData.push(found);
                        }
                    } 
                }
                // console.log('item main: ', item)
                return (isChild(item)) ? (
                    <TreeItem
                        label={item.AssetName}
                        nodeId={item.AssetId}
                        style={{
                            padding: '5px',
                            background: '#eeeeee', marginBottom: '2px'
                        }}
                    >
                        {relationData.map((assetItem) =>
                            (assetItem.Relationships[0].Relation === "contains") ? (
                                ModifiedTreeItem(assetItem)
                            ) : (
                                <TreeItem
                                    label={assetItem.AssetName}
                                    nodeId={assetItem.AssetId}
                                />
                            ),
                        )}
                    </TreeItem>
                ) : null;
            })}
        </TreeView>

    );
};

export default MultiSelectTreeView;

