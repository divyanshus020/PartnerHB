# PartnersHB Frontend Deployment Guide

## Overview
यह guide PartnersHB frontend को KVM server पर deploy करने के लिए है। Backend पहले से ही HireSpark के साथ hosted है।

## Prerequisites
- KVM server access (SSH)
- Node.js और npm installed
- PM2 installed (process manager)
- Nginx configured (for serving frontend)

## Deployment Steps

### 1. Server पर Connect करें
```bash
ssh user@your-kvm-server-ip
```

### 2. Frontend के लिए Directory बनाएं
```bash
cd /var/www/
sudo mkdir -p partnershb-frontend
sudo chown -R $USER:$USER partnershb-frontend
cd partnershb-frontend
```

### 3. Code को Server पर Transfer करें

**Option A: Git से Clone करें (Recommended)**
```bash
git clone <your-repo-url> .
cd Frontend
```

**Option B: Local से SCP करें**
```bash
# Local machine से run करें
scp -r "c:\Divyanshu\Divyanshu\Project\HiringBazar\PartnersHB\Frontend" user@server-ip:/var/www/partnershb-frontend/
```

### 4. Dependencies Install करें
```bash
cd /var/www/partnershb-frontend/Frontend
npm install
```

### 5. Production Environment File बनाएं
```bash
nano .env.production
```

**Add the following content:**
```env
# Backend API URL - HireSpark backend में hosted
VITE_API_URL=http://your-server-ip:5000/api/partner

# या अगर domain है तो:
# VITE_API_URL=https://api.hirespark.com/api/partner
```

### 6. Production Build बनाएं
```bash
npm run build
```

यह `dist` folder में optimized production build बनाएगा।

### 7. Nginx Configuration

**Create Nginx config file:**
```bash
sudo nano /etc/nginx/sites-available/partnershb
```

**Add the following configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;  # या server IP

    root /var/www/partnershb-frontend/Frontend/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

**Enable the site:**
```bash
sudo ln -s /etc/nginx/sites-available/partnershb /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 8. SSL Certificate Setup (Optional but Recommended)

**Using Certbot for Let's Encrypt:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### 9. Backend Connection Verify करें

**Check if backend is running:**
```bash
pm2 list
# hirespark-backend running होना चाहिए
```

**Test backend endpoint:**
```bash
curl http://localhost:5000/api/partner/health
```

### 10. Frontend को Test करें

Browser में open करें:
- `http://your-server-ip` (या your domain)
- Check करें कि frontend load हो रहा है
- Login/Signup test करें backend connection verify करने के लिए

## Alternative: Serve with PM2 (Development/Preview)

अगर आप Nginx के बजाय PM2 से serve करना चाहते हैं:

```bash
# Install serve globally
npm install -g serve

# PM2 से start करें
pm2 start serve --name partnershb-frontend -- -s dist -l 3000

# Save PM2 configuration
pm2 save
pm2 startup
```

## Environment Variables Reference

### Development (.env)
```env
VITE_API_URL=http://localhost:5000/api/partner
```

### Production (.env.production)
```env
VITE_API_URL=http://your-server-ip:5000/api/partner
# या
VITE_API_URL=https://api.hirespark.com/api/partner
```

## Troubleshooting

### Issue 1: API Connection Failed
**Solution:**
- Backend running है verify करें: `pm2 list`
- Backend logs check करें: `pm2 logs hirespark-backend`
- CORS settings check करें backend में
- Firewall rules check करें

### Issue 2: 404 on Page Refresh
**Solution:**
- Nginx config में `try_files $uri $uri/ /index.html;` है verify करें
- Nginx reload करें: `sudo systemctl reload nginx`

### Issue 3: Build Errors
**Solution:**
- Node version check करें: `node -v` (v16+ recommended)
- Dependencies reinstall करें: `rm -rf node_modules package-lock.json && npm install`
- Cache clear करें: `npm run build -- --force`

## Maintenance Commands

```bash
# Frontend rebuild करें
cd /var/www/partnershb-frontend/Frontend
git pull  # if using git
npm install
npm run build
sudo systemctl reload nginx

# Logs देखें
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# PM2 logs (if using PM2)
pm2 logs partnershb-frontend
```

## Backend Integration Notes

Backend already hosted है HireSpark के साथ, तो ensure करें:

1. **CORS Configuration** backend में:
   ```javascript
   // Backend में cors allow करें frontend domain के लिए
   cors({
     origin: ['http://your-frontend-domain.com', 'https://your-frontend-domain.com'],
     credentials: true
   })
   ```

2. **API Routes** consistent हैं:
   - `/api/partner/auth/register`
   - `/api/partner/auth/login`
   - `/api/partner/auth/google`
   - etc.

3. **Environment Variables** backend में set हैं properly

## Quick Deployment Script

Create a deployment script for easy updates:

```bash
#!/bin/bash
# deploy.sh

echo "🚀 Deploying PartnersHB Frontend..."

cd /var/www/partnershb-frontend/Frontend

echo "📦 Pulling latest changes..."
git pull

echo "📥 Installing dependencies..."
npm install

echo "🔨 Building production bundle..."
npm run build

echo "🔄 Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ Deployment complete!"
echo "🌐 Visit: http://your-domain.com"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run it:
```bash
./deploy.sh
```

## Security Checklist

- [ ] SSL certificate installed
- [ ] Environment variables में sensitive data नहीं है
- [ ] Nginx security headers configured हैं
- [ ] Firewall rules properly set हैं
- [ ] Backend CORS properly configured है
- [ ] Regular backups setup हैं

## Support

अगर कोई issue आए तो:
1. Nginx logs check करें
2. Backend logs check करें (PM2)
3. Browser console check करें
4. Network tab में API calls check करें
