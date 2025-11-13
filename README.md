# 🧪 Chem Lab AR Website  
**Capstone Design Team 7 — AR Chemical Experiment Platform**

Official web platform for the **Chem Lab AR Application**, created by **Team 7** at **Sungkyunkwan University**.  
This website introduces the AR app, provides student login / class joining / quiz reports, and allows direct app downloads.

---

## 🌐 Project Overview

Many schools cannot perform real chemical experiments due to safety risks and high costs.  
**Chem Lab AR** provides an **Augmented Reality (AR)** experience that makes chemistry learning safe, interactive, and visually engaging.

The **web platform** supports:
- 🏠 App introduction & overview  
- 🔐 Student login / signup via Swagger API  
- 📊 Quiz score & activity report page  
- 🔢 Class barcode joining  
- 📲 Download page for AR app  

---

# Tech Stack

Framework: React+Vite
Styling: CSS Modules
Communication: Fetch API
Package Manager: pnpm
Deployment: Netlify
Code Style: ESLint + Prettier
Backend API: Swagger/ Node.js

## Installation & Run 

#1. clone the repo
git clone https://github.com/shm41503/capstonedesignteam7website.git
cd capstonedesignteam7website

# 2. install dependencies (using pnpm)
npm install -g pnpm
pnpm install

# 3. run development server
pnpm dev



# Deployment (Netlify)

1. Build Command
- pnpm build

2. Publish Directory
- dist

# Design System

Primary (Purple)	#8B4CFF	Mascot / Buttons
Accent (Yellow)	#FFC300	Highlights / Progress
Text (Main)	#FFFFFF	Main text
Text (Sub)	#B6B8C2	Secondary text
Background #E9F3FF Light Blue

# Key Features

Key Features

🏠 Homepage – AR app overview & character intro

🔐 Login/Signup – connected to Swagger API

📊 Student Reports – view quiz scores & attendance

🔢 Class Barcode – join class via code input

📲 Download Page – App Store / Play Store links

🧪 Mascot Guide – animated assistant explaining experiments

# How to fork 
Create a new branch for your changes
git checkout -b feature/your-feature-name

ex: feature/add-login-popup