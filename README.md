# linked-lists

This is a project I completed as part of The Odin Project Curriculum.

The goal of this project was to create a LinkedList class and a Node class.
The LinkedList class would allow me to create a new linked list from a template which has a head pointing to the first node.
The Node class would create new nodes that had two properties, a data property and a next property. The data property would hold whatever value was given to it and the next property would point to the next node in the list if it existed or otherwise null.

Some of the challenges I faced in this project were thinking about how while loops acting on a variable such as the current node could then change the variable it was acting on, then for it's next loop cycle it would act on the newly assigned variable, and in this way it could traverse the nodes in the list so long as a node currently existed or a node had a 'next' property pointing to the next node.
