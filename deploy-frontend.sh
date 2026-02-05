#!/bin/bash

# PartnersHB Frontend Deployment Script
# KVM Server pe run karo

echo "🚀 Starting PartnersHB Frontend Deployment..."

# Frontend directory path - update according to your server
FRONTEND_DIR="/var/www/partnershb/Frontend"

# Navigate to frontend directory
cd $FRONTEND_DIR || exit

echo "📦 Pulling latest code from Git..."
git pull origin main

echo "📥 Installing dependencies..."
npm install

echo "🔨 Building production bundle..."
npm run build

echo "🔄 Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ Deployment Complete!"
echo "🌐 Frontend is now live!"

# Optional: Show PM2 status if backend is running
echo ""
echo "📊 Backend Status:"
pm2 list | grep hirespark-backend
