# KVM Server Deployment - Quick Steps

## Initial Setup (First Time Only)

### 1. KVM Server pe SSH karo
```bash
ssh root@your-kvm-ip
```

### 2. Directory setup karo
```bash
cd /var/www/
mkdir -p partnershb
cd partnershb
```

### 3. Git repository clone karo
```bash
git clone <your-repo-url> .
cd Frontend
```

### 4. Dependencies install karo
```bash
npm install
```

### 5. Production environment file banao
```bash
nano .env.production
```

**Add this (apna server IP daal do):**
```env
VITE_API_URL=http://YOUR_SERVER_IP:5000/api/partner
```

### 6. Build karo
```bash
npm run build
```

### 7. Nginx configure karo
```bash
sudo nano /etc/nginx/sites-available/partnershb
```

**Paste this config:**
```nginx
server {
    listen 80;
    server_name your-domain.com;  # ya IP address

    root /var/www/partnershb/Frontend/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Enable site:**
```bash
sudo ln -s /etc/nginx/sites-available/partnershb /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## Updates (Har baar jab code update karna ho)

### Simple Method - Manual
```bash
# KVM pe SSH karo
ssh root@your-kvm-ip

# Frontend directory me jao
cd /var/www/partnershb/Frontend

# Latest code pull karo
git pull

# Dependencies update karo (agar package.json change hua ho)
npm install

# Build karo
npm run build

# Nginx reload karo
sudo systemctl reload nginx
```

### Quick Method - Script se
```bash
# First time: Script ko executable banao
chmod +x /var/www/partnershb/deploy-frontend.sh

# Har update pe bas ye run karo
cd /var/www/partnershb
./deploy-frontend.sh
```

---

## Backend Connection Check

Backend already HireSpark ke saath hosted hai, check karo:

```bash
# PM2 status dekho
pm2 list

# Backend logs dekho
pm2 logs hirespark-backend

# Backend test karo
curl http://localhost:5000/api/partner/health
```

---

## Important URLs

- **Frontend:** `http://your-server-ip` ya `http://your-domain.com`
- **Backend API:** `http://your-server-ip:5000/api/partner`

---

## Troubleshooting

### Frontend nahi dikh raha?
```bash
# Nginx status check karo
sudo systemctl status nginx

# Nginx logs dekho
sudo tail -f /var/log/nginx/error.log

# Build folder check karo
ls -la /var/www/partnershb/Frontend/dist
```

### API connection fail ho raha?
```bash
# Backend running hai check karo
pm2 list

# .env.production me sahi URL hai check karo
cat /var/www/partnershb/Frontend/.env.production

# Rebuild karo
npm run build
sudo systemctl reload nginx
```

### Git pull nahi ho raha?
```bash
# Git status dekho
git status

# Local changes discard karo (careful!)
git reset --hard
git pull
```

---

## Quick Reference Commands

```bash
# SSH to server
ssh root@your-kvm-ip

# Go to project
cd /var/www/partnershb/Frontend

# Update code
git pull && npm install && npm run build && sudo systemctl reload nginx

# Check logs
pm2 logs hirespark-backend
sudo tail -f /var/log/nginx/access.log

# Restart services
sudo systemctl restart nginx
pm2 restart hirespark-backend
```

---

## Notes

- **Backend:** Already hosted in HireSpark folder
- **Frontend:** Separate folder `/var/www/partnershb`
- **Environment:** Production URL set in `.env.production`
- **Updates:** Just git pull + build + nginx reload

Bas itna hi! Simple and straightforward! 🚀
