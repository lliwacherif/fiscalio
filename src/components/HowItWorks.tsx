import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import img1 from '../assets/img1.png';
import { Brain, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="features" className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 space-y-8 animate-in slide-in-from-left-0 duration-700">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                            <Brain size={18} />
                            <span>{t('قوة الذكاء الاصطناعي', 'Puissance de l\'IA')}</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            {t(
                                'كيف تعمل منصة فيسكاليو؟',
                                'Comment fonctionne Fiscalio ?'
                            )}
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed">
                            {t(
                                'تستخدم منصة فيسكاليو أحدث تقنيات الذكاء الاصطناعي لتحليل بياناتك المالية وإنشاء فواتير إلكترونية مطابقة للمعايير (XML) بشكل آلي وفوري. نحن نضمن لك الامتثال التام مع المنظومة الجبائية التونسية دون عناء.',
                                'Fiscalio exploite les dernières technologies d\'intelligence artificielle pour analyser vos données financières et générer instantanément des factures électroniques conformes aux normes (XML). Nous garantissons une conformité totale avec le système fiscal tunisien, sans effort.'
                            )}
                        </p>

                        <ul className="space-y-4">
                            {[
                                t('توليد فواتير XML بضغطة زر', 'Génération de factures XML en un clic'),
                                t('تحقق آلي من الأخطاء الجبائية', 'Vérification automatique des erreurs fiscales'),
                                t('ربط مباشر وآمن مع منصة TTN', 'Connexion directe et sécurisée avec la plateforme TTN')
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <CheckCircle className="text-green-500 shrink-0" size={20} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="flex-1 relative animate-in slide-in-from-right-0 duration-700 delay-200">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-3xl transform rotate-3 scale-105 z-0" />
                        <img
                            src={img1}
                            alt="Fiscalio AI Dashboard"
                            className="relative rounded-3xl shadow-2xl z-10 w-full h-auto object-cover border border-slate-100"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
