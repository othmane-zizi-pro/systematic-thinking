import React from 'react';
import './App.css';
import Tree from 'react-d3-tree';

const myTreeData = [
  {
    name: 'HCs',
    children: [
      {
        name: 'Communicating Effectively',
        children: [
          {
            name: 'Using language',
            children: [
              {
                name: '#audience',
              },
            ],
          },
          {
            name: 'Using nonverbal communication',
          },
        ],
      },
      {
        name: 'Interacting Effectively',
        children: [
          { name: 'Interacting with complex systems' },
          { name: 'Negotiating and persuading' },
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
        justifyContent: 'center',
      }}
    >
      <Tree
        data={myTreeData}
        translate={{ x: 300, y: 300 }}
        nodeSize={{ x: 200, y: 100 }}
        separation={{ siblings: 1.5, nonSiblings: 2 }}
      />
    </div>
  );
}

export default App;
