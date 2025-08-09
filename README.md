# QuickNotes 📝

A modern, fast, and user-friendly React + TypeScript app for managing your notes. Add, edit, delete, search, and categorize your notes with a beautiful UI and persistent local storage.

---

## 🚀 Features

- **Add Notes**: Create notes with optional titles, content, and categories.
- **Edit Notes**: Update note title, content, and category via a modal dialog.
- **Delete Notes**: Remove notes with a confirmation prompt.
- **Human-Readable Dates**: Notes display creation and update dates in a friendly format.
- **Dynamic Textarea**: The note input area resizes automatically as you type.
- **Category System**: Assign categories (e.g., Work, Personal, Ideas) to notes, each with its own color.
- **Search & Filter**: Instantly search notes by title or content and filter by category.
- **Persistent Storage**: All notes are saved in your browser's local storage.
- **Responsive Design**: Clean, modern, and responsive UI.

---

## 🖼️ Screenshots

![QuickNotes Screenshot](public/screenshot.png)

---

## 🏗️ Project Structure

```
src/
  App.tsx                # Main app logic and state
  Components/
    FormArea/
      Form/              # Note creation/edit form
      Modal/             # Modal for editing notes
    NotesArea/
      NotesBoard/        # Grid display of notes
      NoteCard/          # Individual note card
    SearchArea/
      SearchBar/         # Search input and category filter
    Categories/          # Category dropdown
  Models/
    Types.ts             # TypeScript types and category colors
  Utils/
    appUtils.ts          # Note CRUD and filtering logic
    dataUtils.ts         # Local storage helpers
    formUtils.ts         # Form helpers
  assets/                # Static assets
  App.css, index.css     # Styling
```

---

## 🛠️ How It Works

### 1. Add Notes
- Use the form to add a note with content, optional title, and category.
- The note is saved with the current date and shown in the notes grid.

### 2. Edit & Delete
- Click a note to open it in a modal for editing.
- Delete a note with a confirmation prompt.

### 3. Categories
- Choose a category for each note.
- Notes are color-coded by category.

### 4. Search & Filter
- Use the search bar to find notes by title or content.
- Filter notes by category using the dropdown.

### 5. Persistence
- All notes are stored in local storage and persist across reloads.

---

## 📦 Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Run locally**
   ```sh
   npm run dev
   ```

3. **Build for production**
   ```sh
   npm run build
   ```

4. **Deploy to GitHub Pages**
   ```sh
   npm run deploy
   ```

---

## 📚 Main Concepts & Steps

- **Step 1:** Basic note form and grid display.
- **Step 2:** Human-readable dates, delete with confirmation.
- **Step 3:** Optional note title.
- **Step 3.1:** Dynamic textarea resizing.
- **Step 4:** Modal for viewing/editing notes.
- **Step 5:** Edit notes, show update date.
- **Step 6:** Deploy to GitHub Pages.
- **Step 7:** Local storage persistence.
- **Step 8:** Note categories with colors.
- **Step 9:** Search and filter notes.

---

## 🧑‍💻 Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Mantine UI](https://mantine.dev/) (for modal and UI elements)
- CSS Modules

---

## ✨ Author

Itai Glikman

---

## 📄 License

MIT

---

Enjoy using **QuickNotes** and boost your productivity!