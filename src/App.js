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
            {name: '#complexcausality',children: [
              {name: 'Sufficient/jointly-sufficient',},
              {name: 'Necessary',},
              {name: 'Lower/higher-level mechanisms',},
          ],},
            {name: '#emergentproperties',children: [
              {name: 'Nonlinear effects',},
              {name: 'Superadditive principles',},
          ],},
            {name: '#levelsofanalysis', children: [
              {name: 'Interdisciplinary interactions between levels'}
            ]},
            {name: '#networks', children: [
              {name: 'Nodes',},
              {name: 'Edges',children: [
                {name: 'Bidirectional edges',},
                {name: 'Unidirectional edges',},]},
              {name: 'Distance/Eigenvector distance',},
              {name: 'Network structure', children: [
                {name: 'Small-world network'}
              ]},
            ]}, 
          ,
            {name: '#systemdynamics',children: [
              {name: 'Phase space',children: [
                {name: 'Regime change',},
                {name: 'Basins of attraction',},
                {name: 'Attractors',},
                {name: 'Critical point',},]},
              {name: 'Feedback loops',children: [
                  {name: 'Positive/reinforcing feedback loops',},
                  {name: 'Balacing feedback loops',},
                  {name: 'Negative feedback loops',},]},
              {name: 'Leverage points',},
              {name: 'Nth-order effects/Unintended outcomes',},
          ],},
            {name: '#systemmapping',children: [
              {name: 'Agents',},]},
        ], },
          { name: 'Negotiating and persuading' ,
          children: [
            {name: '#carrotandstick',},
            {name: '#confidence',},
            {name: '#negotiate', children: [
              {name: 'Principled negotiation'},
              {name: 'Positional negotiation'},
            ]},
            {name: '#nudge', children: [
              {name: 'Liberty-preserving'},
              {name: 'Default choice'}
            ]},
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
            {name: '#heuristics',
            children: [{name: "Problem-solving (Martinez, 1998)",
            children: [{name: "1. Means-ends analysis",},
            {name: "2. Working backward"},
            {name: "3. Successive approximation"},
            {name: "4. External representation"},
          ]},
          {name: "Creative hypothesis generation (McGuire, 1997)",
            children: [{name: "19. Shifting attention to an opposite pole of the problem",},
          ]
        
        
        }]
          },
            {name: '#optimization',},
            {name: '#scienceoflearning',
            children: [{name: "Think it through",
                  children: [{name: "Process relevant information to improve retention",
                     children: [{name: "1. Evoking deep processing"},
                               {name: "2. Using desirable difficulty"},
                               {name: "3. Eliciting the generation effect"},
                                {name: "4. Engaging in deliberate practice"},]},
                              {name: "Induce additional processing",
                              children: [{name: "5. Using interleaving"},
                                          {name: "6. Inducing dual coding"},
                                           {name: "7. Evoking emotion"},]}]},
                        {name: "Make and use associations",
                        children: [{name: "Structure information by using associations",
                        children: [{name: "Lay out the structure",
                           children: [{name: "8. Promoting chunking"},
                                     {name: "9. Building on prior associations"},
                                     {name: "10. Presenting foundational material first"},]},
                                    {name: "Leverage examples to cement underlying principles",
                            children: [{name: "11. Exploiting appropriate examples"},
                                      {name: "12. Relying on principles, not rote"}]}]},
                                    {name: "Create rich retrieval cues",
                                    children: [{name: "13. Creating associative chaining (a.k.a using story telling)"},
                                                {name: "14. Using spaced practice"},
                                                 {name: "15. Establishing different contexts"},
                                                 {name: "16. Avoiding interference"},]}]},
                      ]},
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
            {name: '#rightproblem', children: [
              {name: 'Initial state'},
              {name: 'Goal state'},
              {name: 'Obstacles'},
              {name: 'Scale of the problem'},
            ]},
            {name: '#variables', children: [
              {name: 'Independent variable'},
              {name: 'Depending variable'},
              {name: 'Control variable'},
              {name: 'Confounding variable'},
            ]},
        ], },
          { name: 'Evaluating claims' ,
          children: [
            {name: '#context',},
            {name: '#critique',},
            {name: '#estimation',},
            {name: '#interpretivelens',},
            {name: '#plausibility',children: [{name: "Explanatory power"},]},
            {name: '#testability',},
        ], },
          {
            name: 'Evaluating justifications',
            children: [
              {name: '#deduction',},
              {name: '#evidencebased',},
              {name: '#fallacies',children: [{name: "Base rate fallacy"},]},
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
        translate={{ x: 360, y: 270 }}
        nodeSize={{ x: 420, y: 70 }} //x: 314
        separation={{ siblings: 1.5, nonSiblings: 2 }}
        initialDepth={2}
        zoom={0.35} // set zoom level here
      />
    </div>
  );
}

export default App;