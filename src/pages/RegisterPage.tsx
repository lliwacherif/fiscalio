import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, Building2, User, Mail, Phone, MessageSquare } from 'lucide-react';

const RegisterPage: React.FC = () => {
    const { t } = useLanguage();
    const [submitting, setSubmitting] = useState(false);

    return (
        <div className="min-h-screen pt-24 pb-12 bg-slate-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden">
                <div className="bg-blue-900 p-8 text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        {t('احجز مقعدك وسنتصل بك', 'Réservez votre place, nous vous contacterons')}
                    </h1>
                    <p className="text-blue-100">
                        {t(
                            'املأ الاستمارة أدناه وسيقوم فريقنا بالتواصل معك في أقرب وقت.',
                            'Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les plus brefs délais.'
                        )}
                    </p>
                </div>

                <div className="p-8 md:p-10">
                    <form
                        action="https://formsubmit.co/liwacherif200@gmail.com"
                        method="POST"
                        className="space-y-6"
                        onSubmit={() => setSubmitting(true)}
                    >
                        {/* FormSubmit Configuration */}
                        <input type="hidden" name="_subject" value="New Fiscalio Lead!" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                    <User size={16} className="text-blue-600" />
                                    {t('الاسم اللقب', 'Nom et Prénom')}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400"
                                    placeholder={t('أدخل اسمك الكامل', 'Votre nom complet')}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                    <Building2 size={16} className="text-blue-600" />
                                    {t('اسم الشركة', 'Nom de la société')}
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    required
                                    className="w-full px-4 py-3 bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400"
                                    placeholder={t('أدخل اسم الشركة', 'Votre société')}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                    <Mail size={16} className="text-blue-600" />
                                    {t('البريد الإلكتروني', 'Email')}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 font-sans"
                                    placeholder="name@company.com"
                                    dir="ltr"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                    <Phone size={16} className="text-blue-600" />
                                    {t('رقم الهاتف', 'Numéro de téléphone')}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 font-sans"
                                    placeholder="+216 00 000 000"
                                    dir="ltr"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                <MessageSquare size={16} className="text-blue-600" />
                                {t('رسالة (اختياري)', 'Message (optionnel)')}
                            </label>
                            <textarea
                                name="message"
                                rows={4}
                                className="w-full px-4 py-3 bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 resize-none"
                                placeholder={t('أدخل رسالتك هنا...', 'Votre message ici...')}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {submitting ? (
                                <span>{t('جاري الإرسال...', 'Envoi en cours...')}</span>
                            ) : (
                                <>
                                    <Send size={20} />
                                    <span>{t('زر إرسال', 'Envoyer')}</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
