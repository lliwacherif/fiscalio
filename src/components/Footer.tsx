import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-900 text-white py-8 mt-auto">
            <div className="container mx-auto px-6 text-center">
                <p className="text-slate-400 mb-2">
                    {t('© 2026 CherifCorp. جميع الحقوق محفوظة.', '© 2026 CherifCorp. Tous droits réservés.')}
                </p>
                <div className="flex justify-center space-x-4 rtl:space-x-reverse text-sm text-slate-500">
                    <a href="#" className="hover:text-white transition-colors">
                        {t('سياسة الخصوصية', 'Politique de confidentialité')}
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:text-white transition-colors">
                        {t('شروط الاستخدام', 'Conditions d\'utilisation')}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
