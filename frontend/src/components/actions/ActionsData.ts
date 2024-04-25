export type TreeNode = {
  type: 'node';
  value: number;
  name: string;
  children: Tree[];
};
export type TreeLeaf = {
  type: 'leaf';
  name: string;
  value: number;
};

export type Tree = TreeNode | TreeLeaf;


export const data: Tree = {
  type: "node",
  name: "Conservation measures",
  value: 0,
  children: [
    {
      type: "node",
      name: "Policy and regulation",
      value: 0,
      children: [
        { type: "leaf", name: "Legislation and regulatory", value: 580 },
        { type: "leaf", name: "Protected area management", value: 992 },
      ],
    },
    {
      type: "node",
      name: "Research and active management",
      value: 0,
      children: [
        { type: "leaf", name: "Research and monitoring", value: 1317 },
        { type: "leaf", name: "Species-specific actions", value: 619 },
        { type: "leaf", name: "Threat management", value: 432 },
      ],
    },
    {
      type: "node",
      name: "Community and supportive actions",
      value: 0,
      children: [
        { type: "leaf", name: "Public awareness", value: 381 },
        { type: "leaf", name: "Ex-situ conservation", value: 66 },
      ],
    },
    {
      type: "node",
      name: "Others",
      value: 0,
      children: [
        { type: "leaf", name: "Unknown and no measures", value: 280 },
      ],
    }
  ],
};
