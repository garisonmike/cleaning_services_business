# SparkleClean - Documentation
## 1. Introduction 

### What is SparkleClean?

SparkleClean is an online cleaning services booking website where customers can:
- Browse available cleaning services
- See pricing for each service
- Learn about the company
- Book services through a contact form

### The Team

- Alex Mwangi — [GitHub](https://github.com/Aleckqhie)
- Anthony Chege — [GitHub](https://github.com/tonilency)
- Samson Mwaurah — [GitHub](https://github.com/Mwaurahh)
- Alvin Mugo — [GitHub](https://github.com/Tamperke42)
- Mike Moreti — [GitHub](https://github.com/garisonmike)

---

## 2. Business Concept

### The Problem
Finding reliable, verified cleaning professionals is time-consuming and difficult for homeowners.

### The Solution
Customers can:
1. Browse different cleaning services
2. See transparent pricing
3. Book services through a simple form
4. Connect with professional cleaners

### Services Offered
- **General House Cleaning** - $50
- **Laundry & Ironing** - $30
- **Kitchen Cleaning** - $40
- **Bathroom Cleaning** - $35
- **Window Cleaning** - $25
- **Deep Cleaning** - $100

---

## 3. Technologies Used

### HTML5
- **Semantic elements** for better structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- **Forms** with built-in validation attributes
- **Navigation links** connecting all pages
- **Input types** for better user experience (email, tel, date)

### CSS3
- **Flexbox** for navigation and card layouts
- **Grid layouts** for service and feature displays
- **Media queries** for responsive design
- **Transitions** for smooth hover effects
- **Custom color scheme** using CSS variables

### Simplicity of this codebase

- **Works everywhere** - Compatible with all browsers

---

## 4. Website Structure

### Page Overview

```
HOME (index.html) → First impression with features
    ↓
SERVICES (services.html) → All services with pricing
    ↓
ABOUT (about.html) → Company info and trust-building
    ↓
CONTACT (contact.html) → Booking form
```

### Navigation System
- Fixed navigation bar at the top of every page
- Links to all 4 pages: Home | Services | About | Contact
- Consistent across all pages using HTML `<nav>` element
- Active page highlighting using CSS classes

### File Structure
- **index.html** - Landing page with hero section and features
- **services.html** - Service cards with pricing and descriptions
- **about.html** - Mission statement and how it works
- **contact.html** - Contact information and booking form
- **styles.css** - Single stylesheet controlling all pages

---

## 5. Key HTML Features

### Semantic HTML Structure
```html
<header> - Site header with navigation
<nav> - Navigation menu
<main> - Main content area
<section> - Content sections
<footer> - Site footer with copyright
```

### Form Implementation
The contact form uses HTML5 attributes for validation:
- `required` - Makes fields mandatory
- `type="email"` - Validates email format
- `type="tel"` - Phone number input
- `type="date"` - Date picker with calendar
- `min` attribute - Prevents past date selection

### Example Form Field
```html
<input type="email" name="email" required>
<input type="date" name="date" min="2025-11-09" required>
```

The browser automatically handles validation - no additional code needed!

---

## 6. CSS Design Choices

### Color Scheme
- **Primary Brown (#5d4037)** - Navigation, footer, buttons
- **Medium Brown (#795548)** - Accents and hover states
- **Light Brown (#efebe9)** - Subtle backgrounds
- **White** - Content backgrounds, clean look

### Why Brown?
- Represents earthiness and natural cleaning
- Conveys reliability 
- Creates a warm, welcoming feeling


### Layout Techniques

**Flexbox for Navigation**
```css
nav {
    display: flex;
    justify-content: space-between;
}
```

**Grid for Services Display**
```css
.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}
```

### Responsive Design
Using media queries to adapt to different screen sizes:

```css
@media (max-width: 768px) {
    .services-grid {
        grid-template-columns: 1fr;
    }
}
```

- **Desktop (>768px)** - Multi-column layouts
- **Tablet (481-768px)** - 2-column layouts
- **Mobile (≤480px)** - Single column, stacked elements

---

## 7. Live Demonstration

### Demo Flow

1. **Home Page**
   - Show hero section with main headline
   - Point out feature cards (4 benefits)
   - Click "Book Now" button

2. **Services Page**
   - Show 6 service cards with pricing
   - Hover over cards to show CSS transitions
   - Click any "Book Now" button

3. **Contact Form**
   - Try submitting empty form (shows validation)
   - Enter invalid email (shows format validation)
   - Fill form correctly and show successful submission

4. **Responsive Design**
   - Resize browser window
   - Show how layout adapts to mobile view
   - Navigation becomes stacked
   - Service cards stack vertically

---


## Quick Reference

### Run the Website
```bash
python3 -m http.server 8000
```
Then visit: http://localhost:8000

### Testing Checklist
- [ ] Click all navigation links
- [ ] Test form validation (empty fields)
- [ ] Test email validation
- [ ] Try selecting past date
- [ ] Resize browser for responsive view
- [ ] Click multiple "Book Now" buttons

