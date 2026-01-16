import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, Star } from 'lucide-react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

const Pricing: React.FC = () => {
    const { t } = useLanguage();
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    };

    const plans = [
        {
            title: t('أساسي', 'Basique'),
            price: '40',
            currency: 'DT',
            period: t('شهر', 'mois'),
            features: [t('100 فاتورة', '100 factures')],
            highlight: false,
        },
        {
            title: t('محترف', 'Pro'),
            price: '60',
            currency: 'DT',
            period: t('شهر', 'mois'),
            features: [t('200 فاتورة', '200 factures'), t('دعم فني ذو أولوية', 'Support prioritaire')],
            highlight: true,
        },
        {
            title: t('غير محدود', 'Illimité'),
            price: '100',
            currency: 'DT',
            period: t('شهر', 'mois'),
            features: [t('تحويل ملفات PDF غير محدود', 'Conversion PDF illimitée'), t('دعم فني مخصص', 'Support dédié')],
            highlight: false,
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        {t('باقات الاشتراك الشهرية', 'Abonnements Mensuels')}
                    </h2>
                    <p className="text-slate-500 max-w-xl mx-auto">
                        {t(
                            'اختر الباقة المناسبة لاحتياجاتك وابدأ الانضمام إلى عصر الفوترة الرقمية.',
                            'Choisissez le plan adapté à vos besoins et rejoignez l\'ère de la facturation numérique.'
                        )}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={clsx(
                                'relative border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl',
                                plan.highlight
                                    ? 'bg-white border-blue-500 ring-4 ring-blue-500/10 shadow-xl scale-105 z-10'
                                    : 'bg-slate-50 border-slate-200 hover:border-blue-200'
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap">
                                    <Star size={14} fill="white" />
                                    {t('الأكثر طلباً', 'Le plus populaire')}
                                </div>
                            )}

                            <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.title}</h3>
                            <div className="flex items-baseline mb-6 gap-1 rtl:flex-row-reverse">
                                <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                                <div className="flex flex-col items-start rtl:items-end text-sm text-slate-500 font-medium">
                                    <span>{plan.currency}</span>
                                    <span>/ {plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-600">
                                        <div className="bg-blue-100 p-1 rounded-full text-blue-600 shrink-0">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={handleRegister}
                                className={clsx(
                                    'w-full py-3 rounded-xl font-bold transition-colors',
                                    plan.highlight
                                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20'
                                        : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600'
                                )}
                            >
                                {t('سجل الآن', "S'inscrire")}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
