export const treeData = [
  {
    AssetId: "01",
    AssetName: "Bottling Application",
    AssetType: "Software",
    IPAddress: null,
    Relationships: [
      {
        SourceAssetId: "01",
        Relation: "contains",
        TargetAssetId: "02",
      },
      {
        SourceAssetId: "01",
        Relation: "contains",
        TargetAssetId: "03",
      },
      {
        SourceAssetId: "01",
        Relation: "contains",
        TargetAssetId: "04",
      },
    ],
  },
  {
    AssetId: "02",
    AssetType: "Software Subsystem",
    AssetName: "Sterlization Module",
    IPAddress: null,
    Relationships: [{}],
  },
  {
    AssetId: "03",
    AssetType: "Software Subsystem",
    AssetName: "Distillation Module",
    IPAddress: null,
    Relationships: [{}],
  },
  {
    AssetId: "04",
    AssetType: "Asset Controller",
    AssetName: "M580",
    IPAddress: null,
    Relationships: [
      {
        SourceAssetId: "04",
        Relation: "contains",
        TargetAssetId: "05",
      },
    ],
  },
  {
    AssetId: "05",
    AssetType: "Drive Controller",
    AssetName: "ATV6xx_1",
    IPAddress: null,
    Relationships: [
      {
        SourceAssetId: "05",
        Relation: "contains",
        TargetAssetId: "06",
      },
    ],
  },
  {
    AssetId: "06",
    AssetType: "Actuator",
    AssetName: "Motor_1",
    IPAddress: null,
    Relationships: [{}],
  },
  {
    AssetId: "07",
    AssetName: "Labelling Application",
    AssetType: "Software",
    IPAddress: null,
    Relationships: [
      {
        SourceAssetId: "07",
        Relation: "contains",
        TargetAssetId: "08",
      },
    ],
  },
  {
    AssetId: "08",
    AssetType: "Asset Controller",
    AssetName: "M580",
    IPAddress: null,
    Relationships: [
      {
        SourceAssetId: "08",
        Relation: "contains",
        TargetAssetId: "09",
      },
    ],
  },
  {
    AssetId: "09",
    AssetType: "Actuator",
    AssetName: "Motor_2",
    IPAddress: null,
    Relationships: [{}],
  },
];
