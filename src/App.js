import React, { useEffect } from 'react';
import './App.css';
import Tree from 'react-d3-tree';

const initialTreeData  = [  {    name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Critical-Wisdom-1285bd9a7d0c80e5aab4e350efb5d930"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Critical Wisdom
                  </a>
                ),
children: [{name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Communicating-Effectively-1285bd9a7d0c807d90ffde5e087c4674"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
                  >
                    #audience
                  </a>
                )},
    {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/composition-1285bd9a7d0c80c48b15f5380954d21c"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #composition
                  </a>
                )},
    {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/connotation-1285bd9a7d0c80258c11e7b8a9f8e963"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #connotation
                  </a>
                ),},
    {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/organization-1285bd9a7d0c808f89fad07808fadd27"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #organization
                  </a>
                ),},
    {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/professionalism-1285bd9a7d0c8037baf9faa04602cde6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #professionalism
                  </a>
                ),},
    {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/thesis-1285bd9a7d0c80a8a18ceab709be17aa"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
                  >
                    #expression
                  </a>
                ),},
              {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/medium-1285bd9a7d0c80eaa600d79c3f30a261"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #medium
                  </a>
                ),},
              {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/multimedia-1285bd9a7d0c8078952fed55e5ba5e53"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
                  >
                    Negotiating and persuading
                  </a>
                ),
          children: [
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/negotiate-1285bd9a7d0c80078632e55294d68a09"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #negotiate
                  </a>
                ), children: [
              {name: 'Principled negotiation'},
              {name: 'Positional negotiation'},
            ]},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/persuasion-1285bd9a7d0c804e8504fc22a0c963f0"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #persuasion
                  </a>
                ),},
                  {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/shapingbehavior-1285bd9a7d0c80a1bd74da3767172d68"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #shapingbehavior
                  </a>
                ),},
        ],},
        { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Resolving-ethical-problems-1285bd9a7d0c80448cf6dce5502fd821"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
                  >
                    #ethicalconsiderations
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/ethicalcourage-1285bd9a7d0c8001a634dcfed2ce7f0c"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #ethicalcourage
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/ethicaljudgement-1285bd9a7d0c80dd86abe6aec1e70b9b"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
                  >
                    #conformity
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/differences-1285bd9a7d0c809f91aff93284807d9d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #differences
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/emotionaliq-1285bd9a7d0c803ca16efc312daabfb1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #emotionaliq
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/leadprinciples-1285bd9a7d0c80899c86eb84cda1b22d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #leadprinciples
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/powerdynamics-1285bd9a7d0c80459bebff3d9ac8d7be"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #powerdynamics
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/responsibility-1285bd9a7d0c8062badeeb6166a2f3a0"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #responsibility
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/selfawareness-1285bd9a7d0c80538460dee69961e360"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #selfawareness
                  </a>
                ),},
          {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/strategize-1285bd9a7d0c80c88770da388c011539"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
                  >
                    Applying research methods
                  </a>
                ),
          children: [
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/casestudy-1285bd9a7d0c80e99a3bf2fc2737f144"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #casestudy
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/comparisongroups-1285bd9a7d0c809faf4fc8a841a8af42"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #comparisongroups
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/interventionalstudy-1285bd9a7d0c8002ade7fd21da5135a2"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #interventionalstudy
                  </a>
                ), children: [
            {name: 'Experimental units',},
            {name: 'Treatment',},
        ]},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/interviewsurvey-1285bd9a7d0c8083b070c7ede79b1370"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #interviewsurvey
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/observationalstudy-1285bd9a7d0c80929ed0d5258512ef9f"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #observationalstudy
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/sampling-1285bd9a7d0c809f9b34ef4fe3153334"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #sampling
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/studyreplication-1285bd9a7d0c80289c84e9982e6befb7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #studyreplication
                  </a>
                ),},
        ],},
          { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Facilitating-discovery-1285bd9a7d0c80d9886edffd81600844"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    Facilitating discovery
                  </a>
                ),
          children: [
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/dataviz-1285bd9a7d0c800a9a9dc8c274f912e4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #dataviz
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/hypothesisdevelopment-1285bd9a7d0c8051bf1bd0559a9d0e90"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #hypothesisdevelopment
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/modeling-1285bd9a7d0c80948102fa73f7ecf749"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #modeling
                  </a>
                ),},
        ],},
          { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Solving-problems-1285bd9a7d0c80a89156d15ff5b17070"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    Solving problems
                  </a>
                ),
          children: [
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/algorithms-1285bd9a7d0c80f99b07daf82329996c"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #algorithms
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/analogies-1285bd9a7d0c8035b084f59900d8b682"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #analogies
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/constraints-1285bd9a7d0c8037af93deee1e81a55c"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #constraints
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/designthinking-1285bd9a7d0c800eaa32d21ab15aaa2a"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #designthinking
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/heuristics-1285bd9a7d0c8049861bc9c91554c3cb"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #heuristics
                  </a>
                ),
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
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/optimization-1285bd9a7d0c8043b9a1e9f883f2067b"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #optimization
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/scienceoflearning-1285bd9a7d0c802d8783c3b783d472e7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #scienceoflearning
                  </a>
                ),
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
                    style={{ textDecoration: 'underline' }}
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
                    style={{ textDecoration: 'underline' }}
                  >
                    Analyzing data
                  </a>
                ),
          children: [
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/confidenceintervals-1285bd9a7d0c80bc9628d40072f28cfd"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #confidenceintervals
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/correlation-1285bd9a7d0c804d9fbbcaa6adce5188"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #correlation
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/descriptivestats-1285bd9a7d0c80b6ab36ee4e5de451d1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #descriptivestats
                  </a>
                ), children: [
              {name: 'Extrema (min and max)'},
              {name: 'Mean'},
              {name: 'Median'},
              {name: 'Mode'},
              {name: 'Quartiles'},
              {name: 'Percentiles'},
              {name: 'Standard deviation'},
              {name: 'Variance'},
            ]},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/distributions-1285bd9a7d0c806e8e06c81d19439420"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #distributions
                  </a>
                ), children: [
              {name: 'Normal distribution'},
              {name: 'Bimodal distribution'},
              {name: 'T-distribution', children: [
              {name: 'Degrees of freedom'},
            ]},
            ]},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/probability-1285bd9a7d0c806da74bd505c2505ed1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #probability
                  </a>
                ), children: [
              {name: 'Bayesian probability'}
            ]},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/regression-1285bd9a7d0c801ba968d954d3008a8f"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #regression
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/significance-1285bd9a7d0c809b9e3ce5ac52e465b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #significance
                  </a>
                ), children: [
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
                    style={{ textDecoration: 'underline' }}
                  >
                    Analyzing decisions
                  </a>
                ),
          children: [
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/biasidentification-1285bd9a7d0c801fb74bd860d861bab9"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #biasidentification
                  </a>
                ), children: [
              {name: 'Availability bias'}
            ]},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/biasmitigation-1285bd9a7d0c804885bdee6fbf3701c8"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #biasmitigation
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/decisiontrees-1285bd9a7d0c80688355d09152dccd0d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #decisiontrees
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/psychologicalexplanation-1285bd9a7d0c805483dffe12bedb4081"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #psychologicalexplanation
                  </a>
                ), children: [
              {name: "Maslow's hierarchy of needs"},
              {name: "Intrinic vs. extrinsic motivation"},
            ]},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/purpose-1285bd9a7d0c80779fddfffeec2a4fcd"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #purpose
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/utility-1285bd9a7d0c80d78111d8643248b93c"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #utility
                  </a>
                ), children: [
              {name: 'Expected value'}
            ]},
        ],},
          { name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Analyzing-problems-1285bd9a7d0c802c84a6e4ee57e81451"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    Analyzing problems
                  </a>
                ),
          children: [
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/breakitdown-1285bd9a7d0c80d18584f809cddee2f1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #breakitdown
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/gametheory-1285bd9a7d0c8058b604c1e7267af4ba"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #gametheory
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/gapanalysis-1285bd9a7d0c80809679cb38687c97b9"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #gapanalysis
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/rightproblem-1285bd9a7d0c80e49df3fc74a9ed94e2"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #rightproblem
                  </a>
                ), children: [
              {name: 'Initial state'},
              {name: 'Goal state'},
              {name: 'Obstacles'},
              {name: 'Scale of the problem'},
            ]},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/variables-1285bd9a7d0c8064be78e3bd055ef384"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #variables
                  </a>
                ), children: [
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
                    style={{ textDecoration: 'underline' }}
                  >
                    Evaluating claims
                  </a>
                ),
          children: [
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/context-1285bd9a7d0c8028a190cab3b98f6c28"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #context
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/critique-1285bd9a7d0c803aa8bcf3311515d48d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #critique
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/estimation-1285bd9a7d0c800989f4eb251eecc687"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #estimation
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/interpretivelens-1285bd9a7d0c80faadbdd192fce37d1d"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #interpretivelens
                  </a>
                ),},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/plausibility-1285bd9a7d0c80488072c8c30720e5a8"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #plausibility
                  </a>
                ),children: [{name: "Explanatory power"},]},
            {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/testability-1285bd9a7d0c80d0a72fe6a7e76a882a"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #testability
                  </a>
                ),},
        ], },
          {
            name: (
                  <a
                    href="https://petite-lute-69e.notion.site/Evaluating-justifications-1285bd9a7d0c8087bb6ac0ad30f03a58"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    Evaluating justifications
                  </a>
                ),
            children: [
              {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/deduction-1285bd9a7d0c8059b0ded4e53d1243d1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #deduction
                  </a>
                ),},
              {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/evidencebased-1285bd9a7d0c80f88e7fc260779512de"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #evidencebased
                  </a>
                ),},
              {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/fallacies-1285bd9a7d0c80b694f5ca501939b4c6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #fallacies
                  </a>
                ),children: [{name: "Base rate fallacy"},]},
              {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/induction-1285bd9a7d0c80568f83cf2c491bc4ef"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #induction
                  </a>
                ),},
              {name: (
                  <a
                    href="https://petite-lute-69e.notion.site/sourcequality-1285bd9a7d0c8056a672dbac9b20dea1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    #sourcequality
                  </a>
                ),},
            ],
          },
        ],
      },
    ],
  },
];

function App() {
  useEffect(() => {
    // Force white text for all links inside the tree nodes
    const links = document.querySelectorAll('.rd3t-label__title a');
    links.forEach(link => {
      link.style.color = 'white'; // Force white color for links
      link.style.fill = '#d8d4d4'; // In case it's treated as an SVG element
      link.style.textDecoration = 'underline'; // Ensure underline is applied
    });
  }, []);
  return (
    <div
      style={{
        width: '220vh',
        height: '99vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        backgroundColor: '#201c1c', // Ensure the background is applied
      }}
    >
      <Tree
        data={initialTreeData}
        translate={{ x: 360, y: 270 }}
        nodeSize={{ x: 420, y: 70 }} //x: 314
        separation={{ siblings: 1.5, nonSiblings: 2 }}
        initialDepth={1}
        zoom={0.55} // set zoom level here
        styles={{
    links: { stroke: '#fff' },
    nodes: {
      node: {
        circle: { fill: 'white' },
        name: { fill: 'white' },
        attributes: { fill: 'white' },
      },
      leafNode: {
        circle: { fill: 'white' },
        name: { fill: 'white' },
        attributes: { fill: 'white' },
      },
    },
  }}
      />
    </div>
  );
}

export default App;
