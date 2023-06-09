import { create } from 'zustand';

const useBoard = create((set) => ({
    board: {
        columns: [
            {
                id: 1,
                title: 'Characters',
                cards: [],
            },
            {
                id: 2,
                title: 'The Lord of the Rings Series',
                cards: [],
            },
            {
                id: 3,
                title: 'The Hobbit Series',
                cards: [],
            },
            {
                id: 4,
                title: 'Other',
                cards: [],
            },
        ],
    },
    setBoard: (board) => set(() => ({ board })),
}));

export default useBoard;
