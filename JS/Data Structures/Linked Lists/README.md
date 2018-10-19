# Linked Lists

## The what

Linked lists are data structures with pointers and nodes that organize data in an interconnected way.

Nodes will point to another node, and will eventually point to null when they end.

## The Big O
Linked Lists have an O(n) worst case when it comes to searching, but O(1) when it comes to adding or deleting nodes.

### Use Cases
1. You need to make a lot of insertions and deletions in the middle of a Datastructure and arrays/lists are too expensive in comparison

2. When you need the cheaper overhead

3. If you're making a multi-threaded application and you want a non-blocking parallel queue (you probably won't need this in web dev)