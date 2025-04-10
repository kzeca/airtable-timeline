# 📅 Airtable Timeline Clone

This project is a custom-built interactive timeline component inspired by Airtable's timeline view. It takes a list of events with start/end dates and visually places them on a timeline organized by lanes.

---

## ✨ What I like about this implementation

- **Pure CSS layouting**: Instead of relying on heavy libraries or pre-built timeline components, the layout is built from scratch using CSS only — this gave me total control over styling, performance, and responsiveness.
- **Modular structure**: The logic for things like assigning lanes, generating the date range, and formatting the display is separated into small, reusable utilities.
- **Dynamic headers**: The date headers are automatically generated with weekdays and month/year markers, making the component scalable to any time range.
- **Visual clarity**: Using `107px` as a fixed width per day keeps spacing consistent and makes it easy to reason about the timeline.

---

## 🔁 What I would change if I did it again

- **Improve accessibility**: I would add ARIA roles and keyboard navigation to improve usability for all users.
- **Add interaction**: Drag-and-drop for timeline items would make the UI more powerful.
- **Styling system**: Move away from plain CSS files and adopt CSS Modules, Tailwind, or Styled Components for better maintainability.

---

## 🧠 Design decisions and inspiration

- I researched **Airtable's** timeline view to find a balance between usability and simplicity.
- I intentionally avoided external UI libraries to stay close to the core logic and fully understand the data visualization workflow.
- CSS-only layout was chosen to avoid conflicts and reduce dependency bloat.

---

## ✅ How I would test this with more time

- **Unit tests** for key utility functions like `assignLanes`, `generateFullRange`, and `rangeValue`.
- **Integration tests** for rendering the timeline component with different data sets using something like `React Testing Library`.
- **Visual regression testing** to ensure the layout doesn’t break when styles change.

---

## 🚀 How to run the project

This project was built using **Vite** for fast local development and HMR.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/airtable-timeline.git
cd airtable-timeline
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

The project will be available at http://localhost:5173.

---

## 📁 Sample data

The project uses sample data provided in:

```bash
src/data/timelineItems.js
```

This data is automatically rendered inside the App.jsx component via the DatesProvider context.

---

## 🔍 Highlights

- System fully working with a 4 hour deadline.
- Full CSS styling with fine-tuned control over layout.
- Timeline lanes dynamically assigned based on item start/end dates.
- Context API used for global state management.
- Moment.js for date manipulation and formatting (weekday labels, month sections, day diffs).
- Modular utilities for lane assignment and range generation.
