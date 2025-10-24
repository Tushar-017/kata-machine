// Implementation of Breadth-First Search (BFS) for a Binary Tree
// head: root node of the binary tree
// needle: value we're searching for in the tree
// returns: boolean indicating if the value was found
export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    // Initialize a queue with the root node
    // Queue can contain nodes or null values (for empty children)
    const q: (BinaryNode<number> | null)[] = [head];

    // Continue processing while there are nodes in the queue
    while (q.length) {
        // Remove and get the first node from the queue
        // Type assertion is needed because shift() can return undefined
        const curr = q.shift() as BinaryNode<number> | undefined | null;
        if (!curr) {
            // Skip if we encounter a null node
            continue;
        }

        // Check if the current node contains our target value
        if (curr.value === needle) {
            return true; // Value found!
        }

        // Add left and right children to the queue for processing
        // This ensures we explore the tree level by level
        q.push(curr.left);
        q.push(curr.right);
    }

    // If we've exhausted all nodes and haven't found the value, return false
    return false;
}
