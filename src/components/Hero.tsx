import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
    const { language, t } = useLanguage();

    const handleScrollToPricing = () => {
        const element = document.getElementById('pricing');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden pt-20"
        >
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 mix-blend-multiply filter animate-blob" />
                <div className="absolute top-1/2 -left-20 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50 mix-blend-multiply filter animate-blob animation-delay-2000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 text-blue-700 text-sm font-semibold mb-4 border border-blue-200">
                        {t('جديد: متوافق مع قانون المالية 2026', 'Nouveau: Conforme à la loi de finances 2026')}
                    </div>

                    <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                        {t(
                            'المنصة رقم 1 للفاتورة الالكترونية في تونس',
                            'La 1ère plateforme de facturation électronique en Tunisie'
                        )}
                    </h1>

                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        {t(
                            'الـمنصة الرقمية المخصصة للفوترة الالكترونية المزودة بالذكاء الاصطناعي، الاولى من نوعها في تونس، مطابقة للقانون الجبائي ومتصلة بالمنصة TTN.',
                            "La première plateforme digitale dédiée à la facturation électronique boostée par l'IA en Tunisie, conforme à la loi fiscale et connectée à la plateforme TTN."
                        )}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <button
                            onClick={handleScrollToPricing}
                            className="px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            {t('اكتشف الباقات', 'Découvrir les tarifs')}
                            {language === 'ar' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                        </button>
                        <button
                            // Optional secondary button link to Register or Learn More
                            // Not strictly requested but good for layout balance, using simple ghost style or remove if strictly sticking to specs along
                            className="px-8 py-4 text-slate-700 font-semibold hover:text-blue-900 transition-colors"
                            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {t('كيف يعمل؟', 'Comment ça marche ?')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
