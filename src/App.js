import React from 'react';
import './App.css';
import Tree from 'react-d3-tree';

const initialTreeData  = [  {    name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Critical-Wisdom-1285bd9a7d0c80e5aab4e350efb5d930"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Critical Wisdom
                  </a>
                ),
children: [{name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Communicating-Effectively-1285bd9a7d0c807d90ffde5e087c4674"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Communicating Effectively
                  </a>
                ),
children: [
  {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Using-language-1285bd9a7d0c809b96e7ca54ed94134e"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Using language
                  </a>
                ),
  children: [
    {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/audience-1285bd9a7d0c80bb96dbee42abc52e6b"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #audience
                  </a>
                )},
    {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/composition-1285bd9a7d0c80c48b15f5380954d21c"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #composition
                  </a>
                )},
    {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/connotation-1285bd9a7d0c80258c11e7b8a9f8e963"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #connotation
                  </a>
                ),},
    {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/organization-1285bd9a7d0c808f89fad07808fadd27"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #organization
                  </a>
                ),},
    {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/professionalism-1285bd9a7d0c8037baf9faa04602cde6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #professionalism
                  </a>
                ),},
    {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/thesis-1285bd9a7d0c80a8a18ceab709be17aa"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #thesis
                  </a>
                ),},
], _collapsed: true,
          },
          {
            name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Using-nonverbal-communication-1285bd9a7d0c808e83dbf0de3d883dd1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Using nonverbal communication
                  </a>
                ),
            children: [
              {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/communicationdesign-1285bd9a7d0c80988f5ede7d84d0df3a"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #communicationdesign
                  </a>
                ),
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
              {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/expression-1285bd9a7d0c807aa1c5fffd93d3338e"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #expression
                  </a>
                ),},
              {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/medium-1285bd9a7d0c80eaa600d79c3f30a261"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #medium
                  </a>
                ),},
              {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/multimedia-1285bd9a7d0c8078952fed55e5ba5e53"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #multimedia
                  </a>
                ),},
          ],
          },
        ],
      },
      {
        name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Interacting-Effectively-1285bd9a7d0c80a7a37fe637fe393ee7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Interacting Effectively
                  </a>
                ),
        children: [
          { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Interacting-with-complex-systems-1285bd9a7d0c80cbbf6be6889a4d52f7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Interacting with complex systems
                  </a>
                ),
          children: [
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/complexcausality-1285bd9a7d0c80e289c5dac825188f6d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #complexcausality
                  </a>
                ),children: [
              {name: 'Sufficient/jointly-sufficient',},
              {name: 'Necessary',},
              {name: 'Lower/higher-level mechanisms',},
          ],},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/emergentproperties-1285bd9a7d0c8069b03af0789b062833"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #emergentproperties
                  </a>
                ),children: [
              {name: 'Nonlinear effects',},
              {name: 'Superadditive principles',},
              {name: 'Not deterministic',},
          ],},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/levelsofanalysis-1285bd9a7d0c8036b8ede4a02364a89f"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #levelsofanalysis
                  </a>
                ), children: [
              {name: 'Interdisciplinary interactions between levels'}
            ]},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/networks-1285bd9a7d0c809598b7df9af3b6774c"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #networks
                  </a>
                ), children: [
              {name: 'Nodes',},
              {name: 'Edges',children: [
                {name: 'Directionality',},]},
              {name: 'Thresholds',children: [
                {name: 'Bandwagon effect',},
                ]},
              {name: 'Distance',},
              {name: 'Network structure', children: [
                {name: 'Small-world network',},
              ]},
            ]}, 
          
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/systemdynamics-1285bd9a7d0c80b0af10d6d830e7a3e4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #systemdynamics
                  </a>
                ),children: [
              {name: 'Phase space',children: [
                {name: 'Regime change',},
                {name: 'Basins of attraction',},
                {name: 'Attractors',},
                {name: 'Critical point',},]},
              {name: 'Feedback loops',children: [
                  {name: 'Reinforcing feedback loops (positive/negative)',},
                  {name: 'Balacing feedback loops',},]},
              {name: 'Leverage points',},
              {name: 'Nth-order effects/Unintended outcomes',},
          ],},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/systemmapping-1285bd9a7d0c808b9947c2d804198d9b"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #systemmapping
                  </a>
                ),children: [
              {name: 'Agents',},]},
        ], },
          { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Negotiating-and-persuading-1285bd9a7d0c808f88fecb47379185eb"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Negotiating and persuading
                  </a>
                ),
          children: [
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/carrotandstick-1285bd9a7d0c80a1bd74da3767172d68"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #carrotandstick
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/confidence-1285bd9a7d0c80188853c7c1db580aaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #confidence
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/negotiate-1285bd9a7d0c80078632e55294d68a09"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #negotiate
                  </a>
                ), children: [
              {name: 'Principled negotiation'},
              {name: 'Positional negotiation'},
            ]},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/nudge-1285bd9a7d0c80738762c9c8aa94fbfe"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #nudge
                  </a>
                ), children: [
              {name: 'Liberty-preserving'},
              {name: 'Default choice'}
            ]},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/persuasion-1285bd9a7d0c804e8504fc22a0c963f0"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #persuasion
                  </a>
                ),},
        ],},
        { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Resolving-ethical-problems-1285bd9a7d0c80448cf6dce5502fd821"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Resolving ethical problems
                  </a>
                ),
        children: [
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/ethicalconsiderations-1285bd9a7d0c802ebe7bcbcab81b722b"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #ethicalconsiderations
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/ethicalcourage-1285bd9a7d0c8001a634dcfed2ce7f0c"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #ethicalcourage
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/ethicaljudgement-1285bd9a7d0c80dd86abe6aec1e70b9b"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #ethicaljudgment
                  </a>
                ),},
      ],},
        { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Working-with-others-1285bd9a7d0c80bb846cd3c98da6debd"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Working with others
                  </a>
                ),
        children: [
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/conformity-1285bd9a7d0c8055822bc6a9f8a00b90"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #conformity
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/differences-1285bd9a7d0c809f91aff93284807d9d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #differences
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/emotionaliq-1285bd9a7d0c803ca16efc312daabfb1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #emotionaliq
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/leadprinciples-1285bd9a7d0c80899c86eb84cda1b22d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #leadprinciples
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/powerdynamics-1285bd9a7d0c80459bebff3d9ac8d7be"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #powerdynamics
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/responsibility-1285bd9a7d0c8062badeeb6166a2f3a0"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #responsibility
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/selfawareness-1285bd9a7d0c80538460dee69961e360"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #selfawareness
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/strategize-1285bd9a7d0c80c88770da388c011539"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    #strategize
                  </a>
                ),},
    ],},
        ],
      },
      {
        name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Thinking-Creatively-1285bd9a7d0c8005b7d2fa61ff909e6f"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Thinking Creatively
                  </a>
                ),
        children: [
          { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Applying-research-methods-1285bd9a7d0c80b48ae5f1be3b882e96"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Applying research methods
                  </a>
                ),
          children: [
            {name: '#casestudy',},
            {name: '#comparisongroups',},
            {name: '#interventionalstudy', children: [
            {name: 'Experimental units',},
            {name: 'Treatment',},
        ]},
            {name: '#interviewsurvey',},
            {name: '#observationalstudy',},
            {name: '#sampling',},
            {name: '#studyreplication',},
        ],},
          { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Facilitating-discovery-1285bd9a7d0c80d9886edffd81600844"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Facilitating discovery
                  </a>
                ),
          children: [
            {name: '#dataviz',},
            {name: '#hypothesisdevelopment',},
            {name: '#modeling',},
        ],},
          { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Solving-problems-1285bd9a7d0c80a89156d15ff5b17070"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Solving problems
                  </a>
                ),
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
        name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Thinking-Critically-1285bd9a7d0c80e29805f206cc41b5bb"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Thinking Critically
                  </a>
                ),
        children: [
          { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Analyzing-data-1285bd9a7d0c80babd63e1ac5028b889"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Analyzing data
                  </a>
                ),
          children: [
            {name: '#confidenceintervals',},
            {name: '#correlation',},
            {name: '#descriptivestats', children: [
              {name: 'Extrema (min and max)'},
              {name: 'Mean'},
              {name: 'Median'},
              {name: 'Mode'},
              {name: 'Quartiles'},
              {name: 'Percentiles'},
              {name: 'Standard deviation'},
              {name: 'Variance'},
            ]},
            {name: '#distributions', children: [
              {name: 'Normal distribution'},
              {name: 'Bimodal distribution'},
              {name: 'T-distribution', children: [
              {name: 'Degrees of freedom'},
            ]},
            ]},
            {name: '#probability', children: [
              {name: 'Bayesian probability'}
            ]},
            {name: '#regression',},
            {name: '#significance', children: [
              {name: 'Hypothesis testing', children: [
              {name: 'Null hypothesis'},
              {name: 'Alternative hypothesis'},
              {name: 'Central Limit Theorem'},
              {name: 'Difference of means'},
              {name: 'p-value (percentage chance that we would get this result if the null hypothesis were true)'},
            ]},
              {name: "Effect size", children: [
              {name: 't-test'},
            ]},
            ]},
        ], },
          { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Analyzing-decisions-1285bd9a7d0c8098af66ff3112383211"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Analyzing decisions
                  </a>
                ),
          children: [
            {name: '#biasidentification', children: [
              {name: 'Availability bias'}
            ]},
            {name: '#biasmitigation',},
            {name: '#decisiontrees',},
            {name: '#psychologicalexplanation', children: [
              {name: "Maslow's hierarchy of needs"},
              {name: "Intrinic vs. extrinsic motivation"},
            ]},
            {name: '#purpose',},
            {name: '#utility', children: [
              {name: 'Expected value'}
            ]},
        ],},
          { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Analyzing-problems-1285bd9a7d0c802c84a6e4ee57e81451"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Analyzing problems
                  </a>
                ),
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
          { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Evaluating-claims-1285bd9a7d0c8002813cd0a468462164"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Evaluating claims
                  </a>
                ),
          children: [
            {name: '#context',},
            {name: '#critique',},
            {name: '#estimation',},
            {name: '#interpretivelens',},
            {name: '#plausibility',children: [{name: "Explanatory power"},]},
            {name: '#testability',},
        ], },
          {
            name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Evaluating-justifications-1285bd9a7d0c8087bb6ac0ad30f03a58"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'blue', textDecoration: 'underline' }}
                  >
                    Evaluating justifications
                  </a>
                ),
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
        initialDepth={1}
        zoom={0.55} // set zoom level here
      />
    </div>
  );
}

export default App;
