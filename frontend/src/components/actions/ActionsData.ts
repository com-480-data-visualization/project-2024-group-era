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

export const data = {
  "name": "Conservation",
  "children": [
    {
      "name": "Policy & Regulation",
      "children": [
        { "name": "Legislation", "value": 580 },
        { "name": "Protected Areas", "value": 992 }
      ]
    },
    {
      "name": "Research & Management",
      "children": [
        { "name": "Research", "value": 1317 },
        { "name": "Species-specific Actions", "value": 619 },
        { "name": "Threat Management", "value": 432 }
      ]
    },
    {
      "name": "Community Support",
      "children": [
        { "name": "Public Awareness", "value": 381 },
        { "name": "Ex-situ", "value": 66 }
      ]
    },
    {
      "name": "Other",
      "children": [
        { "name": "Unknown", "value": 280 }
      ]
    }
  ]
};