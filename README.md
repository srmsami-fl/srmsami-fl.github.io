# SRM卝SAMIヅ — Personal Portfolio Website

**Md Sami Miah** — Professional Digital Marketer & Creative Designer
📍 Palashbari, Gaibandha, Bangladesh

Pure HTML5 + CSS3 + Vanilla JavaScript. কোনো ফ্রেমওয়ার্ক নেই।

## 📁 ফাইল স্ট্রাকচার

```
srmsami-portfolio/
├── index.html          # Home (Hero, Stats, Services, USP, CTA)
├── about.html          # বায়ো, স্কিল বার, টুলস, টাইমলাইন
├── services.html       # ৪টি সার্ভিস + How I Work প্রসেস
├── portfolio.html      # ফিল্টারেবল প্রজেক্ট গ্রিড
├── testimonials.html   # রিভিউ স্লাইডার + মার্কিউ
├── blog.html           # ব্লগ পোস্ট কার্ড
├── contact.html        # কন্টাক্ট ফর্ম (mailto fallback)
├── css/
│   └── style.css       # সম্পূর্ণ ডিজাইন সিস্টেম
└── js/
    └── main.js         # সব ইন্টার্যাকশন
```

## ✨ ফিচার

- ডার্ক গ্ল্যাসমরফিজম থিম, নিয়ন ব্লু/সায়ান/পার্পল গ্রেডিয়েন্ট
- মাল্টি-পেজ + active-page ন্যাভ হাইলাইট
- স্ক্রল-টু-টপ বাটন, স্ক্রল প্রোগ্রেস বার, হ্যামবার্গার মেনু
- IntersectionObserver দিয়ে reveal-on-স্ক্রল অ্যানিমেশন
- Hero স্ট্যাট কাউন্টার, এনিমেটেড স্কিল বার
- Portfolio ক্যাটাগরি ফিল্টার (Marketing / Design / Web / AI)
- Testimonial অটো-স্লাইডার (ডট + অ্যারো ন্যাভিগেশন)
- মোবাইল-ফার্স্ট রেসপন্সিভ — 320px ফোন থেকে 4K ডেস্কটপ
- SEO-রেডি: meta tags, Open Graph, semantic HTML, SVG favicon

## 🎨 কালার স্কিম বদলাতে

`css/style.css`-এর `:root` সেকশনে ভেরিয়েবল মান বদলান:

```css
--accent-1: #3b82f6;   /* প্রাইমারি ব্লু  */
--accent-2: #22d3ee;   /* সায়ান          */
--accent-3: #a855f7;   /* পার্পল          */
```

## 🚀 GitHub Pages-এ লাইভ করার ধাপ (বাংলায়)

### ধাপ ১ — রিপোজিটরি তৈরি
1. github.com-এ গিয়ে **New Repository** ক্লিক করুন
2. Repository name দিন: `srmsami-portfolio`
3. **Public** সিলেক্ট করুন → **Create repository**

### ধাপ ২ — ফাইল আপলোড
1. নতুন রিপোজিটরিতে **"uploading an existing file"** লিংকে ক্লিক করুন
2. এই ফোল্ডারের সব ফাইল/ফোল্ডার (index.html, about.html, css/, js/ ইত্যাদি)
   ড্র্যাগ-ড্রপ করে আপলোড করুন
3. **Commit changes** চাপুন

### ধাপ ৩ — GitHub Pages চালু
1. রিপোজিটরির **Settings** → বাম পাশে **Pages**
2. **Source**-এ `Deploy from a branch` সিলেক্ট করুন
3. Branch: `main` → Folder: `/ (root)` → **Save**
4. ২–৫ মিনিট পর আপনার সাইট লাইভ হবে:
   ```
   https://<your-username>.github.io/srmsami-portfolio/
   ```

### বিকল্প: Vercel (আরও সহজ)
1. [vercel.com](https://vercel.com)-এ GitHub দিয়ে লগইন করুন
2. **Add New → Project** → আপনার রিপোজিটরি সিলেক্ট করুন
3. **Deploy** চাপুন — শেষ! Vercel নিজেই লিংক দেবে।

## 📝 নোট
- কন্টাক্ট ফর্মটি `mailto:` fallback ব্যবহার করে — ব্রাউজারের ইমেইল অ্যাপ খুলবে।
  পরে Formspree (ফ্রি) দিয়ে রিঅ্যাল ফর্ম বানাতে পারবেন।
- বর্তমান সাইট: https://srmsamifl.vercel.app
