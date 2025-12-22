import React, { createContext, useState, useContext } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    home: "Home",
    ejournal: "E-Journal",
    guidebook: "Guidebook",
    status: "Status",
    reports: "Reports",
    settings: "Settings",
    accounts: "Accounts",
    history: "History",
    language: "Language",
    accessibility: "Accessibility",
    accountSecurity: "Account security",
    about: "About",
    account: "Account",
    changePassword: "Change Password",
    helpCenter: "Help Center",
    logOut: "Log Out",
    camera: "Camera",
    captureGreenMoments: "Capture your green moments",
    noImage: "No image yet",
    takePhoto: "Take Photo",
    chooseGallery: "Choose from Gallery",
  },
  id: {
    home: "Beranda",
    ejournal: "E-Jurnal",
    guidebook: "Buku Panduan",
    status: "Status",
    reports: "Laporan",
    settings: "Pengaturan",
    accounts: "Akun",
    history: "Riwayat",
    language: "Bahasa",
    accessibility: "Aksesibilitas",
    accountSecurity: "Keamanan Akun",
    about: "Tentang",
    account: "Akun",
    changePassword: "Ubah Kata Sandi",
    helpCenter: "Pusat Bantuan",
    logOut: "Keluar",
    camera: "Kamera",
    captureGreenMoments: "Abadikan momen hijau Anda",
    noImage: "Belum ada gambar",
    takePhoto: "Ambil Foto",
    chooseGallery: "Pilih dari Galeri",
  },
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    const lang = language as 'en' | 'id';
    return translations[lang][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};