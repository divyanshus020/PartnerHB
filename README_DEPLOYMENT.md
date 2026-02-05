# PartnersHB - KVM Deployment Summary

## 📋 Setup Overview

**Backend:** Already hosted in HireSpark folder  
**Frontend:** New folder `/var/www/partnershb`  
**Connection:** Environment variable se backend ko connect

---

## 🚀 Quick Deployment Commands

### First Time Setup (KVM Server pe)
```bash
# 1. Directory banao
cd /var/www/
mkdir partnershb && cd partnershb

# 2. Code clone karo
git clone <your-repo-url> .

# 3. Frontend setup
cd Frontend
npm install

# 4. Production env file banao
nano .env.production
# Add: VITE_API_URL=http://YOUR_SERVER_IP:5000/api/partner

# 5. Build karo
npm run build

# 6. Nginx setup (see KVM_DEPLOYMENT_STEPS.md for full config)
sudo nano /etc/nginx/sites-available/partnershb
sudo ln -s /etc/nginx/sites-available/partnershb /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Updates (Har baar)
```bash
cd /var/www/partnershb/Frontend
git pull
npm install
npm run build
sudo systemctl reload nginx
```

**Ya script se:**
```bash
cd /var/www/partnershb
./deploy-frontend.sh
```

---

## 📁 Files Created

1. **`.env.production`** - Production environment variables
2. **`deploy-frontend.sh`** - Deployment automation script
3. **`KVM_DEPLOYMENT_STEPS.md`** - Detailed step-by-step guide
4. **`DEPLOYMENT_GUIDE.md`** - Complete deployment documentation

---

## ✅ Checklist

### Before Deployment
- [ ] Code committed and pushed to Git
- [ ] `.env.production` created with correct backend URL
- [ ] Dependencies updated (`npm install`)
- [ ] Build successful locally (`npm run build`)

### On KVM Server
- [ ] Git repository cloned
- [ ] `.env.production` configured
- [ ] Dependencies installed
- [ ] Production build created
- [ ] Nginx configured and running
- [ ] Backend (hirespark-backend) running in PM2

### After Deployment
- [ ] Frontend accessible on browser
- [ ] API calls working (check Network tab)
- [ ] Login/Signup working
- [ ] All features functional

---

## 🔗 Important URLs

- **Frontend:** `http://your-server-ip` or `http://your-domain.com`
- **Backend API:** `http://your-server-ip:5000/api/partner`

---

## 🛠️ Quick Troubleshooting

**Frontend not loading?**
```bash
sudo systemctl status nginx
sudo tail -f /var/log/nginx/error.log
```

**API not connecting?**
```bash
pm2 list
pm2 logs hirespark-backend
cat .env.production
```

**Need to rebuild?**
```bash
cd /var/www/partnershb/Frontend
npm run build
sudo systemctl reload nginx
```

---

## 📞 Backend Integration

Backend already hosted hai, bas ensure karo:

1. **HireSpark backend running hai:**
   ```bash
   pm2 list | grep hirespark-backend
   ```

2. **CORS enabled hai frontend domain ke liye**

3. **API routes accessible hain:**
   ```bash
   curl http://localhost:5000/api/partner/health
   ```

---

## 💡 Pro Tips

- **Auto-deploy:** Script use karo for quick updates
- **Logs:** Hamesha logs check karo errors ke liye
- **Backup:** Important changes se pehle backup lo
- **Testing:** Local pe test karo before pushing to production

---

**Ready to deploy? Follow `KVM_DEPLOYMENT_STEPS.md` for detailed instructions!** 🚀
