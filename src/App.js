import React from 'react';
import './App.css';
import Tree from 'react-d3-tree';

const initialTreeData  = [  {    name: 'HCs',
children: [{name: 'Communicating Effectively',
children: [
  {name: 'Using language',
  children: [
    {name: '#audience',},
    {name: '#composition',},
    {name: '#connotation',},
    {name: '#organization',},
    {name: '#professionalism',},
    {name: '#thesis',},
], _collapsed: true,
          },
          {
            name: 'Using nonverbal communication',
            children: [
              {name: '#communicationdesign',},
              {name: '#expression',},
              {name: '#medium',},
              {name: '#multimedia',},
          ],
          },
        ],
      },
      {
        name: 'Interacting Effectively',
        children: [
          { name: 'Interacting with complex systems',
          children: [
            {name: '#complexcausality',},
            {name: '#emergentproperties',},
            {name: '#levelsofanalysis',},
            {name: '#networks',},
            {name: '#systemdynamics',},
            {name: '#systemmapping',},
        ], },
          { name: 'Negotiating and persuading' ,
          children: [
            {name: '#carrotandstick',},
            {name: '#confidence',},
            {name: '#negotiate',},
            {name: '#nudge',},
            {name: '#persuasion',},
        ],},
        { name: 'Resolving ethical problems' ,
        children: [
          {name: '#ethicalconsiderations',},
          {name: '#ethicalcourage',},
          {name: '#ethicaljudgment',},
      ],},
        ],
      },
      {
        name: 'Thinking Creatively',
        children: [
          { name: 'Applying research methods' },
          { name: 'Facilitating discovery' },
        ],
      },
      {
        name: 'Thinking Critically',
        children: [
          { name: 'Evaluating claims' },
          {
            name: 'Evaluating justifications',
            children: [
              {
                name: '#evidencebased',
              },
            ],
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div
      style={{
        width: '220vh',
        height: '99vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
      }}
    >
      <Tree
        data={initialTreeData}
        translate={{ x: 300, y: 300 }}
        nodeSize={{ x: 314, y: 70 }}
        separation={{ siblings: 1.5, nonSiblings: 2 }}
        initialDepth={2}
      />
    </div>
  );
}

export default App;