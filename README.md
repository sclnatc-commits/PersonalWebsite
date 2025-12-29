# Professional Portfolio Website

A modern, professional static portfolio website inspired by [mfrdsfzi.com](https://mfrdsfzi.com/). Built with vanilla HTML, CSS, and minimal JavaScript. Designed for deployment on Azure Static Web Apps.

## ✨ Features

- **🎨 Clean, Minimal Design** - Professional aesthetic suitable for senior-level professionals
- **🌓 Dark Mode Toggle** - User preference saved in localStorage
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **🎯 Smooth Scrolling** - Native CSS smooth scroll with proper header offset
- **📌 Sticky Header** - Navigation always visible while scrolling
- **⚡ Fast Performance** - Vanilla JavaScript, no external dependencies
- **♿ Accessible** - Semantic HTML and ARIA labels
- **🚀 Azure Ready** - Pre-configured for Azure Static Web Apps deployment

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with variables, Grid, Flexbox
- **Vanilla JavaScript** - Minimal JS for interactions (no frameworks)
- **Azure Static Web Apps** - Free tier hosting

## 📁 File Structure

```
PersonalWebsite/
├── index.html              # Main HTML structure
├── styles.css              # All styles with dark mode support
├── script.js               # Minimal JavaScript for interactions
├── staticwebapp.config.json # Azure Static Web Apps configuration
├── .gitignore             # Git ignore file
└── README.md              # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone or download this repository**

2. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use a local server for better experience:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server -p 8000

# VS Code/Cursor Live Server extension
# Right-click index.html → "Open with Live Server"
```

3. **View at** `http://localhost:8000`

### Customization

1. **Update Content** - Edit `index.html`:
   - Replace "Your Name" with your name
   - Update job title and description
   - Add your certifications
   - Update skills list
   - Add your work experience
   - List your projects
   - Update contact email

2. **Customize Colors** (Optional) - Edit CSS variables in `styles.css`:
   ```css
   :root {
       --bg-primary: #ffffff;
       --text-primary: #1a1a1a;
       /* ... other variables */
   }
   ```

3. **Adjust Layout** - Modify spacing, fonts, and grid layouts in `styles.css`

## 🌐 Deployment to Azure Static Web Apps

### Prerequisites

- Azure account ([Free account available](https://azure.microsoft.com/free/))
- GitHub account
- Git installed locally

### Deployment Steps

#### Option 1: Via Azure Portal (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Create Static Web App in Azure**
   - Go to [Azure Portal](https://portal.azure.com)
   - Click "Create a resource"
   - Search for "Static Web App"
   - Click "Create"

3. **Configure**
   - **Subscription**: Select your subscription
   - **Resource Group**: Create new or use existing
   - **Name**: Your app name (e.g., `yourname-portfolio`)
   - **Plan type**: Free
   - **Region**: Choose closest to your audience
   - **Source**: GitHub
   - **Sign in with GitHub** and authorize
   - **Organization**: Your GitHub username
   - **Repository**: Select your repository
   - **Branch**: `main`
   - **Build Presets**: Custom
   - **App location**: `/`
   - **Output location**: `/`
   - **Api location**: (leave empty)

4. **Review + Create** → Wait for deployment (~5-10 minutes)

5. **Access your site** at `https://<your-app-name>.azurestaticapps.net`

#### Option 2: Via Azure CLI

```bash
# Login to Azure
az login

# Create Static Web App
az staticwebapp create \
  --name your-app-name \
  --resource-group your-resource-group \
  --location eastus2 \
  --sku Free \
  --branch main \
  --repository-url https://github.com/yourusername/your-repo-name.git \
  --app-location "/" \
  --output-location "/"
```

### Custom Domain (Optional)

1. In Azure Portal → Your Static Web App → "Custom domains"
2. Click "Add"
3. Follow DNS configuration instructions
4. Free SSL certificate is automatically provisioned

## 🎨 Features Explained

### Dark Mode
- Toggle button in navigation
- Preference saved in localStorage
- Smooth transitions between themes
- CSS variables make theme switching seamless

### Smooth Scrolling
- Native CSS `scroll-behavior: smooth`
- JavaScript adds proper offset for sticky header
- Works with anchor links in navigation

### Sticky Header
- Fixed positioning with `position: fixed`
- Subtle shadow appears on scroll
- Backdrop blur for modern glass effect
- Mobile-responsive hamburger menu

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Hamburger menu for mobile navigation
- Grid layouts adapt to screen size

## 📝 Code Comments

All files include comprehensive comments:
- **HTML**: Section-by-section structure explanations
- **CSS**: Organized with clear section headers
- **JavaScript**: Function-by-function documentation

## 🔧 Configuration

### Azure Static Web Apps

The `staticwebapp.config.json` handles:
- SPA routing (all routes → index.html)
- 404 error handling
- Caching headers
- File exclusions

## 📊 Performance

- **No external dependencies** - Vanilla code only
- **Minimal JavaScript** - ~200 lines, non-blocking
- **CSS-only animations** - Hardware accelerated
- **System fonts** - No font loading delays
- **Optimized for Lighthouse** - 90+ scores expected

## 🆓 Azure Free Tier

Includes:
- 100 GB bandwidth/month
- 2 custom domains
- Free SSL certificates
- Global CDN
- GitHub integration
- No server management

## 🐛 Troubleshooting

**Dark mode not working?**
- Check browser console for JavaScript errors
- Ensure `script.js` is loaded
- Clear localStorage: `localStorage.removeItem('theme')`

**Mobile menu not opening?**
- Check if JavaScript is enabled
- Verify `hamburger` and `nav-menu` IDs exist in HTML

**Smooth scroll not working?**
- Modern browsers support CSS `scroll-behavior`
- JavaScript adds header offset for better UX

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

Design inspired by [mfrdsfzi.com](https://mfrdsfzi.com/)

---

**Built with ❤️ for Azure Static Web Apps**

