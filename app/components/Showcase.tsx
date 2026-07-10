import React, { useState } from 'react';

// Define the structure of a To-Do item
interface ShowcaseItem {
  id: string;
  text: string;
}

export default function Showcase() {
  // State management
  const [todos, setTodos] = useState<ShowcaseItem[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>('');

  // Add a new item to the list
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo: ShowcaseItem = {
      id: crypto.randomUUID(),
      text: inputValue.trim(),
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Delete an item from the list
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Enable edit mode for a specific item
  const startEditing = (id: string, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  // Save the updated text
  const handleSaveEdit = (id: string) => {
    if (!editText.trim()) return;

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo
      )
    );
    setEditingId(null);
    setEditText('');
  };

  // Cancel edit mode
  const cancelEditing = () => {
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="flex flex-col gap-2">
    <div className="font-bold text-xl text-white">Showcase...</div>
    <div className="font-medium text-lg text-white">This is my showcase area</div>
    <div className="font-medium text-lg text-white">When the state is showcase in string.</div>
    <div className="font-medium text-lg text-white">This component will be loaded.</div>

      {/* Input Form */}
      <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </form>

      {/* Todo List Items */}
      <ul className="space-y-3">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No tasks yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-3 bg-gray-700 rounded-md border border-gray-100"
            >
              {editingId === todo.id ? (
                /* Edit Mode UI */
                <div className="flex flex-1 items-center gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    autoFocus
                  />
                  <button
                    onClick={() => handleSaveEdit(todo.id)}
                    className="px-2 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="px-2 py-1 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                /* Normal Display Mode UI */
                <>
                  <span className="text-gray-700 break-all mr-4">{todo.text}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => startEditing(todo.id, todo.text)}
                      className="p-1.5 hover:bg-gray-200 rounded transition-colors text-lg"
                      title="Edit"
                    >
                      🖊️
                    </button>
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="p-1.5 hover:bg-gray-200 rounded transition-colors text-lg"
                      title="Delete"
                    >
                      ❌
                    </button>
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
