Hedamo – Product Disclosure Interface

This project is a frontend implementation of a product listing and disclosure interface for the Hedamo system.
It demonstrates how producer-declared product information can be presented in a structured, transparent, and professional way without implying certification, verification, or approval.

The interface is designed to reflect Hedamo’s core philosophy: disclosure over verification.

🧭 Project Overview

Hedamo is a structured disclosure platform that allows producers to declare information about their products.
This frontend focuses on:

Displaying producer-reported product data

Allowing users to filter, search, and review disclosures

Presenting disclosure history and supporting evidence

Communicating clearly that information is producer-declared, not verified

The UI intentionally avoids language or visual cues that would imply institutional approval or validation.

🏗 Architecture

The project follows a Model–View–Controller (MVC) pattern:

Layer	Purpose
Model	Stores product data, versions, and disclosure attributes
Controller	Handles filtering, searching, and sorting logic
View	React components responsible for layout and UI rendering

This separation keeps the interface maintainable and reflects production-grade frontend design.

✨ Features
Product List

Product name

Category

Producer

Disclosure status (Draft / Submitted / Published)

Last updated timestamp

Search, filter, and sort controls

3D card layout with subtle elevation and hover states

Product Detail

Disclosure summary (declared by, date, evidence count)

Version history

Clear disclosure disclaimer

Institutional, calm visual design

UX & Design

Light sky-blue background for the list area

Silver-white 3D filter panels

Soft shadows and depth for cards and layout

Smooth hover and transition effects

Keyboard-friendly form controls

⚠️ Disclosure Notice

All information displayed in this interface is producer-declared.
Hedamo does not verify, certify, or approve any product claims.

The UI reflects this principle in both wording and visual design.

🛠 Tech Stack

React

React Router

Tailwind CSS

Vite

▶️ Setup & Run Locally
1. Install dependencies
npm install

2. Start development server
npm run dev


The application will run at:

http://localhost:5173

🗂 Folder Structure
src/
 ├─ models/        → Product data
 ├─ controllers/  → Filtering and sorting logic
 ├─ views/        → UI components
 ├─ App.jsx       → Routes and layout
 └─ main.jsx      → App entry

📌 Notes

Product data is mocked for demonstration purposes.

The design emphasizes neutrality, clarity, and institutional trust.

No language or UI element implies verification, certification, or endorsement.
