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
              {name: '#communicationdesign',
              children: [{name: 'Encoding Processes',
              children: [{name: "1. Discriminability"},
                          {name: "2. Perceptual organization"},
                          {name: "3. Salience"},]},
              {name: 'Working Memory',
              children: [{name: "4. Limited capacity"},
                          {name: "5. Informative change"},]},
              {name: 'Accessing Long-Term Memory',
              children: [{name: "6. Appropriate knowledge"},
                          {name: "7. Compatibility"},
                          {name: "8. Relevance"},]}],},
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
        { name: 'Working with others' ,
        children: [
          {name: '#conformity',},
          {name: '#differences',},
          {name: '#emotionaliq',},
          {name: '#leadprinciples',},
          {name: '#powerdynamics',},
          {name: '#responsibility',},
          {name: '#selfawareness',},
          {name: '#strategize',},
    ],},
        ],
      },
      {
        name: 'Thinking Creatively',
        children: [
          { name: 'Applying research methods' ,
          children: [
            {name: '#casestudy',},
            {name: '#comparisongroups',},
            {name: '#interventionalstudy',},
            {name: '#interviewsurvey',},
            {name: '#observationalstudy',},
            {name: '#sampling',},
            {name: '#studyreplication',},
        ],},
          { name: 'Facilitating discovery' ,
          children: [
            {name: '#dataviz',},
            {name: '#hypothesisdevelopment',},
            {name: '#modeling',},
        ],},
          { name: 'Solving problems' ,
          children: [
            {name: '#algorithms',},
            {name: '#analogies',},
            {name: '#constraints',},
            {name: '#designthinking',},
            {name: '#heuristics',},
            {name: '#optimization',},
            {name: '#scienceoflearning',},
        ],},
        ],
      },
      {
        name: 'Thinking Critically',
        children: [
          { name: 'Analyzing data' ,
          children: [
            {name: '#confidenceintervals',},
            {name: '#correlation',},
            {name: '#descriptivestats',},
            {name: '#distributions',},
            {name: '#probability',},
            {name: '#regression',},
            {name: '#significance',},
        ], },
          { name: 'Analyzing decisions'  ,
          children: [
            {name: '#biasidentification',},
            {name: '#biasmitigation',},
            {name: '#decisiontrees',},
            {name: '#psychologicalexplanation',},
            {name: '#purpose',},
            {name: '#utility',},
        ],},
          { name: 'Analyzing problems' ,
          children: [
            {name: '#breakitdown',},
            {name: '#gametheory',},
            {name: '#gapanalysis',},
            {name: '#rightproblem',},
            {name: '#variables',},
        ], },
          { name: 'Evaluating claims' ,
          children: [
            {name: '#context',},
            {name: '#critique',},
            {name: '#estimation',},
            {name: '#interpretivelens',},
            {name: '#plausibility',},
            {name: '#testability',},
        ], },
          {
            name: 'Evaluating justifications',
            children: [
              {name: '#deduction',},
              {name: '#evidencebased',},
              {name: '#fallacies',},
              {name: '#induction',},
              {name: '#sourcequality',},
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