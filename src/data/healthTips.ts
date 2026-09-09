import { HealthTip } from '../types';

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: 'stay-hydrated',
    titleEnglish: 'Stay Hydrated',
    titleHindi: 'पर्याप्त पानी पिएं और हाइड्रेटेड रहें',
    categoryEnglish: 'Daily Hydration',
    categoryHindi: 'दैनिक जल सेवन',
    shortDescriptionEnglish: 'Adequate daily fluid intake keeps organs functioning, joints lubricated, and immune defenses strong.',
    shortDescriptionHindi: 'भरपूर पानी पीने से शरीर के अंग सही काम करते हैं, विषैले तत्व बाहर निकलते हैं और ऊर्जा बनी रहती है।',
    iconName: 'Droplet',
    accentColor: 'text-sky-600 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800',
    fullGuidanceEnglish: [
      'Water accounts for roughly 60% of adult body weight and is essential for temperature regulation, toxin elimination, and cellular nutrient transport.',
      'Aim for approximately 2 to 3 liters (8–10 glasses) of fluid daily from water, herbal teas, and water-rich fresh vegetables and fruits.',
      'Check your hydration status simply by noting urine color: pale straw or light yellow signifies optimal hydration.'
    ],
    fullGuidanceHindi: [
      'हमारे शरीर का लगभग 60% हिस्सा पानी से बना है। पानी शरीर के तापमान को नियंत्रित करने और विषैले पदार्थों को बाहर निकालने के लिए बेहद जरूरी है।',
      'प्रतिदिन कम से कम 2 से 3 लीटर (8-10 गिलास) पानी, नारियल पानी या हर्बल चाय पिएं।',
      'पेशाब का हल्का पीला या पारदर्शी रंग इस बात का संकेत है कि आपका शरीर पर्याप्त रूप से हाइड्रेटेड है।'
    ],
    actionableStepsEnglish: [
      'Drink a glass of water immediately after waking up to kickstart metabolism',
      'Keep a reusable water bottle near your desk or work area',
      'Infuse water with lemon slices, mint, or cucumber for natural flavor',
      'Increase fluid intake during hot weather or strenuous exercise'
    ],
    actionableStepsHindi: [
      'सुबह उठते ही एक गिलास गुनगुना पानी पिएं',
      'अपने काम की जगह पर पानी की बोतल हमेशा पास रखें',
      'पानी में नींबू, पुदीना या खीरे के टुकड़े डालकर पिएं',
      'गर्मी और व्यायाम के समय अधिक तरल पदार्थ लें'
    ]
  },
  {
    id: 'adequate-sleep',
    titleEnglish: 'Get Adequate Sleep',
    titleHindi: 'पर्याप्त और गहरी नींद लें',
    categoryEnglish: 'Rest & Recovery',
    categoryHindi: 'आराम एवं पुनरुद्धार',
    shortDescriptionEnglish: 'Quality sleep is when the body produces cytokines and immune cells to repair tissues and combat illness.',
    shortDescriptionHindi: 'गहरी नींद के दौरान शरीर नई प्रतिरक्षा कोशिकाओं का निर्माण करता है और रोग प्रतिरोधक क्षमता को बढ़ाता है।',
    iconName: 'Moon',
    accentColor: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800',
    fullGuidanceEnglish: [
      'Adults require 7 to 9 hours of restorative sleep each night. During deep sleep, growth hormones stimulate tissue repair and the immune system replenishes antibody reserves.',
      'Chronic sleep deprivation suppresses immune function, making you up to three times more susceptible to viral infections after exposure.',
      'Establish a fixed bedtime and wake-up time, even on weekends, to stabilize your internal circadian clock.'
    ],
    fullGuidanceHindi: [
      'वयस्कों को हर रात 7 से 9 घंटे की गहरी नींद की आवश्यकता होती है। नींद में शरीर की मरम्मत होती है और नई ऊर्जा मिलती है।',
      'नींद पूरी न होने से प्रतिरक्षा प्रणाली कमजोर होती है और सर्दी-जुकाम जैसे संक्रमण का खतरा तीन गुना बढ़ जाता है।',
      'रोजाना सोने और जागने का समय एक निश्चित रखें ताकि जैविक घड़ी संतुलित रहे।'
    ],
    actionableStepsEnglish: [
      'Avoid blue-light screens (phones, tablets, laptops) for 45 minutes before sleep',
      'Keep your sleeping environment cool (around 65°F / 18°C), quiet, and dark',
      'Limit caffeine intake after 2:00 PM',
      'Create a 15-minute relaxing bedtime ritual such as light reading or warm herbal tea'
    ],
    actionableStepsHindi: [
      'सोने से 45 मिनट पहले मोबाइल, टीवी और लैपटॉप की स्क्रीन बंद कर दें',
      'कमरे में अंधेरा और शांति रखें',
      'दोपहर के बाद तेज चाय या कॉफी का सेवन कम करें',
      'सोने से पहले कुछ मिनट अच्छी किताब पढ़ें या गहरी सांस लें'
    ]
  },
  {
    id: 'good-hygiene',
    titleEnglish: 'Maintain Good Hygiene',
    titleHindi: 'व्यक्तिगत स्वच्छता बनाए रखें',
    categoryEnglish: 'Infection Prevention',
    categoryHindi: 'संक्रमण से बचाव',
    shortDescriptionEnglish: 'Simple, consistent hygiene habits form the primary defensive barrier against infectious pathogens.',
    shortDescriptionHindi: 'नियमित रूप से साबुन से हाथ धोने से बैक्टीरिया और वायरस से होने वाले संक्रमण से 80% तक बचाव होता है।',
    iconName: 'ShieldCheck',
    accentColor: 'text-teal-600 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800',
    fullGuidanceEnglish: [
      'Hand washing with plain soap and clean running water is one of the most effective ways to remove microbes and prevent gastrointestinal and respiratory infections.',
      'Lather the backs of your hands, between your fingers, and under your nails for at least 20 seconds before rinsing.',
      'When soap and water are unavailable, use an alcohol-based hand rub with at least 60% alcohol.'
    ],
    fullGuidanceHindi: [
      'साबुन और पानी से हाथ धोना बीमारियों से बचने का सबसे आसान और प्रभावी उपाय है।',
      'हाथों के पीछे, उंगलियों के बीच और नाखूनों के नीचे कम से कम 20 सेकंड तक साबुन लगाएं।',
      'घर से बाहर होने पर 60% अल्कोहल वाले हैंड सैनिटाइजर का प्रयोग करें।'
    ],
    actionableStepsEnglish: [
      'Wash hands before eating, cooking, and immediately after returning home from public spaces',
      'Disinfect high-touch objects (mobile phones, door handles, keyboards) regularly',
      'Cough or sneeze into a tissue or your inner elbow, never bare hands',
      'Avoid touching your eyes, nose, and mouth with unwashed hands'
    ],
    actionableStepsHindi: [
      'खाना खाने और बनाने से पहले तथा बाहर से आने पर तुरंत हाथ धोएं',
      'मोबाइल स्क्रीन और दरवाजों के हैंडल को साफ रखें',
      'छींकते या खांसते समय कोहनी या रुमाल का उपयोग करें',
      'गंदे हाथों से आंख, नाक और मुंह को छूने से बचें'
    ]
  },
  {
    id: 'balanced-diet',
    titleEnglish: 'Eat a Balanced Diet',
    titleHindi: 'पौष्टिक और संतुलित आहार लें',
    categoryEnglish: 'Nutritional Health',
    categoryHindi: 'पोषण और स्वास्थ्य',
    shortDescriptionEnglish: 'A rainbow plate of diverse whole foods delivers essential micronutrients, fiber, and protective antioxidants.',
    shortDescriptionHindi: 'रंग-बिरंगी ताजी सब्जियां, फल और दालें शरीर को विटामिन, खनिज और एंटीऑक्सीडेंट प्रदान करते हैं।',
    iconName: 'Apple',
    accentColor: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
    fullGuidanceEnglish: [
      'A nutrient-dense diet rich in vibrant vegetables, fresh fruits, legumes, whole grains, and lean proteins nurtures a diverse gut microbiome and supports antibody synthesis.',
      'Prioritize micronutrients crucial for immunity: Vitamin C (citrus, bell peppers, amla), Vitamin D, Zinc (seeds, nuts, lentils), and Selenium.',
      'Minimize ultra-processed foods containing high added sugars and trans-fats that promote chronic cellular inflammation.'
    ],
    fullGuidanceHindi: [
      'हरी सब्जियां, मौसमी फल, साबुत अनाज और दालों से युक्त भोजन पाचन तंत्र को स्वस्थ और रोग प्रतिरोधक क्षमता को मजबूत करता है।',
      'विटामिन सी (आंवला, संतरा, नींबू), विटामिन डी और जिंक (मेवे, बीज, दालें) को भोजन में शामिल करें।',
      'ज्यादा चीनी, मैदा और डिब्बाबंद जंक फूड से बचें जो शरीर में सूजन और चर्बी बढ़ाते हैं।'
    ],
    actionableStepsEnglish: [
      'Fill half your plate at lunch and dinner with colorful vegetables and raw salads',
      'Include a handful of almonds, walnuts, and pumpkin seeds daily',
      'Replace sugary processed snacks with fresh seasonal whole fruit',
      'Drink green tea or spiced ginger-turmeric infusions for natural polyphenols'
    ],
    actionableStepsHindi: [
      'अपनी थाली का आधा हिस्सा हरी सब्जियों और सलाद से भरें',
      'रोजाना मुट्ठी भर बादाम, अखरोट या कद्दू के बीज खाएं',
      'मीठे बिस्कुट और नमकीन की जगह ताजे फल खाएं',
      'हल्दी वाला दूध या अदरक की चाय का सेवन करें'
    ]
  },
  {
    id: 'physical-activity',
    titleEnglish: 'Stay Physically Active',
    titleHindi: 'नियमित शारीरिक व्यायाम करें',
    categoryEnglish: 'Movement & Fitness',
    categoryHindi: 'व्यायाम एवं फिटनेस',
    shortDescriptionEnglish: 'Regular moderate exercise accelerates circulation, modulates mood, and enhances white blood cell surveillance.',
    shortDescriptionHindi: 'प्रतिदिन 30 मिनट तेज टहलने या व्यायाम से रक्त संचार बेहतर होता है और दिल मजबूत रहता है।',
    iconName: 'Activity',
    accentColor: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800',
    fullGuidanceEnglish: [
      'Aim for at least 150 minutes of moderate-intensity aerobic physical activity (such as brisk walking, swimming, or cycling) per week.',
      'Physical activity increases blood flow and promotes the rapid circulation of immune cells throughout the lymphatic system.',
      'Exercise also prompts the release of endorphins, reducing stress hormones like cortisol that otherwise suppress immune defenses.'
    ],
    fullGuidanceHindi: [
      'सप्ताह में कम से कम 150 मिनट (लगभग 30 मिनट प्रतिदिन) हल्का एरोबिक व्यायाम, दौड़ना या तेज चलना चाहिए।',
      'व्यायाम करने से पूरे शरीर में रक्त संचार तेज होता है और रोग प्रतिरोधक कोशिकाएं सक्रिय रहती हैं।',
      'व्यायाम से तनाव के हार्मोन कम होते हैं और मानसिक शांति मिलती है।'
    ],
    actionableStepsEnglish: [
      'Take a brisk 25-minute morning or evening walk five days a week',
      'Use stairs instead of elevators whenever physically feasible',
      'Stand up and stretch for 2 minutes for every hour of sitting at a desk',
      'Incorporate simple bodyweight exercises (squats, planks) twice a week'
    ],
    actionableStepsHindi: [
      'दिन में कम से कम 25-30 मिनट तेज गति से टहलें',
      'लिफ्ट की जगह सीढ़ियों का उपयोग करें',
      'लगातार 1 घंटे बैठने के बाद 2 मिनट खड़े होकर स्ट्रेचिंग करें',
      'सप्ताह में 2-3 दिन हल्का योग या प्राणायाम करें'
    ]
  },
  {
    id: 'manage-stress',
    titleEnglish: 'Manage Daily Stress',
    titleHindi: 'मानसिक तनाव कम करें और शांत रहें',
    categoryEnglish: 'Mental Wellbeing',
    categoryHindi: 'मानसिक स्वास्थ्य',
    shortDescriptionEnglish: 'Chronic stress elevates cortisol and weakens immune response; intentional calm restores internal harmony.',
    shortDescriptionHindi: 'लगातार तनाव से रोग प्रतिरोधक क्षमता घटती है; गहरी सांस और ध्यान से मन और शरीर शांत रहता है।',
    iconName: 'Heart',
    accentColor: 'text-rose-600 bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800',
    fullGuidanceEnglish: [
      'Chronic psychological distress triggers sustained elevated levels of cortisol, which blunts the body\'s antiviral and antibacterial defense mechanisms.',
      'Mindful practices like slow box breathing (4 seconds inhale, 4 hold, 4 exhale, 4 hold) engage the parasympathetic nervous system, slowing heart rate and lowering blood pressure.',
      'Dedicate uninterrupted time each day for creative hobbies, nature walks, or listening to calming acoustic sounds.'
    ],
    fullGuidanceHindi: [
      'अत्यधिक मानसिक तनाव से कोर्टिसोल हार्मोन बढ़ता है जो शरीर की संक्रमण से लड़ने की शक्ति को कमजोर कर देता है।',
      'धीमी और गहरी सांस लेने (जैसे अनुलोम-विलोम या 4-4-4-4 बॉक्स ब्रीदिंग) से नब्ज शांत होती है और बीपी नियंत्रित रहता है।',
      'रोजाना 15 मिनट प्रकृति के बीच टहलें, संगीत सुनें या अपनी पसंदीदा गतिविधि करें।'
    ],
    actionableStepsEnglish: [
      'Practice 5 minutes of 4-4-4-4 box breathing whenever feeling overwhelmed',
      'Take daily tech-free walks in open green spaces or parks',
      'Write down 3 things you are genuinely grateful for every evening',
      'Maintain strong social bonds by talking with friends or loved ones'
    ],
    actionableStepsHindi: [
      'तनाव महसूस होने पर 5 मिनट आंखें बंद कर गहरी सांस लें',
      'रोजाना बिना मोबाइल के कुछ देर खुली हवा में घूमें',
      'सोने से पहले दिन की 3 अच्छी बातों को याद करें',
      'परिवार और दोस्तों से खुलकर बात करें'
    ]
  },
  {
    id: 'medical-care',
    titleEnglish: 'Follow Medical Guidance',
    titleHindi: 'चिकित्सकीय सलाह का पालन करें',
    categoryEnglish: 'Preventive Healthcare',
    categoryHindi: 'निवारक स्वास्थ्य देखभाल',
    shortDescriptionEnglish: 'Timely health screenings, adherence to prescribed treatments, and professional consults prevent complications.',
    shortDescriptionHindi: 'नियमित स्वास्थ्य जांच, डॉक्टर की सलाह और समय पर दवा लेने से गंभीर बीमारियों से बचाव होता है।',
    iconName: 'HeartPulse',
    accentColor: 'text-violet-600 bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-800',
    fullGuidanceEnglish: [
      'Preventive health checks help detect underlying issues like high blood pressure, elevated blood sugar, or lipid abnormalities long before symptoms manifest.',
      'Never self-medicate with leftover antibiotics or discontinue prescribed regimens early, as this contributes to antimicrobial resistance.',
      'Keep up-to-date with age-appropriate immunization schedules and annual wellness screenings.'
    ],
    fullGuidanceHindi: [
      'नियमित जांच से ब्लड प्रेशर, ब्लड शुगर और कोलेस्ट्रॉल जैसी समस्याओं का समय रहते पता चल जाता है।',
      'बिना डॉक्टर की सलाह के खुद से एंटीबायोटिक्स न लें और न ही दवा का कोर्स अधूरा छोड़ें।',
      'उम्र के अनुसार टीकाकरण और वार्षिक स्वास्थ्य जांच जरूर करवाएं।'
    ],
    actionableStepsEnglish: [
      'Schedule an annual routine physical check-up and baseline blood panel',
      'Maintain an organized digital or paper file of past health reports',
      'Take all prescribed medications strictly as instructed by your doctor',
      'Seek prompt medical care when experiencing red-flag symptoms'
    ],
    actionableStepsHindi: [
      'वर्ष में एक बार सामान्य स्वास्थ्य जांच कराएं',
      'अपनी पुरानी मेडिकल रिपोर्ट्स को व्यवस्थित फाइल में संभाल कर रखें',
      'डॉक्टर द्वारा बताई गई दवा का समय पर पूरा कोर्स करें',
      'गंभीर लक्षण दिखने पर तुरंत योग्य चिकित्सक से संपर्क करें'
    ]
  }
];
