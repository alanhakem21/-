import { 
  Award, 
  Sparkles,
  Layers,
  BookOpen
} from 'lucide-react';

interface StageData {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
}

export default function App() {
  const stages: StageData[] = [
    { 
      id: 'stage-1', 
      title: 'قۆناغی یەکەم', 
      subtitle: 'بەشی یەکەم', 
      items: [
        'کوردی',
        'شەتڕەنج',
        'دیدەوانی',
        'ئینگلیزی',
        'لیاقە',
        'باسکە',
        'مەلەوانی',
        'ماف و جینیۆساید',
        'عەرەبی',
        'تۆپی پێ',
        'تۆپی دەست',
        'کۆمپیوتەر',
        'گۆڕەپان',
        'ئاین',
        'جومناستیک'
      ] 
    },
    { 
      id: 'stage-2', 
      title: 'قۆناغی دووەم', 
      subtitle: 'بەشی دووەم', 
      items: [
        'عەرەبی',
        'یاری ڕێکت',
        'پەروەردە و پەروەردەی وەرزشی',
        'دەروونزانی پەروەردەیی',
        'کوردی',
        'ئینگلیزی',
        'توێکاری',
        'ئاین',
        'گۆڕەپان',
        'تۆپی دەست',
        'بالە',
        'تۆپی پێ',
        'کۆمپیوتەر',
        'جومناستیک'
      ] 
    },
    { id: 'stage-3', title: 'قۆناغی سێیەم', subtitle: 'بەشی سێیەم', items: [] },
    { id: 'stage-4', title: 'قۆناغی چوارەم', subtitle: 'بەشی چوارەم', items: [] },
    { id: 'stage-5', title: 'قۆناغی پێنجەم', subtitle: 'بەشی پێنجەم', items: [] }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans leading-relaxed flex flex-col selection:bg-emerald-500 selection:text-white" dir="rtl">
      
      {/* Decorative top header bar */}
      <div className="bg-slate-950 text-slate-350 text-center py-2.5 text-3xs sm:text-xs border-b border-slate-900 tracking-wide font-medium flex items-center justify-center gap-1.5 px-4 shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
        ماڵپەڕی دروست کراوی نافەرمی پەیمانگای پەروەردەی وەرزشی چەمچەماڵ
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 flex flex-col gap-12">
        
        {/* Main Header Card showing the circular emblem logo and titles */}
        <div className="text-center space-y-6 max-w-2xl mx-auto bg-white border border-slate-200/80 p-8 sm:p-12 rounded-3xl shadow-xs transition-all w-full">
          
          {/* Emblem/Logo */}
          <div className="mx-auto w-40 h-40 sm:w-48 sm:h-48 overflow-hidden rounded-full border border-slate-100 shadow-md flex items-center justify-center bg-white p-1 hover:scale-105 transition-all duration-300">
            <img
              src="/src/assets/images/chamchamal_logo_1779292691278.png"
              alt="پەیمانگای پەروەردەی وەرزشی چەمچەماڵ"
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Brand Name / Title */}
          <div className="space-y-2.5">
            <h1 className="text-2xl sm:text-3.5xl font-black text-slate-900 tracking-tight leading-normal">
              پەیمانگای پەروەردەی وەرزشی چەمچەماڵ
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-mono font-bold tracking-wider uppercase">
              Chamchamal Sports Education Institute
            </p>
          </div>

          {/* Decoration */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            <span className="h-1 w-10 bg-emerald-500 rounded-full" />
            <span className="h-1 w-1.5 bg-emerald-500 rounded-full" />
          </div>

        </div>

        {/* The 5 Custom Sections as requested */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Layers className="w-5 h-5 text-emerald-600" />
            <h2 className="text-xl font-extrabold text-slate-950">بەش و قۆناغەکانی خوێندن</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {stages.map((stage) => (
              <div 
                key={stage.id} 
                className="bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-sm hover:border-slate-350 transition-all quiet flex flex-col h-[360px]"
              >
                {/* Section Header */}
                <div className="p-5 border-b border-slate-100 bg-slate-50/50 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-3xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-100/60">
                      {stage.subtitle}
                    </span>
                    <img 
                      src="/src/assets/images/chamchamal_logo_1779292691278.png" 
                      className="w-6 h-6 object-cover rounded-full" 
                      alt="لۆگۆ" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mt-2.5">{stage.title}</h3>
                </div>

                {/* Section Content Area / Dynamic Content list */}
                <div className="flex-1 p-5 overflow-y-auto space-y-3">
                  {stage.items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center p-4">
                      <BookOpen className="w-8 h-8 text-slate-300 stroke-[1.5] mb-2" />
                      <p className="text-3xs text-slate-400 font-bold">بەرنامەی خوێندن بەم زووانە دادەنرێت</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {stage.items.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100/50 transition-colors"
                        >
                          <span className="text-3xs font-semibold text-slate-700 break-all leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-450 py-8 border-t border-slate-900 text-center text-4xs sm:text-3xs font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} پەیمانگای پەروەردەی وەرزشی چەمچەماڵ. سەرجەم مافەکان پارێزراون.</p>
          <div className="flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-emerald-500" />
            <span>کراوە بۆ پیشاندانی پێکهاتەی فەرمی خوێندنی وەرزش</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
