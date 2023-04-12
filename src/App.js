import React from 'react';
import './App.css';
import Tree from 'react-d3-tree';

const myTreeData = [
  {
    name: 'Main Topic',
    children: [
      {
        name: 'Subtopic 1',
      },
      {
        name: 'Subtopic 2',
      },
    ],
  },
];

function App() {
  return (
    <div
      style={{
        width: '800px',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Tree data={myTreeData} translate={{ x: 400, y: 300 }} />
    </div>
  );
}

export default App;
