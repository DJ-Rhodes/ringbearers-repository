import React, { useState, useEffect } from 'react';
import Board, { moveCard, moveColumn, removeCard, addCard } from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';
import useBoard from '../../store/Board.js';
import './Board.css';
import { IoMdAdd, RxCross2 } from 'react-icons/all';
import AddCardModal from '../../components/AddCardModal/AddCardModal.jsx';

const BoardPage = () => {
    const { board, setBoard } = useBoard();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!initialized) {
            const storedBoard = localStorage.getItem('board');
            if (storedBoard) {
                setBoard(JSON.parse(storedBoard));
            } else {
                const initialBoard = {
                    columns: [
                        { id: 1, title: 'Characters', cards: [] },
                        { id: 2, title: 'The Lord of The Rings Series', cards: [] },
                        { id: 3, title: 'The Hobbit Series', cards: [] },
                        { id: 4, title: 'Other', cards: [] },
                    ],
                };
                setBoard(initialBoard);
                localStorage.setItem('board', JSON.stringify(initialBoard));
            }
            setInitialized(true);
        }
    }, [initialized, setBoard]);

    const handleColumnMove = (_card, source, destination) => {
        const updatedBoard = moveColumn(board, source, destination);
        setBoard(updatedBoard);
        saveBoard(updatedBoard);

    };

    const handleCardMove = (_card, source, destination) => {
        const updatedBoard = moveCard(board, source, destination);
        setBoard(updatedBoard);
        saveBoard(updatedBoard);
    };

    const getColumn = (card) => {
        const column = board.columns.filter((column) => column.cards.includes(card));
        return column[0];
    };

    const getGradient = (card) => {
        const column = getColumn(card);
        const title = column.title;
        if (title === 'Characters') {
            return {
                background: 'linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 189, 220) 163.54%)',
            };
        } else if (title === 'The Lord of The Rings Series') {
            return {
                background: 'linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(220, 48, 48) 163.54%)',
            };
        } else if (title === 'The Hobbit Series') {
            return {
                background: 'linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 220, 86) 163.54%)',
            };
        } else if (title === 'Other') {
            return {
                background: 'linear-gradient(65.35deg, rgba(65, 65,65, 0.67) -1.72%,rgba(134, 48, 220) 163.54%)',
            };
        }
    };

    const saveBoard = (boardData) => {
        localStorage.setItem('board', JSON.stringify(boardData));
    };

    const handleCardAdd = (columnId, title, detail) => {
        const card = {
            id: new Date().getTime(),
            title,
            description: detail,
        };

        const updatedBoard = addCard(board, { id: columnId }, card);
        setBoard(updatedBoard);
        saveBoard(updatedBoard);
    };

    const handleCardRemove = (column, card) => {
        const updatedBoard = removeCard(board, column, card);
        setBoard(updatedBoard);
        saveBoard(updatedBoard);
    };

    return (
        <div className="board-container">
            <span>Notes Board</span>
            <Board
                allowAddColumn
                allowRenamingColumn
                allowRemoveCard
                onCardDragEnd={handleCardMove}
                onColumnDragEnd={handleColumnMove}
                renderCard={(props) => (
                    <div className="kanban-card" style={getGradient(props)}>
                        <div>
                            <span>{props.title}</span>
                            <button className="remove-button" type="button" onClick={() => handleCardRemove(getColumn(props), props)}>
                                <RxCross2 color="white" size={15} />
                            </button>
                        </div>
                        <span>{props.description}</span>
                    </div>
                )}
                renderColumnHeader={(props) => {
                    const [modalOpened, setModalOpened] = useState(false);

                    const handleAddCard = (title, detail) => {
                        handleCardAdd(props.id, title, detail);
                        setModalOpened(false);
                    };

                    return (
                        <div className="column-header">
                            <span>{props.title}</span>
                            <IoMdAdd color="white" size={25} title="Add card" onClick={() => setModalOpened(true)} />
                            <AddCardModal visible={modalOpened} handleCardAdd={handleAddCard} onClose={() => setModalOpened(false)} />
                        </div>
                    );
                }}
            >
                {board}
            </Board>
        </div>
    );
};

export default BoardPage;
