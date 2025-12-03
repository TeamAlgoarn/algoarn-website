# 🌐 Algoarn Website

Official **Algoarn** marketing & product website featuring **SUCA – AI-Powered Academic Intelligence**, enterprise AI services, institutional solutions, and future-ready blog/admin capabilities.

Designed with a **dark + blue neon theme**, glassmorphism UI, and smooth Framer Motion animations.

---

## 🚀 Tech Stack

### **Frontend**
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **UI:** Custom glassmorphism components (Button, Card, NeonCard, etc.)

### **Backend (Planned)**
- MongoDB + Mongoose *(or Supabase + Prisma — decision pending)*
- Email provider: Resend / Nodemailer
- Admin & API routes for dynamic content management

---

## 📂 Project Structure

algoarn-website/
├── public/
│ ├── favicon.ico
│ ├── algo-logo.jpg
│ └── icons/
│ ├── computer-vision.svg
│ ├── generative-ai.svg
│ ├── predictive-ai.svg
│ ├── lms.svg
│ ├── custom-ai.svg
│ └── software-dev.svg
│
├── src/
│ ├── app/
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ ├── globals.css
│ │ │
│ │ ├── suca/page.tsx
│ │ ├── services/page.tsx
│ │ ├── contact/page.tsx
│ │ │
│ │ ├── careers/
│ │ │ ├── page.tsx
│ │ │ ├── [id]/page.tsx
│ │ │ └── apply/[id]/page.tsx
│ │ │
│ │ ├── blog/
│ │ │ ├── page.tsx
│ │ │ └── [slug]/page.tsx
│ │ │
│ │ ├── admin/
│ │ │ ├── layout.tsx
│ │ │ ├── login/page.tsx
│ │ │ ├── dashboard/page.tsx
│ │ │ ├── blogs/page.tsx
│ │ │ ├── careers/page.tsx
│ │ │ ├── contacts/page.tsx
│ │ │ └── applications/page.tsx
│ │ │
│ │ └── api/
│ │ ├── contact/route.ts
│ │ ├── applications/route.ts
│ │ ├── blog/
│ │ │ ├── route.ts
│ │ │ └── [id]/route.ts
│ │ └── careers/route.ts
│ │
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Navbar.tsx
│ │ │ └── Footer.tsx
│ │ │
│ │ ├── ui/
│ │ │ ├── button.tsx
│ │ │ ├── card.tsx
│ │ │ ├── input.tsx
│ │ │ ├── textarea.tsx
│ │ │ └── neon-card.tsx
│ │ │
│ │ ├── home/
│ │ └──  HeroSection.tsx
│ │
│ ├── lib/
│ │ ├── supabase.ts
│ │ ├── email.ts
│ │ └── validations.ts
│ │
│ ├── contexts/
│ │ └── BlogContext.tsx
│ ├── providers/
│ │ └── Providers.tsx
│ │
│ └── config/
│ └── site.ts
│
├── .env.local
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json

yaml
Copy code

---

## 🧩 Key Pages

### **Home (`/`)**
- Hero: *Smart AI for Smarter Institutions & Businesses*
- Why Algoarn (neon cards)
- SUCA preview section
- AI services summary
- Blog highlights *(coming soon)*
- Final CTA

---

### **SUCA (`/suca`)**
- Hero: *AI-Powered Academic Intelligence*
- Problem & challenges faced by institutions
- SUCA overview + metrics
- Editions: University, School, Pre-University
- Features grid
- Privacy & demo policy
- CTA

---

### **Services (`/services`)**
- AI services hero
- Full services grid
- Experience & trust indicators
- Final CTA

---

### **Contact (`/contact`)**
Form fields:
- Name  
- Email  
- Phone  
- Organisation  
- Topic (dropdown)  
- Message  

Submits to `/api/contact` *(backend planned)*.

---

### **Careers**
- `/careers` – All openings  
- `/careers/[id]` – Job details  
- `/careers/apply/[id]` – Application form → `/api/applications`

---

## 🛠️ Planned Features
- Admin dashboard (blogs, careers, contacts, applications)
- Blog listing & dynamic blog pages
- DB models & CRUD API routes
- Email notifications for submissions

---

## ▶️ Run Locally

```bash
npm install
npm run dev
App will run on:

arduino
Copy code
http://localhost:3000
📜 License
Private project. All rights reserved to Algoarn.