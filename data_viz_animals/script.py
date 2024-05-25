# read json file
import json

with open('animals.json') as f:
    data = json.load(f)
    
counter = {}
    
for species in data:
    for habitat in species['habitats']:
        values = habitat['habitat'].split('-')
        
        habitat_name = values[0]
        subhabitat_name = values[1] if len(values) > 1 else None
        
        if habitat_name not in counter:
            counter[habitat_name] = {}
            
        if subhabitat_name not in counter[habitat_name]:
            counter[habitat_name][subhabitat_name] = 0
            
        counter[habitat_name][subhabitat_name] += 1
        
"""
 children: [
    {
      type: "node",
      name: "Forest",
      value: 0,
      color: "green",
      children: [
        { type: "leaf", name: "Forest 1", value: 70 },
        { type: "leaf", name: "Forest 2", value: 20 },
        { type: "leaf", name: "Forest 3", value: 30 },
      ],
    },
    {
      type: "node",
      name: "Desert",
      value: 0,
      color: "yellow",
      children: [
        { type: "leaf", name: "Desert 1", value: 40 },
        { type: "leaf", name: "Desert 2", value: 50 },
        { type: "leaf", name: "Desert 3", value: 60 },
      ],
    },
  ],
"""

output = []

for habitat in counter:
    data = {
        'type': 'node',
        'name': habitat,
        'value': 0,
        'color': 'green',
        'children': []
    }
    print(habitat)
    for subhabitat in counter[habitat]:
        print(f'  {subhabitat}: {counter[habitat][subhabitat]}')
        data['children'].append({
            'type': 'leaf',
            'name': subhabitat,
            'value': counter[habitat][subhabitat]
        })
    print('\n')
    
    output.append(data)
    

with open('habitats.json', 'w') as f:
    json.dump(output, f, indent=2)