// Directions to move in the maze: left, right, up, down
const dir = [
    [-1, 0], // left
    [1, 0], // right
    [0, -1], // up
    [0, 1], // down
];

/**
 * Recursively walks through the maze to find a path from curr to end.
 * @param maze The maze represented as an array of strings
 * @param wall The character representing a wall in the maze
 * @param curr The current position in the maze
 * @param end The end (goal) position in the maze
 * @param seen 2D array tracking visited positions
 * @param path Array to store the path from start to end
 * @returns true if a path is found, false otherwise
 */
function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // 1. Base Cases
    // Check if current position is out of maze bounds
    if (
        curr.x < 0 ||
        curr.y < 0 ||
        curr.x >= maze[0].length ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // Check if current position is a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // Check if current position has already been visited
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // Check if current position is the end point
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end); // Add the end point to the path
        return true;
    }

    // 2. Mark the current cell as visited and add to path
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // 3. Explore all possible directions (left, right, up, down)
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        // Recursively try the next cell in the current direction
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
        ) {
            return true; // If path found, bubble up true
        }
    }

    // 4. Backtrack: remove current cell from path if no path found from here
    path.pop();
    return false;
}

/**
 * Solves the maze from start to end, returning the path as an array of Points.
 * @param maze The maze as an array of strings
 * @param wall The character representing a wall
 * @param start The starting Point
 * @param end The ending Point
 * @returns Array of Points representing the path from start to end (empty if no path)
 */
export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    // Initialize a 2D array to keep track of visited cells
    const seen: boolean[][] = [];
    // Array to store the path from start to end
    const path: Point[] = [];

    // Fill the seen array with false (unvisited) for each cell
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    // Start the recursive walk from the start position
    walk(maze, wall, start, end, seen, path);
    return path;
}
