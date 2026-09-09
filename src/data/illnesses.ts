import { Illness } from '../types';

export const ILLNESSES: Illness[] = [
  {
    id: 'common-cold',
    nameEnglish: 'Common Cold',
    nameHindi: 'सामान्य सर्दी-जुकाम',
    medicalName: 'Acute Viral Rhinopharyngitis',
    category: 'cold-flu',
    categoryNameEnglish: 'Cold & Flu',
    categoryNameHindi: 'सर्दी और फ्लू',
    shortDescriptionEnglish: 'A mild, contagious viral infection of the nose and upper respiratory passages.',
    shortDescriptionHindi: 'नाक और ऊपरी श्वसन मार्ग का एक हल्का, संक्रामक वायरल संक्रमण।',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    contagious: true,
    typicalDurationEnglish: '7 - 10 days',
    typicalDurationHindi: '7 से 10 दिन',
    overviewEnglish: 'The common cold is one of the most frequent human illnesses, caused primarily by rhinoviruses. It causes nasal congestion, sneezing, mild throat tickle, and low energy. It resolves naturally with rest, warm fluids, and supportive care.',
    overviewHindi: 'सामान्य सर्दी-जुकाम सबसे आम वायरल बीमारियों में से एक है, जो मुख्य रूप से राइनोवायरस के कारण होती है। यह नाक बंद होना, छींकें आना, गले में हल्की खराश और थकान का कारण बनती है। पर्याप्त आराम और गर्म तरल पदार्थों से यह सामान्यतः ठीक हो जाती है।',
    symptomsEnglish: [
      'Runny or stuffy blocked nose',
      'Frequent sneezing and nasal itchiness',
      'Scratchy or mild sore throat',
      'Gentle cough and clearing of throat',
      'Mild headache and low-grade fever',
      'Body fatigue and tiredness'
    ],
    symptomsHindi: [
      'नाक बहना या नाक बंद होना',
      'बार-बार छींक आना और नाक में खुजली',
      'गले में खराश या चुभन',
      'हल्की खांसी या कफ आना',
      'हल्का सिरदर्द और हल्का बुखार',
      'शरीर में सुस्ती और थकान'
    ],
    causesEnglish: [
      'Over 200 distinct cold viruses, predominantly Rhinoviruses',
      'Direct airborne droplets from sneezing or coughing',
      'Touching contaminated surfaces and then touching eyes, nose, or mouth'
    ],
    causesHindi: [
      '200 से अधिक प्रकार के वायरस, विशेष रूप से राइनोवायरस',
      'छींकने या खांसने से हवा में फैले बारीक कण',
      'संक्रमित सतहों को छूने के बाद आंख, नाक या मुंह को छूना'
    ],
    riskFactorsEnglish: [
      'Children under age 6 and older adults',
      'Weakened immunity or high physical fatigue',
      'Winter and monsoon seasons with indoor crowds',
      'Lack of adequate sleep'
    ],
    riskFactorsHindi: [
      '6 वर्ष से कम उम्र के बच्चे और बुजुर्ग',
      'कमजोर रोग प्रतिरोधक क्षमता या अत्यधिक थकान',
      'सर्दियों और बारिश का मौसम जब लोग घरों में अधिक रहते हैं',
      'नींद की कमी'
    ],
    precautionsEnglish: [
      'Wash hands thoroughly with soap for at least 20 seconds',
      'Cover your mouth and nose with an elbow or tissue when coughing',
      'Avoid sharing drinking cups, utensils, or towels'
    ],
    precautionsHindi: [
      'साबुन और पानी से कम से कम 20 सेकंड तक हाथ धोएं',
      'खांसते या छींकते समय कोहनी या टिशू से मुंह ढकें',
      'बर्तन, तौलिया या कप दूसरों के साथ साझा न करें'
    ],
    preventionEnglish: [
      'Maintain strong immunity with vitamin C, zinc, and wholesome food',
      'Sanitize door handles and smartphone screens frequently',
      'Drink warm water and stay well hydrated'
    ],
    preventionHindi: [
      'विटामिन सी, जिंक और पौष्टिक भोजन से रोग प्रतिरोधक क्षमता बढ़ाएं',
      'दरवाजे के हैंडल और मोबाइल स्क्रीन को साफ रखें',
      'गुनगुना पानी पिएं और शरीर में पानी की कमी न होने दें'
    ],
    selfCareEnglish: [
      'Get ample bed rest to support immune defenses',
      'Drink warm broths, herbal teas with ginger and honey',
      'Perform warm saline water gargles twice daily',
      'Use steam inhalation or a room humidifier to relieve congestion'
    ],
    selfCareHindi: [
      'शरीर को पूरी तरह आराम दें ताकि प्रतिरक्षा प्रणाली वायरस से लड़ सके',
      'गर्म काढ़ा, अदरक-शहद वाली हर्बल चाय और गुनगुना पानी पिएं',
      'दिन में दो बार हल्के गर्म नमक के पानी से गरारे करें',
      'भाप (स्टीम) लें ताकि बंद नाक और गले की जकड़न में राहत मिले'
    ],
    doctorWarningEnglish: [
      'Fever rises above 101.3°F (38.5°C) or persists over 3 days',
      'Severe difficulty breathing, chest tightness, or wheezing',
      'Symptoms worsen significantly after 10 days'
    ],
    doctorWarningHindi: [
      'बुखार 101.3°F से अधिक हो या 3 दिन से ज्यादा बना रहे',
      'सांस लेने में गंभीर कठिनाई, सीने में जकड़न या घरघराहट हो',
      'लक्षण 10 दिनों के बाद भी ठीक होने के बजाय और बिगड़ जाएं'
    ],
    emergencySignsEnglish: [
      'Bluish lips or fingertips',
      'Severe shortness of breath',
      'Inability to drink or keep fluids down'
    ],
    emergencySignsHindi: [
      'होंठ या उंगलियों के पोर नीले पड़ना',
      'सांस लेने में अत्यधिक परेशानी',
      'पानी या तरल पदार्थ निगलने में असमर्थता'
    ],
    faqEnglish: [
      {
        questionEnglish: 'Do antibiotics help cure a common cold?',
        questionHindi: 'क्या एंटीबायोटिक्स सामान्य सर्दी-जुकाम को ठीक कर सकती हैं?',
        answerEnglish: 'No. The common cold is caused by viruses. Antibiotics only treat bacterial infections and will not cure a viral cold.',
        answerHindi: 'नहीं। सामान्य सर्दी वायरस के कारण होती है। एंटीबायोटिक्स केवल बैक्टीरिया संक्रमण पर असर करती हैं, वायरल सर्दी पर नहीं।'
      },
      {
        questionEnglish: 'How long does a cold remain contagious?',
        questionHindi: 'सर्दी-जुकाम कितने दिनों तक दूसरों में फैल सकता है?',
        answerEnglish: 'It is most contagious during the first 2 to 3 days of symptoms, but can spread for up to a week.',
        answerHindi: 'शुरुआती 2 से 3 दिनों में संक्रमण फैलने का खतरा सबसे अधिक होता है, लेकिन यह 7 दिनों तक फैल सकता है।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    isFeatured: true,
    tagsEnglish: ['cold', 'cough', 'sneezing', 'runny nose', 'congestion', 'flu'],
    tagsHindi: ['सर्दी', 'जुकाम', 'छींक', 'कफ', 'बंद नाक', 'बुखार']
  },
  {
    id: 'fever',
    nameEnglish: 'Fever',
    nameHindi: 'बुखार (ज्वर)',
    medicalName: 'Pyrexia',
    category: 'fever-infections',
    categoryNameEnglish: 'Fever & Infection',
    categoryNameHindi: 'बुखार एवं संक्रमण',
    shortDescriptionEnglish: 'A temporary rise in body temperature, usually an active immune response to infection.',
    shortDescriptionHindi: 'शरीर के तापमान में एक अस्थायी वृद्धि, जो सामान्यतः संक्रमण के विरुद्ध प्रतिरक्षा प्रतिक्रिया होती है।',
    imageUrl: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: '2 - 4 days',
    typicalDurationHindi: '2 से 4 दिन',
    overviewEnglish: 'A fever is defined as body temperature exceeding 100.4°F (38°C). It is your body\'s defense mechanism to make the environment inhospitable for invading pathogens like viruses and bacteria.',
    overviewHindi: 'जब शरीर का तापमान 100.4°F (38°C) से अधिक हो जाता है, तो उसे बुखार कहा जाता है। यह शरीर की प्राकृतिक रक्षा प्रणाली है जो वायरस और बैक्टीरिया से लड़ने के लिए सक्रिय होती है।',
    symptomsEnglish: [
      'Elevated body temperature above 100.4°F (38°C)',
      'Shivering, chills, and goosebumps',
      'Excessive sweating as fever fluctuates',
      'Throbbing headache and weakness',
      'Loss of appetite and mild dehydration'
    ],
    symptomsHindi: [
      'शरीर का तापमान 100.4°F (38°C) से अधिक होना',
      'कंपकंपी, ठंड लगना और रोंगटे खड़े होना',
      'पसीना आना',
      'सिर में तेज दर्द और मांसपेशियों में कमजोरी',
      'भूख न लगना और हल्का निर्जलीकरण (डिहाइड्रेशन)'
    ],
    causesEnglish: [
      'Viral infections (Flu, Dengue, Covid-19, Common cold)',
      'Bacterial infections (Urinary tract infection, Strep throat, Typhoid)',
      'Heat exhaustion or sunstroke',
      'Inflammatory conditions or post-vaccine response'
    ],
    causesHindi: [
      'वायरल संक्रमण (फ्लू, डेंगू, सामान्य जुकाम)',
      'जीवाणु संक्रमण (यूरिन इन्फेक्शन, टाइफाइड, गले का संक्रमण)',
      'अत्यधिक गर्मी या लू लगना',
      'टीकाकरण के बाद की सामान्य प्रतिक्रिया'
    ],
    riskFactorsEnglish: [
      'Young children whose temperature regulation is maturing',
      'Exposure to contagious family or school members',
      'Traveling to tropical regions without mosquito protection'
    ],
    riskFactorsHindi: [
      'छोटे बच्चे जिनका तापमान नियंत्रण तंत्र अभी विकसित हो रहा है',
      'संक्रमित व्यक्तियों के संपर्क में आना',
      'मच्छर जनित क्षेत्रों में यात्रा करना'
    ],
    precautionsEnglish: [
      'Monitor temperature with a clean digital thermometer',
      'Dress in lightweight, breathable cotton clothing',
      'Never use cold water ice baths, as they cause violent shivering'
    ],
    precautionsHindi: [
      'डिजिटल थर्मामीटर से नियमित तापमान मापें',
      'हल्के और आरामदायक सूती कपड़े पहनें',
      'बर्फ या बहुत ठंडे पानी की पट्टी न रखें, इससे कंपकंपी बढ़ सकती है'
    ],
    preventionEnglish: [
      'Wash hands before eating and after using washrooms',
      'Protect against mosquito bites using nets and repellents',
      'Drink clean, boiled or filtered water'
    ],
    preventionHindi: [
      'खाना खाने से पहले और शौचालय के बाद हाथ अच्छी तरह धोएं',
      'मच्छरदानी और रिपेलेंट का उपयोग करके मच्छरों से बचें',
      'उबला हुआ या सुरक्षित छाना हुआ पानी पिएं'
    ],
    selfCareEnglish: [
      'Hydrate with coconut water, oral rehydration solution (ORS), and warm broths',
      'Apply room-temperature damp sponge cloths to forehead and neck',
      'Rest in a well-ventilated, comfortable room'
    ],
    selfCareHindi: [
      'नारियल पानी, ओआरएस (ORS) और पतला सूप पीकर शरीर में पानी बनाए रखें',
      'माथे और गर्दन पर सामान्य तापमान के पानी की गीली पट्टी रखें',
      'हवादार और शांत कमरे में पूरा आराम करें'
    ],
    doctorWarningEnglish: [
      'Temperature reaches 103°F (39.4°C) or higher in adults',
      'Fever accompanied by stiff neck, confusion, or persistent vomiting',
      'Fever lasting longer than 72 hours'
    ],
    doctorWarningHindi: [
      'वयस्कों में तापमान 103°F (39.4°C) या उससे अधिक पहुंच जाए',
      'बुखार के साथ गर्दन में अकड़न, अत्यधिक भ्रम या लगातार उल्टी हो',
      'बुखार 3 दिन (72 घंटे) से अधिक लगातार बना रहे'
    ],
    emergencySignsEnglish: [
      'Seizures or convulsions',
      'Difficulty waking up or extreme confusion',
      'Purple or red pinpoint skin rashes'
    ],
    emergencySignsHindi: [
      'दौरे या झटके पड़ना (कन्वल्शन)',
      'बेहोशी, अत्यधिक भ्रम या उठने में असमर्थता',
      'त्वचा पर लाल या बैंगनी रंग के चकत्ते पड़ना'
    ],
    faqEnglish: [
      {
        questionEnglish: 'At what temperature should I be worried?',
        questionHindi: 'किस तापमान पर तुरंत डॉक्टर से संपर्क करना चाहिए?',
        answerEnglish: 'In infants under 3 months, any fever above 100.4°F requires immediate medical attention. In adults, seek care if fever exceeds 103°F or lasts over 3 days.',
        answerHindi: '3 महीने से छोटे शिशुओं में 100.4°F से अधिक बुखार होने पर तुरंत डॉक्टर को दिखाएं। वयस्कों में 103°F से अधिक या 3 दिन से लंबे बुखार पर परामर्श लें।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    isFeatured: true,
    tagsEnglish: ['fever', 'temperature', 'pyrexia', 'chills', 'infection'],
    tagsHindi: ['बुखार', 'ज्वर', 'तापमान', 'कंपकंपी', 'संक्रमण']
  },
  {
    id: 'influenza-flu',
    nameEnglish: 'Influenza (Flu)',
    nameHindi: 'इन्फ्लूएंजा (फ्लू)',
    medicalName: 'Influenza Type A or B Infection',
    category: 'cold-flu',
    categoryNameEnglish: 'Cold & Flu',
    categoryNameHindi: 'सर्दी और फ्लू',
    shortDescriptionEnglish: 'A contagious respiratory infection causing sudden high fever, intense body aches, and fatigue.',
    shortDescriptionHindi: 'अचानक तेज बुखार, पूरे शरीर में दर्द और कमजोरी पैदा करने वाला संक्रामक श्वसन रोग।',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    contagious: true,
    typicalDurationEnglish: '1 - 2 weeks',
    typicalDurationHindi: '1 से 2 सप्ताह',
    overviewEnglish: 'Influenza is an acute respiratory infection caused by influenza viruses. Unlike a gradual common cold, the flu strikes abruptly with high fever, severe muscle aches, exhausting fatigue, and dry cough.',
    overviewHindi: 'इन्फ्लूएंजा फ्लू वायरस के कारण होने वाला श्वसन संक्रमण है। साधारण जुकाम की तुलना में यह बहुत अचानक और तेज बुखार, गंभीर बदन दर्द, अत्यधिक कमजोरी और सूखी खांसी के साथ शुरू होता है।',
    symptomsEnglish: [
      'Sudden onset of high fever (100°F to 104°F)',
      'Intense, deep muscular aches in back and legs',
      'Severe exhaustion and physical fatigue',
      'Dry, persistent racking cough',
      'Sore throat and chills'
    ],
    symptomsHindi: [
      'अचानक तेज बुखार (100°F से 104°F तक)',
      'पीठ, पैर और कंधों में गंभीर मांसपेशियों का दर्द',
      'अत्यधिक थकान और कमजोरी',
      'लगातार सूखी कष्टदायी खांसी',
      'गले में दर्द और ठंड लगना'
    ],
    causesEnglish: [
      'Influenza A, B, and C virus strains',
      'Inhaling airborne virus droplets expelled during speaking or coughing',
      'Contact with contaminated hands or shared items'
    ],
    causesHindi: [
      'इन्फ्लूएंजा ए और बी वायरस के स्ट्रेन',
      'संक्रमित व्यक्ति के खांसने या बात करने से हवा में फैले ड्रॉपलेट्स',
      'संक्रमित वस्तुओं या हाथों के माध्यम से'
    ],
    riskFactorsEnglish: [
      'Adults 65 and older and children under 5',
      'People with asthma, COPD, heart disease, or diabetes',
      'Pregnant women and immunocompromised individuals'
    ],
    riskFactorsHindi: [
      '65 वर्ष से अधिक आयु के बुजुर्ग और 5 वर्ष से कम उम्र के बच्चे',
      'अस्थमा, हृदय रोग या मधुमेह (शुगर) से पीड़ित व्यक्ति',
      'गर्भवती महिलाएं और कमजोर प्रतिरोधक क्षमता वाले लोग'
    ],
    precautionsEnglish: [
      'Get an annual influenza vaccination prior to winter',
      'Isolate at home until fever has been absent for 24 hours without medication',
      'Wear a surgical mask if around vulnerable family members'
    ],
    precautionsHindi: [
      'सर्दियों से पहले हर वर्ष फ्लू का टीका (वैक्सीन) लगवाएं',
      'बुखार उतरने के 24 घंटे बाद तक घर पर ही आराम करें और बाहर न जाएं',
      'परिवार के सदस्यों के सामने सर्जिकल मास्क पहनें'
    ],
    preventionEnglish: [
      'Annual flu shot',
      'Rigorous hand hygiene with soap and alcohol sanitizer',
      'Avoid touching face during flu season'
    ],
    preventionHindi: [
      'वार्षिक फ्लू टीकाकरण',
      'साबुन से बार-बार हाथ धोना और सैनिटाइजर का उपयोग',
      'फ्लू के मौसम में भीड़-भाड़ से बचना'
    ],
    selfCareEnglish: [
      'Complete bed rest to preserve vital energy',
      'Abundant hydration with hot lemon-honey tea and electrolyte solutions',
      'Use steam and saline throat gargles to ease throat and lung irritation'
    ],
    selfCareHindi: [
      'शरीर को पूरी तरह आराम दें',
      'गर्म नींबू-शहद पानी, सूप और इलेक्ट्रोलाइट घोल पिएं',
      'गले और फेफड़ों की राहत के लिए भाप लें और गुनगुने पानी के गरारे करें'
    ],
    doctorWarningEnglish: [
      'Difficulty breathing or shortness of breath',
      'Persistent chest pain or feeling of heaviness',
      'Fever that improves and then returns severely'
    ],
    doctorWarningHindi: [
      'सांस लेने में कठिनाई या सांस फूलना',
      'सीने में लगातार दर्द या दबाव महसूस होना',
      'बुखार कम होने के बाद दोबारा बहुत तेज हो जाना'
    ],
    emergencySignsEnglish: [
      'Bluish skin, lips, or nail beds',
      'Inability to stay awake or respond',
      'Severe dizziness upon standing'
    ],
    emergencySignsHindi: [
      'नाखून या होंठ नीले पड़ना',
      'होश खोना या अत्यधिक चक्कर आना',
      'उठकर खड़े होने में असमर्थता'
    ],
    faqEnglish: [
      {
        questionEnglish: 'What is the main difference between cold and flu?',
        questionHindi: 'सर्दी और फ्लू में मुख्य अंतर क्या है?',
        answerEnglish: 'A cold develops gradually with mild runny nose and sneezing. The flu strikes abruptly with high fever, intense body aches, and debilitating fatigue.',
        answerHindi: 'सर्दी धीरे-धीरे हल्के लक्षणों जैसे छींक और बहती नाक से शुरू होती है। फ्लू अचानक तेज बुखार, गंभीर बदन दर्द और भारी थकान के साथ आता है।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    isFeatured: true,
    tagsEnglish: ['flu', 'influenza', 'fever', 'body aches', 'chills'],
    tagsHindi: ['फ्लू', 'इन्फ्लूएंजा', 'तेज बुखार', 'बदन दर्द', 'खांसी']
  },
  {
    id: 'cough',
    nameEnglish: 'Cough',
    nameHindi: 'खांसी',
    medicalName: 'Tussis',
    category: 'respiratory',
    categoryNameEnglish: 'Respiratory',
    categoryNameHindi: 'श्वसन संबंधी रोग',
    shortDescriptionEnglish: 'A reflex action to clear the airways of mucus, irritants, microbes, and foreign particles.',
    shortDescriptionHindi: 'वायुमार्ग से कफ, धूल और जलन पैदा करने वाले तत्वों को बाहर निकालने की एक सुरक्षात्मक प्रतिक्रिया।',
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: '1 - 3 weeks',
    typicalDurationHindi: '1 से 3 सप्ताह',
    overviewEnglish: 'A cough is a vital defensive reflex that helps expel dust, microbes, and phlegm from lungs and throat. Coughs can be dry (hacking, non-productive) or wet (producing phlegm or mucus).',
    overviewHindi: 'खांसी एक जरूरी शारीरिक सुरक्षा प्रक्रिया है जो फेफड़ों और गले से बलगम और हानिकारक कणों को बाहर निकालती है। खांसी दो प्रकार की हो सकती है: सूखी खांसी (बिना बलगम की) या गीली/कफ वाली खांसी।',
    symptomsEnglish: [
      'Frequent urge to clear throat',
      'Chest tightness or mild soreness from coughing',
      'Phlegm production (wet cough) or dry tickling (dry cough)',
      'Hoarseness or loss of voice'
    ],
    symptomsHindi: [
      'गला साफ करने की बार-बार इच्छा',
      'लगातार खांसने से सीने में हल्का दर्द या खिंचाव',
      'बलगम आना (गीली खांसी) या गले में सूखापन और चुभन (सूखी खांसी)',
      'आवाज बैठना या भारी होना'
    ],
    causesEnglish: [
      'Viral respiratory infections (cold, flu, bronchitis)',
      'Post-nasal drip from allergic rhinitis or sinusitis',
      'Asthma, acid reflux (GERD), or environmental smoke/pollution'
    ],
    causesHindi: [
      'वायरल संक्रमण (सर्दी, फ्लू या ब्रोंकाइटिस)',
      'एलर्जी या साइनस के कारण गले में बलगम गिरना',
      'अस्थमा, एसिडिटी (जीईआरडी) या धुआं और प्रदूषण'
    ],
    riskFactorsEnglish: [
      'Smoking or secondhand smoke exposure',
      'Seasonal allergy seasons with high pollen counts',
      'Living in metropolitan areas with air pollution'
    ],
    riskFactorsHindi: [
      'धूम्रपान या सिगरेट के धुएं के संपर्क में रहना',
      'परागकणों और मौसमी एलर्जी का मौसम',
      'प्रदूषित हवा और धूल-मिट्टी में रहना'
    ],
    precautionsEnglish: [
      'Avoid active smoking and smoky kitchens',
      'Cover cough with tissues and discard promptly',
      'Wear a protective mask in dusty or polluted areas'
    ],
    precautionsHindi: [
      'धूम्रपान से पूरी तरह दूर रहें',
      'खांसते समय मुंह पर रुमाल रखें',
      'धूल और धुएं वाले स्थानों पर मास्क पहनें'
    ],
    preventionEnglish: [
      'Avoid known allergens and respiratory irritants',
      'Install HEPA air purifiers in the home',
      'Drink plenty of warm water throughout the day'
    ],
    preventionHindi: [
      'एलर्जी पैदा करने वाली चीजों से दूरी बनाए रखें',
      'घर में धूल जमने न दें',
      'नियमित रूप से गुनगुना पानी पिएं'
    ],
    selfCareEnglish: [
      'Take 1 teaspoon of natural honey (not for infants under 1 year)',
      'Inhale warm steam for 10 minutes to loosen chest phlegm',
      'Drink warm ginger and tulsi tea to soothe airway inflammation'
    ],
    selfCareHindi: [
      'एक चम्मच शुद्ध शहद लें (1 वर्ष से कम उम्र के बच्चों को शहद न दें)',
      'कफ ढीला करने के लिए 10 मिनट गर्म पानी की भाप लें',
      'अदरक और तुलसी की गर्म चाय पिएं जिससे गले की सूजन शांत हो'
    ],
    doctorWarningEnglish: [
      'Coughing up blood or rust-colored phlegm',
      'Shortness of breath, chest pain, or wheezing',
      'Cough persisting longer than 3 weeks'
    ],
    doctorWarningHindi: [
      'खांसी में खून या भूरे रंग का बलगम आना',
      'सांस लेने में परेशानी या सीने में तेज दर्द होना',
      'खांसी 3 सप्ताह से अधिक समय तक लगातार बनी रहना'
    ],
    emergencySignsEnglish: [
      'Choking sensation or severe airway blockage',
      'Inability to speak complete sentences due to breathlessness'
    ],
    emergencySignsHindi: [
      'दम घुटने का अहसास या सांस अटकना',
      'सांस फूलने के कारण पूरा वाक्य न बोल पाना'
    ],
    faqEnglish: [
      {
        questionEnglish: 'Is honey really effective for a dry cough?',
        questionHindi: 'क्या शहद सूखी खांसी में वास्तव में असरदार है?',
        answerEnglish: 'Yes. Clinical studies show that natural honey coats the throat and calms the cough reflex as effectively as some over-the-counter syrups in individuals over 1 year of age.',
        answerHindi: 'हाँ। वैज्ञानिक अध्ययनों के अनुसार 1 वर्ष से बड़े व्यक्तियों में शहद गले पर सुरक्षा परत बनाकर खांसी के रिफ्लेक्स को शांत करता है।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    tagsEnglish: ['cough', 'phlegm', 'throat', 'respiratory', 'bronchitis'],
    tagsHindi: ['खांसी', 'कफ', 'बलगम', 'गला', 'सांस']
  },
  {
    id: 'headache',
    nameEnglish: 'Tension Headache',
    nameHindi: 'तनाव सिरदर्द',
    medicalName: 'Tension-Type Headache (TTH)',
    category: 'headache-pain',
    categoryNameEnglish: 'Headache & Pain',
    categoryNameHindi: 'सिरदर्द एवं दर्द',
    shortDescriptionEnglish: 'The most common type of headache, feeling like a tight band pressing around the forehead.',
    shortDescriptionHindi: 'सबसे आम प्रकार का सिरदर्द, जिसमें माथे के चारों ओर एक कसी हुई पट्टी जैसा दबाव महसूस होता है।',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: '30 mins - a few hours',
    typicalDurationHindi: '30 मिनट से कुछ घंटे',
    overviewEnglish: 'Tension-type headaches are the most frequent headache disorder. Characterized by a steady, dull, achy pain across both sides of the head or base of the neck, it is commonly triggered by mental stress, eye fatigue, poor posture, or lack of sleep.',
    overviewHindi: 'तनाव सिरदर्द सबसे आम सिरदर्द है। इसमें सिर के दोनों तरफ या गर्दन के पिछले हिस्से में हल्का से मध्यम धीमा दर्द होता है। यह अक्सर अत्यधिक मानसिक तनाव, आंखों में थकान, लंबे समय तक गलत मुद्रा में बैठने या नींद की कमी से होता है।',
    symptomsEnglish: [
      'Dull, constant aching pain on both sides of head',
      'Sensation of a tight band squeezing around forehead',
      'Tenderness in scalp, neck, and shoulder muscles',
      'Mild sensitivity to light or noise'
    ],
    symptomsHindi: [
      'सिर के दोनों किनारों पर धीमा, लगातार दर्द',
      'माथे पर कसकर बंधी पट्टी जैसा दबाव महसूस होना',
      'खोपड़ी, गर्दन और कंधों की मांसपेशियों में जकड़न',
      'तेज रोशनी या आवाज से हल्की चिड़चिड़ाहट'
    ],
    causesEnglish: [
      'Psychological stress, anxiety, or mental fatigue',
      'Prolonged screen time leading to digital eye strain',
      'Poor ergonomic posture while working at desks or smartphones',
      'Dehydration or skipping regular meals'
    ],
    causesHindi: [
      'मानसिक तनाव, चिंता या अत्यधिक मानसिक थकान',
      'लगातार कंप्यूटर या मोबाइल स्क्रीन देखना',
      'गलत तरीके से झुककर बैठना या काम करना',
      'पानी कम पीना या समय पर भोजन न करना'
    ],
    riskFactorsEnglish: [
      'High-stress desk professions with minimal movement',
      'Chronic sleep deprivation',
      'High caffeine consumption or sudden caffeine withdrawal'
    ],
    riskFactorsHindi: [
      'लंबे समय तक बैठकर काम करना',
      'नींद की नियमित कमी',
      'अत्यधिक चाय-कॉफी पीना या अचानक छोड़ देना'
    ],
    precautionsEnglish: [
      'Take 5-minute eye breaks every 30 minutes of computer work',
      'Maintain an upright ergonomic posture with screens at eye level',
      'Eat meals at consistent times to avoid blood sugar dips'
    ],
    precautionsHindi: [
      'हर 30 मिनट में कंप्यूटर से नजरें हटाकर 5 मिनट का ब्रेक लें',
      'सीधे बैठकर काम करें और स्क्रीन को आंखों के स्तर पर रखें',
      'समय पर भोजन करें ताकि ब्लड शुगर कम न हो'
    ],
    preventionEnglish: [
      'Practice regular relaxation, deep breathing, or meditation',
      'Drink 2 to 2.5 liters of water daily',
      'Establish a strict 7-8 hour sleep schedule'
    ],
    preventionHindi: [
      'नियमित ध्यान और गहरी सांस लेने का अभ्यास करें',
      'प्रतिदिन 2 से 2.5 लीटर पानी पिएं',
      'रोजाना 7-8 घंटे की गहरी नींद लें'
    ],
    selfCareEnglish: [
      'Rest quietly in a dimmed, quiet room with eyes closed',
      'Apply a warm heating pad or cool damp cloth across forehead or neck',
      'Gently massage temple muscles and shoulders in slow circles'
    ],
    selfCareHindi: [
      'शांत और मंद रोशनी वाले कमरे में आंखें बंद करके लेट जाएं',
      'गर्दन या माथे पर हल्के गर्म या ठंडे कपड़े की सिकाई करें',
      'कनपटी और गर्दन की मांसपेशियों की धीरे-धीरे मालिश करें'
    ],
    doctorWarningEnglish: [
      'Sudden explosive "thunderclap" headache reaching maximum intensity in seconds',
      'Headache accompanied by fever, stiff neck, confusion, or speech difficulty',
      'New headache starting after age 50'
    ],
    doctorWarningHindi: [
      'अचानक बिजली की तरह तेज सिरदर्द (थंडरक्लैप हेडेक) जो सेकंडों में चरम पर पहुंचे',
      'सिरदर्द के साथ तेज बुखार, गर्दन में अकड़न, बेहोशी या बोलने में परेशानी',
      '50 वर्ष की आयु के बाद पहली बार गंभीर सिरदर्द होना'
    ],
    emergencySignsEnglish: [
      'Sudden weakness, numbness, or paralysis on one side of face or body',
      'Confusion or loss of consciousness'
    ],
    emergencySignsHindi: [
      'चेहरे या शरीर के एक हिस्से में अचानक कमजोरी या सुन्नपन',
      'होश खोना या बोलने में लड़खड़ाहट'
    ],
    faqEnglish: [
      {
        questionEnglish: 'Can drinking water cure a tension headache?',
        questionHindi: 'क्या पानी पीने से सिरदर्द में आराम मिल सकता है?',
        answerEnglish: 'Yes, dehydration is one of the most common causes of tension headaches. Drinking 1-2 glasses of water often relieves headache symptoms within 30 minutes.',
        answerHindi: 'हाँ, शरीर में पानी की कमी (डिहाइड्रेशन) सिरदर्द का बड़ा कारण है। 1-2 गिलास पानी पीने से अक्सर 30 मिनट में राहत मिल जाती है।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    tagsEnglish: ['headache', 'pain', 'tension', 'stress', 'neck'],
    tagsHindi: ['सिरदर्द', 'तनाव', 'माथा', 'गर्दन दर्द', 'थकान']
  },
  {
    id: 'migraine',
    nameEnglish: 'Migraine',
    nameHindi: 'माइग्रेन (आधासीसी का दर्द)',
    medicalName: 'Migraine with or without Aura',
    category: 'headache-pain',
    categoryNameEnglish: 'Headache & Pain',
    categoryNameHindi: 'सिरदर्द एवं दर्द',
    shortDescriptionEnglish: 'A neurological condition characterized by intense, throbbing pain usually on one side of the head.',
    shortDescriptionHindi: 'एक न्यूरोलॉजिकल स्थिति जिसमें सिर के एक तरफ तेज, धड़कने वाला असहनीय दर्द होता है।',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: '4 - 72 hours',
    typicalDurationHindi: '4 से 72 घंटे',
    overviewEnglish: 'Migraine is a complex neurological disorder causing recurrent episodes of severe throbbing headache, typically on one side. It is frequently accompanied by extreme sensitivity to light and sound, nausea, and in some patients, visual disturbances called "aura".',
    overviewHindi: 'माइग्रेन एक न्यूरोलॉजिकल विकार है जिसमें सिर के एक तरफ धड़कन की तरह तेज दर्द होता है। इसके साथ मतली, उल्टी, तथा तेज रोशनी और आवाज से अत्यधिक परेशानी होती है। कुछ लोगों को दर्द से पहले आंखों के आगे चमक या धुंधलापन (ऑरा) दिखता है।',
    symptomsEnglish: [
      'Intense, pulsing or throbbing pain usually on one side of the head',
      'Extreme sensitivity to bright light (photophobia) and loud noises (phonophobia)',
      'Nausea, queasiness, or actual vomiting',
      'Visual aura: flashing lights, blind spots, or zigzag lines',
      'Worsening pain with ordinary physical exertion like walking or stairs'
    ],
    symptomsHindi: [
      'सिर के एक तरफ तेज टीस मारने वाला या धड़कने जैसा दर्द',
      'तेज रोशनी और तेज आवाज बर्दाश्त न होना',
      'जी मिचलाना, मतली या उल्टी होना',
      'आंखों के आगे चमकती रोशनी या टेढ़ी-मेढ़ी रेखाएं दिखना (ऑरा)',
      'हिलने-डुलने या सीढ़ियां चढ़ने से दर्द का और बढ़ जाना'
    ],
    causesEnglish: [
      'Genetic predisposition altering brain chemical balances (serotonin)',
      'Triggers: hormonal shifts, sensory overload, weather changes',
      'Certain foods: aged cheeses, artificial sweeteners, processed meats'
    ],
    causesHindi: [
      'मस्तिष्क में न्यूरोकेमिकल असंतुलन (जैसे सेरोटोनिन)',
      'ट्रिगर्स: हार्मोनल बदलाव, तेज धूप, मौसम में बदलाव',
      'कुछ खाद्य पदार्थ जैसे पुराना पनीर, प्रसंस्कृत भोजन या अत्यधिक कैफीन'
    ],
    riskFactorsEnglish: [
      'Family history of migraine',
      'Women are 3 times more likely to experience migraines',
      'Irregular sleep patterns and high emotional stress'
    ],
    riskFactorsHindi: [
      'परिवार में माइग्रेन का इतिहास',
      'महिलाओं में पुरुषों की तुलना में 3 गुना अधिक संभावना',
      'अनियमित नींद और अत्यधिक मानसिक तनाव'
    ],
    precautionsEnglish: [
      'Keep a detailed migraine trigger diary',
      'Avoid identified trigger foods and skipping meals',
      'Wear polarized sunglasses in intense outdoor sunlight'
    ],
    precautionsHindi: [
      'एक डायरी रखें ताकि पता चल सके कि किस चीज से दर्द शुरू होता है',
      'पहचाने गए ट्रिगर्स और भूखे रहने से बचें',
      'धूप में निकलते समय धूप का चश्मा (सनग्लासेस) पहनें'
    ],
    preventionEnglish: [
      'Maintain steady sleep and wake times seven days a week',
      'Stay consistently hydrated throughout the day',
      'Practice biofeedback or progressive muscle relaxation'
    ],
    preventionHindi: [
      'सोने और जागने का समय रोज एक समान रखें',
      'दिनभर नियमित पानी पीते रहें',
      'योग और ध्यान द्वारा तनाव कम करें'
    ],
    selfCareEnglish: [
      'Retreat immediately to a pitch-dark, silent room and rest with eyes closed',
      'Place a cold gel pack over forehead and temples',
      'Sip small amounts of ginger tea to combat nausea'
    ],
    selfCareHindi: [
      'दर्द शुरू होते ही अंधेरे और बिल्कुल शांत कमरे में जाकर लेट जाएं',
      'माथे और कनपटी पर बर्फ की ठंडी पट्टी रखें',
      'उल्टी या मतली कम करने के लिए अदरक की हल्की चाय पिएं'
    ],
    doctorWarningEnglish: [
      'Headache strikes suddenly like a lightning bolt',
      'Migraine accompanied by speech slurring, paralysis, or confusion',
      'Frequency increases to more than 15 days per month'
    ],
    doctorWarningHindi: [
      'दर्द अचानक बिजली की तरह बहुत तेज शुरू हो जाए',
      'दर्द के साथ जीभ लड़खड़ाना, चेहरे या हाथ में सुन्नपन होना',
      'महीने में 15 से अधिक दिन सिरदर्द रहने लगे'
    ],
    emergencySignsEnglish: [
      'Sudden loss of vision or double vision',
      'Inability to move one side of the body'
    ],
    emergencySignsHindi: [
      'अचानक आंखों की रोशनी जाना या दो-दो चीजें दिखना',
      'शरीर का एक हिस्सा हिलाने में असमर्थ होना'
    ],
    faqEnglish: [
      {
        questionEnglish: 'What is a migraine aura?',
        questionHindi: 'माइग्रेन का ऑरा क्या होता है?',
        answerEnglish: 'An aura is a temporary sensory warning sign that happens before or during a migraine, usually involving visual flashes, blind spots, or tingling in the hands.',
        answerHindi: 'ऑरा एक अस्थायी चेतावनी संकेत है जो माइग्रेन दर्द से कुछ मिनट पहले दिखता है, जैसे आंखों के सामने चमकती रोशनी, अंधेरे धब्बे या हाथों में झुनझुनी।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    isFeatured: true,
    tagsEnglish: ['migraine', 'headache', 'throbbing', 'aura', 'nausea'],
    tagsHindi: ['माइग्रेन', 'आधासीसी', 'सिरदर्द', 'मतली', 'चक्कर']
  },
  {
    id: 'sore-throat',
    nameEnglish: 'Sore Throat',
    nameHindi: 'गले में खराश',
    medicalName: 'Pharyngitis',
    category: 'ear-throat',
    categoryNameEnglish: 'Ear, Nose & Throat',
    categoryNameHindi: 'कान, नाक और गला',
    shortDescriptionEnglish: 'Pain, scratchiness, or irritation of the throat that often worsens when swallowing.',
    shortDescriptionHindi: 'गले में दर्द, सूखापन या जलन जो निगलते समय और बढ़ जाती है।',
    imageUrl: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=800&q=80',
    contagious: true,
    typicalDurationEnglish: '4 - 7 days',
    typicalDurationHindi: '4 से 7 दिन',
    overviewEnglish: 'A sore throat is inflammation of the pharynx, the tube behind the mouth. Most cases are caused by viral infections like the cold or flu. Bacterial causes such as Strep throat require targeted medical evaluation.',
    overviewHindi: 'गले में खराश गले के पिछले हिस्से (ग्रसनी) की सूजन है। अधिकांश मामलों में यह सर्दी या फ्लू जैसे वायरल संक्रमण के कारण होती है। स्ट्रेप थ्रोट जैसे जीवाणु संक्रमण में डॉक्टर से जांच की आवश्यकता होती है।',
    symptomsEnglish: [
      'Pain or scratchy sensation in the throat',
      'Pain that increases when swallowing or talking',
      'Red, swollen tonsils, sometimes with white patches',
      'Swollen, tender lymph glands in the neck or jaw'
    ],
    symptomsHindi: [
      'गले में दर्द, चुभन या खरोंच जैसा अहसास',
      'थूक या खाना निगलते समय दर्द बढ़ जाना',
      'टॉन्सिल्स का लाल और सूजा हुआ होना',
      'गर्दन की ग्रंथियों (लिम्फ नोड्स) में सूजन और छूने पर दर्द'
    ],
    causesEnglish: [
      'Viral infections (Rhino, Adeno, Epstein-Barr, Flu)',
      'Group A Streptococcus bacteria (Strep throat)',
      'Dry indoor air, yelling, mouth breathing, or stomach acid reflux'
    ],
    causesHindi: [
      'वायरल संक्रमण (सर्दी, फ्लू)',
      'स्ट्रेप्टोकोकस बैक्टीरिया (स्ट्रेप थ्रोट)',
      'कमरे की सूखी हवा, जोर से चिल्लाना या एसिडिटी'
    ],
    riskFactorsEnglish: [
      'School-age children and adolescents',
      'Exposure to tobacco smoke or chemical fumes',
      'Frequent enclosed contact with people who are coughing'
    ],
    riskFactorsHindi: [
      'स्कूल जाने वाले बच्चे और किशोर',
      'सिगरेट के धुएं या रासायनिक वाष्प के संपर्क में रहना',
      'संक्रमित लोगों के साथ नजदीकी संपर्क'
    ],
    precautionsEnglish: [
      'Replace your toothbrush after recovering from a throat infection',
      'Avoid sharing drinking bottles or straws',
      'Wash hands before eating'
    ],
    precautionsHindi: [
      'गले के संक्रमण से ठीक होने के बाद अपना टूथब्रश बदल लें',
      'पानी की बोतल या गिलास किसी से साझा न करें',
      'खाना खाने से पहले हाथ अच्छी तरह धोएं'
    ],
    preventionEnglish: [
      'Avoid close contact with people with respiratory symptoms',
      'Use a room humidifier during dry winter months',
      'Quit smoking and avoid second-hand smoke'
    ],
    preventionHindi: [
      'संक्रमित व्यक्तियों से उचित दूरी बनाए रखें',
      'सर्दियों में हवा में नमी बनाए रखने के लिए ह्यूमिडिफायर का उपयोग करें',
      'धूम्रपान से बचें'
    ],
    selfCareEnglish: [
      'Gargle with warm salt water (1/2 teaspoon salt in 1 cup warm water) 3-4 times daily',
      'Sip warm water mixed with honey and lemon juice',
      'Suck on throat lozenges or hard candies to stimulate soothing saliva'
    ],
    selfCareHindi: [
      'दिन में 3-4 बार हल्के गुनगुने नमक के पानी से गरारे करें',
      'हल्के गर्म पानी में शहद और नींबू मिलाकर घूंट-घूंट पिएं',
      'गले की नमी बनाए रखने के लिए हर्बल कफ ड्रॉप्स या मुलेठी चूसें'
    ],
    doctorWarningEnglish: [
      'Severe pain accompanied by inability to swallow saliva or open mouth',
      'Difficulty breathing or high fever above 101.5°F',
      'Joint pain, earache, or rash developing alongside throat pain'
    ],
    doctorWarningHindi: [
      'थूक निगलने में असमर्थता या मुंह पूरी तरह न खुल पाना',
      'सांस लेने में कठिनाई या 101.5°F से अधिक तेज बुखार',
      'गले के दर्द के साथ जोड़ों में दर्द, कान में दर्द या त्वचा पर लाल दाने'
    ],
    emergencySignsEnglish: [
      'Drooling because swallowing is impossible',
      'Stridor (high-pitched whistling sound when breathing in)'
    ],
    emergencySignsHindi: [
      'लार निगल न पाने के कारण मुंह से लार टपकना',
      'सांस लेते समय सीटी जैसी तेज आवाज आना'
    ],
    faqEnglish: [
      {
        questionEnglish: 'How do I know if my sore throat is Strep throat?',
        questionHindi: 'मुझे कैसे पता चलेगा कि यह स्ट्रेप थ्रोट है?',
        answerEnglish: 'Strep throat typically causes severe throat pain, high fever, and swollen tonsils with white spots, but without a cough or runny nose. A rapid throat swab by a doctor confirms it.',
        answerHindi: 'स्ट्रेप थ्रोट में आमतौर पर खांसी या बहती नाक के बिना तेज बुखार, गंभीर दर्द और टॉन्सिल पर सफेद धब्बे होते हैं। डॉक्टर द्वारा गले की जांच से इसकी पुष्टि होती है।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    tagsEnglish: ['sore throat', 'tonsils', 'pharyngitis', 'strep', 'pain'],
    tagsHindi: ['गले में खराश', 'टॉन्सिल', 'गला दर्द', 'खराश', 'कफ']
  },
  {
    id: 'food-poisoning',
    nameEnglish: 'Food Poisoning',
    nameHindi: 'फूड पॉइजनिंग (खाद्य विषाक्तता)',
    medicalName: 'Foodborne Gastroenteritis',
    category: 'digestive',
    categoryNameEnglish: 'Digestive',
    categoryNameHindi: 'पाचन समस्याएं',
    shortDescriptionEnglish: 'An illness caused by consuming food contaminated with bacteria, viruses, or parasites.',
    shortDescriptionHindi: 'बैक्टीरिया, वायरस या विषैले तत्वों से दूषित भोजन खाने से होने वाली बीमारी।',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: '1 - 3 days',
    typicalDurationHindi: '1 से 3 दिन',
    overviewEnglish: 'Food poisoning occurs when you ingest food contaminated with infectious organisms or their toxins. Symptoms often begin within hours of eating compromised food, manifesting as acute nausea, vomiting, abdominal cramping, and watery diarrhea.',
    overviewHindi: 'फूड पॉइजनिंग तब होती है जब आप दूषित या बासी खाना खाते हैं। खाना खाने के कुछ ही घंटों बाद पेट में तेज मरोड़, उल्टी, दस्त और कमजोरी जैसे लक्षण शुरू हो जाते हैं। निर्जलीकरण से बचना इसका सबसे महत्वपूर्ण उपचार है।',
    symptomsEnglish: [
      'Nausea and sudden episodes of vomiting',
      'Watery, frequent diarrhea',
      'Sharp abdominal cramps and stomach pain',
      'Low-grade fever and body chills',
      'Weakness and intense thirst (dehydration signs)'
    ],
    symptomsHindi: [
      'जी मिचलाना और बार-बार उल्टी होना',
      'पतले पानी जैसे दस्त लगना',
      'पेट में तेज ऐंठन और मरोड़',
      'हल्का बुखार और ठंड लगना',
      'अत्यधिक कमजोरी और मुंह सूखना (निर्जलीकरण)'
    ],
    causesEnglish: [
      'Bacteria like Salmonella, E. coli, Campylobacter, or Listeria',
      'Viruses like Norovirus or Rotavirus',
      'Underdone poultry, contaminated street food, or expired dairy'
    ],
    causesHindi: [
      'साल्मोनेला या ई. कोलाई जैसे हानिकारक जीवाणु',
      'नोरोवायरस या अन्य वायरस',
      'कच्चा या अधपका मांस, दूषित स्ट्रीट फूड या बासी दूध-दही'
    ],
    riskFactorsEnglish: [
      'Eating raw or undercooked meats, eggs, and seafood',
      'Consuming unpasteurized milk or fruit juices',
      'Eating street food stored in warm, unrefrigerated conditions'
    ],
    riskFactorsHindi: [
      'कच्चा या अधपका भोजन खाना',
      'बिना उबला दूध पीना',
      'धूप या गर्मी में खुली रखी चीजें और चाट खाना'
    ],
    precautionsEnglish: [
      'Wash cutting boards and knives thoroughly after preparing raw meat',
      'Refrigerate leftovers within 2 hours of cooking',
      'Always wash hands before handling or eating food'
    ],
    precautionsHindi: [
      'कच्चा मांस काटने के बाद बर्तनों को अच्छी तरह धोएं',
      'बचे हुए खाने को 2 घंटे के भीतर फ्रिज में रखें',
      'खाना खाने और बनाने से पहले हाथ साबुन से धोएं'
    ],
    preventionEnglish: [
      'Cook foods to safe internal temperatures',
      'Keep raw meats separate from ready-to-eat vegetables',
      'Drink only safe, treated drinking water'
    ],
    preventionHindi: [
      'भोजन को पूरी तरह अच्छी तरह पका कर खाएं',
      'कच्ची सब्जियों और मीट को अलग-अलग बर्तनों में रखें',
      'हमेशा स्वच्छ और सुरक्षित पानी पिएं'
    ],
    selfCareEnglish: [
      'Sip Oral Rehydration Solution (ORS) slowly in small spoonfuls',
      'Avoid dairy, fatty, spicy, and fried foods for 48 hours',
      'Gradually introduce bland foods: Bananas, Rice, Applesauce, and Toast (BRAT diet)'
    ],
    selfCareHindi: [
      'ओआरएस (ORS) या नमक-चीनी का घोल थोड़ी-थोड़ी देर में चम्मच से पिएं',
      'तेल-मसाले, दूध, चाय और तली-भुनी चीजों से दो दिन तक परहेज करें',
      'केला, उबले चावल, मूंग दाल की पतली खिचड़ी और टोस्ट जैसे हल्के आहार लें'
    ],
    doctorWarningEnglish: [
      'Inability to keep liquids down for more than 12 hours due to vomiting',
      'High fever above 102°F (38.9°C)',
      'Blood present in stools or vomit'
    ],
    doctorWarningHindi: [
      'लगातार उल्टी के कारण 12 घंटे से पानी भी पेट में न रुकना',
      '102°F से अधिक तेज बुखार होना',
      'उल्टी या दस्त में खून आना'
    ],
    emergencySignsEnglish: [
      'Signs of severe dehydration: sunken eyes, no urination for 8 hours, confusion',
      'Extreme, unbearable abdominal agony'
    ],
    emergencySignsHindi: [
      'गंभीर निर्जलीकरण: आंखें धंस जाना, 8 घंटे से पेशाब न आना, अत्यधिक चक्कर',
      'पेट में असहनीय तेज दर्द'
    ],
    faqEnglish: [
      {
        questionEnglish: 'Should I take anti-diarrhea pills right away?',
        questionHindi: 'क्या दस्त होते ही तुरंत दवा ले लेनी चाहिए?',
        answerEnglish: 'Generally no. Diarrhea is the body\'s natural way of flushing out toxins. Anti-diarrheal medications can trap bacterial toxins inside your digestive tract unless advised by your physician.',
        answerHindi: 'आमतौर पर तुरंत दस्त रोकने की दवा नहीं लेनी चाहिए क्योंकि दस्त शरीर से विषैले बैक्टीरिया को बाहर निकालने का तरीका है। डॉक्टर की सलाह के बाद ही दवा लें।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    tagsEnglish: ['food poisoning', 'vomiting', 'diarrhea', 'stomach', 'nausea'],
    tagsHindi: ['फूड पॉइजनिंग', 'उल्टी', 'दस्त', 'पेट दर्द', 'मतली']
  },
  {
    id: 'diarrhea',
    nameEnglish: 'Diarrhea',
    nameHindi: 'दस्त (अतिसार)',
    medicalName: 'Acute Diarrheal Illness',
    category: 'digestive',
    categoryNameEnglish: 'Digestive',
    categoryNameHindi: 'पाचन समस्याएं',
    shortDescriptionEnglish: 'Frequent, loose, or watery bowel movements causing rapid fluid and mineral loss.',
    shortDescriptionHindi: 'बार-बार पतले या पानी जैसे मल का आना, जिससे शरीर में पानी और लवणों की कमी हो सकती है।',
    imageUrl: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: '2 - 4 days',
    typicalDurationHindi: '2 से 4 दिन',
    overviewEnglish: 'Diarrhea is characterized by passing loose or watery stools three or more times in a day. The greatest health threat from diarrhea is dehydration and electrolyte imbalance, which can be prevented with prompt fluid therapy.',
    overviewHindi: 'दस्त में दिन में तीन या उससे अधिक बार पतला या पानी जैसा मल आता है। इसका सबसे बड़ा खतरा शरीर में पानी और आवश्यक लवणों की कमी होना है। समय पर ओआरएस घोल लेने से कमजोरी और खतरे से बचा जा सकता है।',
    symptomsEnglish: [
      'Frequent watery or loose bowel movements',
      'Abdominal cramps and urgent sensation to defecate',
      'Bloating, stomach rumbling, and gas',
      'Dry mouth, reduced urination, and weakness'
    ],
    symptomsHindi: [
      'बार-बार पतला या पानी जैसा मल आना',
      'पेट में मरोड़ और तुरंत शौचालय जाने की मजबूरी',
      'पेट फूलना और गुड़गुड़ाहट होना',
      'मुंह सूखना, पेशाब कम आना और कमजोरी'
    ],
    causesEnglish: [
      'Viral infections such as Rotavirus or Norovirus',
      'Bacterial food or water contamination (Campylobacter, Salmonella)',
      'Lactose intolerance or food allergies',
      'Side effect of medications, particularly broad-spectrum antibiotics'
    ],
    causesHindi: [
      'रोटावायरस या नोरोवायरस जैसे वायरल संक्रमण',
      'दूषित पानी या भोजन से जीवाणु संक्रमण',
      'दूध या डेयरी उत्पादों से एलर्जी (लैक्टोज असहिष्णुता)',
      'एंटीबायोटिक दवाओं का दुष्प्रभाव'
    ],
    riskFactorsEnglish: [
      'Drinking untreated tap water while traveling (traveler’s diarrhea)',
      'Poor hand hygiene and sanitation',
      'Recent antibiotic therapy disrupting healthy gut flora'
    ],
    riskFactorsHindi: [
      'यात्रा के दौरान असुरक्षित पानी पीना',
      'साफ-सफाई की कमी और हाथ न धोना',
      'हाल ही में एंटीबायोटिक दवाएं लेना'
    ],
    precautionsEnglish: [
      'Wash hands thoroughly after every restroom visit',
      'Drink boiled or bottled water when traveling',
      'Peel all fresh fruits yourself'
    ],
    precautionsHindi: [
      'शौचालय के बाद हर बार साबुन से हाथ अच्छी तरह धोएं',
      'यात्रा के दौरान उबला या सीलबंद बोतल का पानी पिएं',
      'फलों को अच्छी तरह धोकर और छीलकर ही खाएं'
    ],
    preventionEnglish: [
      'Drink clean, verified water',
      'Ensure proper rotavirus vaccination in infants',
      'Avoid raw unpasteurized dairy and street ice cubes'
    ],
    preventionHindi: [
      'हमेशा स्वच्छ और शुद्ध पानी पिएं',
      'बच्चों को रोटावायरस का टीका लगवाएं',
      'सड़क किनारे की बर्फ और खुली चीजें न खाएं'
    ],
    selfCareEnglish: [
      'Drink 1 cup of ORS solution after every loose bowel movement',
      'Sip coconut water, clear broth, and weak unsweetened tea',
      'Eat light foods: curd with rice, boiled potatoes, and bananas'
    ],
    selfCareHindi: [
      'हर बार दस्त के बाद एक गिलास ओआरएस (ORS) का घोल अवश्य पिएं',
      'नारियल पानी, पतली छाछ और हल्का सूप पिएं',
      'दही-चावल, केला और उबले आलू जैसे आसानी से पचने वाले आहार लें'
    ],
    doctorWarningEnglish: [
      'Diarrhea persists longer than 48 hours without slowing down',
      'Signs of dehydration: severe thirst, dark urine, dizziness upon standing',
      'Presence of blood, mucus, or black tarry color in stools'
    ],
    doctorWarningHindi: [
      'दस्त 2 दिन (48 घंटे) से अधिक लगातार जारी रहे',
      'निर्जलीकरण के लक्षण: पेशाब न आना या गहरा पीला होना, चक्कर आना',
      'मल में खून, आंव या काला रंग दिखाई देना'
    ],
    emergencySignsEnglish: [
      'Lethargy, unresponsiveness, or sunken fontanelle in infants',
      'Inability to drink fluids'
    ],
    emergencySignsHindi: [
      'बच्चों में अत्यधिक सुस्ती, आंखें धंस जाना और रोने पर आंसू न आना',
      'तरल पदार्थ पीने में पूरी तरह असमर्थ होना'
    ],
    faqEnglish: [
      {
        questionEnglish: 'Is curd (yogurt) good during diarrhea?',
        questionHindi: 'क्या दस्त में दही खाना फायदेमंद है?',
        answerEnglish: 'Yes, plain unsweetened curd contains natural probiotics (beneficial live bacteria) that help restore healthy intestinal flora and hasten recovery.',
        answerHindi: 'हाँ, सादा ताजा दही बहुत फायदेमंद है। इसमें मौजूद प्रोबायोटिक्स (अच्छे बैक्टीरिया) आंतों के संतुलन को ठीक करते हैं।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    tagsEnglish: ['diarrhea', 'loose motion', 'hydration', 'ors', 'gut'],
    tagsHindi: ['दस्त', 'अतिसार', 'पेट खराब', 'ओआरएस', 'कमजोरी']
  },
  {
    id: 'constipation',
    nameEnglish: 'Constipation',
    nameHindi: 'कब्ज',
    medicalName: 'Dyschezia / Constipation',
    category: 'digestive',
    categoryNameEnglish: 'Digestive',
    categoryNameHindi: 'पाचन समस्याएं',
    shortDescriptionEnglish: 'Infrequent, difficult, or painful passage of hard and dry stools.',
    shortDescriptionHindi: 'पेट साफ न होना, मल का कठोर और सूखा होना तथा मल त्याग में अत्यधिक कठिनाई।',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: 'Few days to ongoing',
    typicalDurationHindi: 'कुछ दिनों से पुराना',
    overviewEnglish: 'Constipation occurs when bowel movements become less frequent or stools become difficult and painful to pass. It is typically defined as having fewer than three bowel movements a week, predominantly caused by a lack of dietary fiber and insufficient water intake.',
    overviewHindi: 'कब्ज एक सामान्य पाचन समस्या है जिसमें आंतों की गति धीमी हो जाती है और मल त्याग में कठिनाई होती है। सप्ताह में तीन से कम बार मल त्याग होना कब्ज माना जाता है। आहार में फाइबर की कमी और कम पानी पीना इसके प्रमुख कारण हैं।',
    symptomsEnglish: [
      'Passing fewer than 3 bowel movements per week',
      'Hard, dry, lumpy stools that are painful to evacuate',
      'Straining and sensation of incomplete evacuation',
      'Abdominal bloating and discomfort'
    ],
    symptomsHindi: [
      'सप्ताह में 3 से कम बार शौच जाना',
      'कठोर, सूखा और गांठदार मल जो दर्द के साथ निकले',
      'मल त्याग के समय बहुत जोर लगाना पड़ना',
      'पेट में भारीपन, गैस और पेट फूला रहना'
    ],
    causesEnglish: [
      'Low dietary fiber intake (minimal fruits, vegetables, whole grains)',
      'Insufficient daily water and fluid consumption',
      'Sedentary lifestyle with minimal daily physical movement',
      'Ignoring the urge to pass stool or changes in routine'
    ],
    causesHindi: [
      'आहार में फाइबर (सलाद, फल, हरी सब्जियां) की कमी',
      'दिनभर में पर्याप्त पानी न पीना',
      'शारीरिक गतिविधि और व्यायाम की कमी',
      'शौच की इच्छा को दबाना या दिनचर्या में बदलाव'
    ],
    riskFactorsEnglish: [
      'Older adults with reduced gut motility',
      'Pregnancy due to hormonal shifts and iron supplements',
      'Certain medications like pain relievers or iron tablets'
    ],
    riskFactorsHindi: [
      'बुजुर्ग लोग जिनमें आंतों की गति स्वाभाविक रूप से धीमी होती है',
      'गर्भावस्था के दौरान हार्मोनल बदलाव',
      'दर्द निवारक दवाएं या आयरन की गोलियां लेना'
    ],
    precautionsEnglish: [
      'Never ignore natural bowel signals when they occur',
      'Avoid chronic dependency on strong chemical laxatives',
      'Increase dietary fiber gradually to avoid excessive gas'
    ],
    precautionsHindi: [
      'शौच का वेग आने पर उसे कभी न रोकें',
      'बिना डॉक्टर की सलाह के तेज जुलाब की गोलियों की आदत न डालें',
      'भोजन में धीरे-धीरे फाइबर बढ़ाएं ताकि गैस न बने'
    ],
    preventionEnglish: [
      'Consume 25 to 35 grams of natural fiber every day',
      'Drink 8 to 10 glasses of water daily',
      'Engage in 30 minutes of brisk walking every day'
    ],
    preventionHindi: [
      'रोजाना 25 से 35 ग्राम फाइबर युक्त फल, चोकरयुक्त आटा और सब्जियां खाएं',
      'दिनभर में 8 से 10 गिलास पानी पिएं',
      'रोजाना कम से कम 30 मिनट तेज गति से टहलें'
    ],
    selfCareEnglish: [
      'Eat fiber-rich fruits like prunes, papayas, apples with peel, and pears',
      'Take 1 tablespoon of psyllium husk (Isabgol) with warm water at bedtime',
      'Drink a glass of warm water or herbal tea first thing in the morning'
    ],
    selfCareHindi: [
      'पपीता, अमरूद, सेब, अंजीर और हरी पत्तेदार सब्जियां खाएं',
      'रात को सोने से पहले गुनगुने पानी या दूध के साथ एक चम्मच इसबगोल की भूसी लें',
      'सुबह उठते ही एक-दो गिलास गुनगुना पानी पीने की आदत डालें'
    ],
    doctorWarningEnglish: [
      'Constipation accompanied by severe vomiting and inability to pass gas',
      'Blood in the stool or unexplained significant weight loss',
      'Sudden change in bowel habits lasting over 2 weeks'
    ],
    doctorWarningHindi: [
      'कब्ज के साथ तेज उल्टी होना और गैस भी पास न होना',
      'मल में खून आना या बिना वजह वजन कम होना',
      'मल त्याग की आदतों में अचानक बड़ा बदलाव जो 2 हफ्ते से अधिक रहे'
    ],
    emergencySignsEnglish: [
      'Excruciating abdominal swelling with vomiting',
      'Black tarry stools'
    ],
    emergencySignsHindi: [
      'पेट में असहनीय दर्द और पेट का बुरी तरह फूलना',
      'काले रंग का चिपचिपा मल आना'
    ],
    faqEnglish: [
      {
        questionEnglish: 'How does warm water help with morning bowel movements?',
        questionHindi: 'सुबह गर्म पानी पीने से पेट साफ होने में कैसे मदद मिलती है?',
        answerEnglish: 'Drinking warm water stimulates the gastrocolic reflex, which prompts rhythmic contractions in the colon to move stool naturally.',
        answerHindi: 'सुबह गुनगुना पानी पीने से गैस्ट्रोकोलिक रिफ्लेक्स सक्रिय होता है, जिससे आंतों में संकुचन होता है और पेट आसानी से साफ होता है।'
      }
    ],
    faqHindi: [],
    isPopular: false,
    tagsEnglish: ['constipation', 'digestion', 'fiber', 'stomach', 'bowel'],
    tagsHindi: ['कब्ज', 'पेट साफ', 'फाइबर', 'पाचन', 'इसबगोल']
  },
  {
    id: 'gastritis',
    nameEnglish: 'Gastritis & Acidity',
    nameHindi: 'गैस्ट्राइटिस एवं एसिडिटी',
    medicalName: 'Acute or Chronic Gastritis / Dyspepsia',
    category: 'digestive',
    categoryNameEnglish: 'Digestive',
    categoryNameHindi: 'पाचन समस्याएं',
    shortDescriptionEnglish: 'Inflammation, irritation, or erosion of the protective stomach lining.',
    shortDescriptionHindi: 'पेट की अंदरूनी परत में सूजन, जलन या एसिड के कारण होने वाली जलन और दर्द।',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: 'A few days to recurrent',
    typicalDurationHindi: 'कुछ दिन से बार-बार होने वाला',
    overviewEnglish: 'Gastritis is an inflammation of the mucosa lining the stomach. It leads to burning discomfort or aching in the upper abdomen, sour belching, nausea, and feeling uncomfortably full shortly after eating.',
    overviewHindi: 'गैस्ट्राइटिस पेट की भीतरी सुरक्षात्मक परत की सूजन है। इससे पेट के ऊपरी हिस्से में जलन, खट्टी डकारें, सीने में जलन और खाना खाने के तुरंत बाद पेट भारी होने की समस्या होती है।',
    symptomsEnglish: [
      'Burning ache or pain in the upper abdomen (epigastric region)',
      'Heartburn, acid reflux, and sour burping',
      'Nausea, bloating, and loss of appetite',
      'Feeling uncomfortably full soon after starting a meal'
    ],
    symptomsHindi: [
      'पेट के ऊपरी हिस्से में जलन और तेज चुभन वाला दर्द',
      'सीने में जलन (हार्टबर्न) और खट्टी डकारें आना',
      'जी मिचलाना, पेट फूलना और भूख न लगना',
      'थोड़ा सा खाना खाते ही पेट बहुत भारी लगना'
    ],
    causesEnglish: [
      'Helicobacter pylori (H. pylori) bacterial infection',
      'Frequent use of NSAID pain relievers (aspirin, ibuprofen)',
      'Excessive intake of spicy, oily foods, caffeine, or alcohol',
      'Severe psychological stress or prolonged fasting'
    ],
    causesHindi: [
      'हेलिकोबैक्टर पाइलोरी (H. pylori) बैक्टीरिया का संक्रमण',
      'दर्द निवारक दवाओं (एस्पिरिन, ब्रूफेन आदि) का अत्यधिक सेवन',
      'बहुत अधिक तीखा, तला-भुना खाना, चाय, कॉफी या शराब का सेवन',
      'लंबे समय तक भूखे रहना या अत्यधिक तनाव'
    ],
    riskFactorsEnglish: [
      'Regular reliance on over-the-counter pain medications',
      'Older age, as the stomach lining thins naturally',
      'High psychological and emotional stress levels'
    ],
    riskFactorsHindi: [
      'नियमित रूप से पेनकिलर दवाओं का सेवन',
      'अधिक उम्र, क्योंकि उम्र बढ़ने के साथ पेट की परत पतली होती है',
      'अधिक मानसिक तनाव'
    ],
    precautionsEnglish: [
      'Avoid taking pain relievers on an empty stomach',
      'Eat smaller, frequent meals instead of heavy dinners',
      'Do not lie down flat immediately after eating a meal'
    ],
    precautionsHindi: [
      'खाली पेट कभी भी दर्द निवारक गोलियां न लें',
      'एक बार में बहुत ज्यादा खाने के बजाय थोड़ा-थोड़ा करके खाएं',
      'खाना खाने के तुरंत बाद बिस्तर पर न लेटें'
    ],
    preventionEnglish: [
      'Limit spicy, deeply fried, and acidic foods (tomatoes, citrus)',
      'Avoid excessive black coffee and carbonated sodas',
      'Eat dinners at least 2 to 3 hours before sleep'
    ],
    preventionHindi: [
      'अत्यधिक तेल-मसालेदार और खट्टे पदार्थों का सेवन कम करें',
      'खाली पेट तेज चाय या कोल्ड ड्रिंक्स न पिएं',
      'सोने से कम से कम 2-3 घंटे पहले रात का खाना खाएं'
    ],
    selfCareEnglish: [
      'Drink cold milk or coconut water to neutralize stomach acid',
      'Consume ginger tea or fennel (saunf) seed water after meals',
      'Elevate the head of your bed by 6 inches if experiencing nighttime reflux'
    ],
    selfCareHindi: [
      'पेट की जलन शांत करने के लिए ठंडा दूध या नारियल पानी पिएं',
      'भोजन के बाद सौंफ चबाएं या सौंफ का पानी पिएं',
      'रात को सोते समय सिरहाने को थोड़ा ऊंचा रखें'
    ],
    doctorWarningEnglish: [
      'Vomiting blood or material resembling dark coffee grounds',
      'Black, tarry bowel movements indicating stomach bleeding',
      'Severe, constant upper abdominal pain that radiates to the back'
    ],
    doctorWarningHindi: [
      'उल्टी में खून आना या कॉफी के रंग जैसी उल्टी होना',
      'काला चिपचिपा मल आना जो पेट में रक्तस्राव का संकेत हो सकता है',
      'पेट में असहनीय दर्द जो पीठ की तरफ फैल रहा हो'
    ],
    emergencySignsEnglish: [
      'Sudden fainting, cold sweats, and severe dizziness',
      'Uncontrolled vomiting with blood'
    ],
    emergencySignsHindi: [
      'अचानक बेहोश होना, ठंडा पसीना आना और चक्कर आना',
      'उल्टी में खून आना'
    ],
    faqEnglish: [
      {
        questionEnglish: 'Can stress cause stomach acidity?',
        questionHindi: 'क्या मानसिक तनाव से एसिडिटी हो सकती है?',
        answerEnglish: 'Yes. Psychological stress stimulates the vagus nerve and hormonal pathways to trigger excess hydrochloric acid production in the stomach while reducing blood flow to the protective mucosal lining.',
        answerHindi: 'हाँ। अत्यधिक तनाव से पेट में एसिड का स्राव बढ़ जाता है और पेट की सुरक्षात्मक परत कमजोर हो जाती है जिससे जलन और एसिडिटी होती है।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    tagsEnglish: ['gastritis', 'acidity', 'heartburn', 'stomach', 'acid reflux'],
    tagsHindi: ['एसिडिटी', 'गैस', 'सीने में जलन', 'पेट में जलन', 'खट्टी डकार']
  },
  {
    id: 'asthma',
    nameEnglish: 'Asthma',
    nameHindi: 'अस्थमा (दमा)',
    medicalName: 'Bronchial Asthma',
    category: 'respiratory',
    categoryNameEnglish: 'Respiratory',
    categoryNameHindi: 'श्वसन संबंधी रोग',
    shortDescriptionEnglish: 'A chronic condition where airways narrow, swell, and produce extra mucus, causing breathing difficulty.',
    shortDescriptionHindi: 'एक दीर्घकालिक स्थिति जिसमें सांस की नलियां संकरी होकर सूज जाती हैं, जिससे सांस लेने में कठिनाई होती है।',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: 'Chronic / Episodic',
    typicalDurationHindi: 'दीर्घकालिक / समय-समय पर',
    overviewEnglish: 'Asthma is a long-term respiratory disease characterized by hyperreactive airways. In response to environmental triggers like cold air, dust, or exercise, the bronchial tubes inflame, spasm, and swell, making it difficult to exhale air freely.',
    overviewHindi: 'अस्थमा सांस की नलियों की एक पुरानी बीमारी है। जब व्यक्ति धूल, ठंडी हवा, धुएं या परागकणों के संपर्क में आता है, तो सांस की नलियां सिकुड़ जाती हैं और उनमें सूजन आ जाती है, जिससे सीटी जैसी आवाज (घरघराहट) और सांस फूलने लगती है।',
    symptomsEnglish: [
      'Shortness of breath and difficulty breathing out',
      'High-pitched wheezing or whistling sound when exhaling',
      'Chest tightness, stiffness, or pain',
      'Coughing spells that worsen at night or early morning'
    ],
    symptomsHindi: [
      'सांस फूलना और सांस बाहर छोड़ने में तकलीफ होना',
      'सांस लेते समय सीने से सीटी जैसी घरघराहट की आवाज आना',
      'सीने में भारीपन, जकड़न या हल्का दर्द',
      'रात में या सुबह-सुबह खांसी का दौरा पड़ना'
    ],
    causesEnglish: [
      'Combination of genetic susceptibility and environmental factors',
      'Inhaled allergens: dust mites, animal dander, pollen, mold',
      'Respiratory viral infections triggering airway spasms',
      'Cold dry air, air pollution, and smoke'
    ],
    causesHindi: [
      'आनुवंशिक कारण और पर्यावरणीय एलर्जी',
      'धूल के कण, जानवरों के बाल, परागकण और फफूंद (मोल्ड)',
      'सर्दी-जुकाम या वायरल संक्रमण के बाद सांस नली में सूजन',
      'ठंडी हवा, वायु प्रदूषण और सिगरेट का धुआं'
    ],
    riskFactorsEnglish: [
      'Family history of asthma or eczema/allergies (atopy)',
      'Exposure to second-hand smoke during childhood',
      'Working with occupational fumes, chemicals, or flour dust'
    ],
    riskFactorsHindi: [
      'परिवार में किसी को दमा या त्वचा एलर्जी होना',
      'बचपन में सिगरेट के धुएं के संपर्क में रहना',
      'कारखानों, रासायनिक धुएं या धूल भरे वातावरण में काम करना'
    ],
    precautionsEnglish: [
      'Always keep prescribed rescue inhaler accessible wherever you go',
      'Cover your nose and mouth with a warm scarf in cold winter weather',
      'Wash bedding weekly in hot water (above 130°F) to kill dust mites'
    ],
    precautionsHindi: [
      'अपना निर्धारित इनहेलर हमेशा अपने साथ रखें',
      'सर्दियों में बाहर निकलते समय नाक और मुंह को मफलर से ढकें',
      'धूल के कणों से बचने के लिए बिस्तर की चादरें गर्म पानी से धोएं'
    ],
    preventionEnglish: [
      'Identify and strictly avoid personal asthma triggers',
      'Get annual influenza and pneumonia vaccines',
      'Avoid smoking and smoky environments'
    ],
    preventionHindi: [
      'अपने व्यक्तिगत एलर्जी ट्रिगर्स को पहचानें और उनसे बचें',
      'हर साल फ्लू का टीका लगवाएं ताकि फेफड़े सुरक्षित रहें',
      'धूम्रपान और अगरबत्ती/धूपबत्ती के धुएं से बचें'
    ],
    selfCareEnglish: [
      'Sit upright and practice diaphragmatic pursed-lip breathing',
      'Stay calm during an episode to avoid hyperventilating',
      'Use prescribed maintenance and reliever inhalers as directed by physician'
    ],
    selfCareHindi: [
      'सांस फूलने पर सीधे बैठ जाएं और होंठ सिकोड़कर धीरे-धीरे सांस छोड़ें',
      'शांत रहने की कोशिश करें क्योंकि घबराहट से सांस और फूलती है',
      'डॉक्टर द्वारा बताए गए इनहेलर का नियमित और सही तरीके से उपयोग करें'
    ],
    doctorWarningEnglish: [
      'Rescue inhaler does not provide relief or wears off within 2 hours',
      'Breathing difficulty interferes with speaking words or normal walking',
      'Peak flow meter readings drop below 50% of personal best'
    ],
    doctorWarningHindi: [
      'इनहेलर लेने के बाद भी सांस न सुधरे या 2 घंटे में दोबारा सांस फूलने लगे',
      'सांस फूलने के कारण एक सांस में दो शब्द भी न बोल पाना',
      'सीने में अत्यधिक खिंचाव और थकान होना'
    ],
    emergencySignsEnglish: [
      'Skin sucking in tightly between ribs and at the neck (retractions)',
      'Lips, tongue, or fingernails turning blue or gray'
    ],
    emergencySignsHindi: [
      'सांस लेते समय पसलियों और गर्दन की त्वचा का अंदर धंसना',
      'होंठ, जीभ या नाखून नीले पड़ना (ऑक्सीजन की कमी)'
    ],
    faqEnglish: [
      {
        questionEnglish: 'Are inhalers addictive?',
        questionHindi: 'क्या इनहेलर की आदत (लत) पड़ जाती है?',
        answerEnglish: 'No. Inhalers deliver tiny, precise micro-doses of medication directly into the bronchial tubes where needed, with far fewer side effects than oral tablets. They are life-saving medications, not addictive substances.',
        answerHindi: 'बिल्कुल नहीं। इनहेलर कोई नशा नहीं हैं, बल्कि यह दवा सीधे फेफड़ों तक पहुंचाते हैं जिससे बहुत कम मात्रा में दवा की जरूरत पड़ती है और साइड इफेक्ट नहीं होते।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    isFeatured: true,
    tagsEnglish: ['asthma', 'breathing', 'inhaler', 'wheezing', 'lungs'],
    tagsHindi: ['दमा', 'अस्थमा', 'सांस फूलना', 'इनहेलर', 'फेफड़े']
  },
  {
    id: 'diabetes',
    nameEnglish: 'Type 2 Diabetes',
    nameHindi: 'टाइप 2 डायबिटीज (मधुमेह)',
    medicalName: 'Diabetes Mellitus Type 2',
    category: 'diabetes',
    categoryNameEnglish: 'Diabetes & Metabolic',
    categoryNameHindi: 'मधुमेह एवं मेटाबॉलिक',
    shortDescriptionEnglish: 'A chronic metabolic disorder where the body cannot effectively use or produce enough insulin.',
    shortDescriptionHindi: 'एक दीर्घकालिक चयापचय रोग जिसमें शरीर इंसुलिन का सही उपयोग नहीं कर पाता और ब्लड शुगर बढ़ जाता है।',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: 'Chronic lifelong condition',
    typicalDurationHindi: 'दीर्घकालिक (जीवनशैली प्रबंधन योग्य)',
    overviewEnglish: 'Type 2 diabetes is a condition where the body\'s cells become resistant to insulin, or the pancreas produces insufficient insulin. Over time, high blood glucose levels can damage nerves, kidneys, eyes, and blood vessels if not controlled with nutrition, exercise, and medication.',
    overviewHindi: 'टाइप 2 डायबिटीज में शरीर की कोशिकाएं इंसुलिन के प्रति प्रतिरोधी हो जाती हैं, जिससे रक्त में ग्लूकोज (शुगर) का स्तर बढ़ जाता है। यदि इसे संतुलित आहार, व्यायाम और दवाओं से नियंत्रित न किया जाए, तो यह आंखों, गुर्दे (किडनी), नसों और दिल को नुकसान पहुंचा सकता है।',
    symptomsEnglish: [
      'Increased, persistent thirst (polydipsia)',
      'Frequent urination, especially at night (polyuria)',
      'Constant hunger and unprovoked fatigue',
      'Blurry vision and slow-healing cuts or sores',
      'Tingling, numbness, or pins-and-needles in hands and feet'
    ],
    symptomsHindi: [
      'बार-बार बहुत तेज प्यास लगना',
      'विशेष रूप से रात में बार-बार पेशाब आना',
      'लगातार भूख लगना और बिना वजह थकान रहना',
      'आंखों से धुंधला दिखाई देना और घाव या चोट का देर से भरना',
      'हाथों और पैरों में झुनझुनी या सुन्नपन'
    ],
    causesEnglish: [
      'Insulin resistance in muscle, liver, and fat tissues',
      'Genetic predisposition combined with sedentary lifestyle',
      'Excess body weight, particularly visceral abdominal fat',
      'Diet high in refined carbohydrates and sugary beverages'
    ],
    causesHindi: [
      'शरीर में इंसुलिन प्रतिरोध (इंसुलिन रेजिस्टेंस)',
      'आनुवंशिक कारण और शारीरिक निष्क्रियता',
      'मोटापा, विशेष रूप से पेट के आसपास चर्बी जमना',
      'मीठा, मैदे और रिफाइंड भोजन का अत्यधिक सेवन'
    ],
    riskFactorsEnglish: [
      'Age 45 or older (though increasingly diagnosed in young adults)',
      'Family history of diabetes in parents or siblings',
      'High blood pressure or history of gestational diabetes'
    ],
    riskFactorsHindi: [
      'माता-पिता या भाई-बहन में डायबिटीज का इतिहास',
      'मोटापा और शारीरिक व्यायाम की कमी',
      'हाई ब्लड प्रेशर या गर्भावस्था में शुगर की समस्या'
    ],
    precautionsEnglish: [
      'Monitor fasting and post-meal blood sugar levels periodically',
      'Inspect feet daily for small cuts, blisters, or redness',
      'Undergo annual comprehensive eye (retina) and kidney tests'
    ],
    precautionsHindi: [
      'खाली पेट और खाने के 2 घंटे बाद ब्लड शुगर की नियमित जांच करें',
      'रोजाना अपने पैरों की जांच करें कि कोई कट या छाला तो नहीं है',
      'साल में कम से कम एक बार आंखों (रेटिना) और किडनी की जांच कराएं'
    ],
    preventionEnglish: [
      'Maintain a healthy body weight with balanced nutrition',
      'Engage in at least 150 minutes of moderate aerobic activity weekly',
      'Replace processed refined grains with whole grains, oats, and legumes'
    ],
    preventionHindi: [
      'संतुलित आहार से वजन को नियंत्रित रखें',
      'सप्ताह में कम से कम 150 मिनट व्यायाम या तेज पैदल चलना',
      'सफेद चीनी, मैदा और मीठे पेय पदार्थों से पूरी तरह परहेज करें'
    ],
    selfCareEnglish: [
      'Follow the plate method: half plate non-starchy vegetables, quarter protein, quarter whole grains',
      'Take prescribed oral anti-diabetics or insulin consistently at the same times',
      'Carry quick-acting glucose tablets or candy in case of low blood sugar'
    ],
    selfCareHindi: [
      'थाली में आधी हरी सब्जियां और सलाद, एक चौथाई दाल/प्रोटीन और एक चौथाई साबुत अनाज रखें',
      'डॉक्टर द्वारा बताई गई दवाएं या इंसुलिन समय पर लें',
      'शुगर अचानक कम होने (हाइपोग्लाइसीमिया) की स्थिति के लिए हमेशा ग्लूकोज या टॉफी साथ रखें'
    ],
    doctorWarningEnglish: [
      'Extreme high blood sugar above 300 mg/dL accompanied by nausea and confusion',
      'Severe hypoglycemia (below 60 mg/dL) that does not respond to glucose',
      'A foot sore or blister that looks infected or turns black'
    ],
    doctorWarningHindi: [
      'ब्लड शुगर 300 से ऊपर पहुंच जाना और मतली व चक्कर आना',
      'शुगर 60 से नीचे गिरना (पसीना आना, घबराहट, बेहोशी जैसी स्थिति)',
      'पैर में कोई घाव जो ठीक न हो रहा हो या काला पड़ रहा हो'
    ],
    emergencySignsEnglish: [
      'Fruity breath odor, rapid breathing, and confusion (Diabetic Ketoacidosis)',
      'Loss of consciousness due to severe hypoglycemia'
    ],
    emergencySignsHindi: [
      'सांस से मीठी या फलों जैसी गंध आना और गहरी तेज सांसें चलना',
      'शुगर बहुत कम होने पर बेहोश हो जाना'
    ],
    faqEnglish: [
      {
        questionEnglish: 'Can Type 2 Diabetes be reversed?',
        questionHindi: 'क्या टाइप 2 डायबिटीज को नियंत्रित या ठीक किया जा सकता है?',
        answerEnglish: 'Through significant healthy weight reduction, low-glycemic nutrition, and consistent physical training, many patients achieve diabetes remission, maintaining normal blood sugar without medication.',
        answerHindi: 'हाँ, सही वजन घटाने, कम कार्ब वाले पौष्टिक आहार और नियमित व्यायाम से कई लोग अपनी शुगर को सामान्य स्तर पर ला सकते हैं।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    isFeatured: true,
    tagsEnglish: ['diabetes', 'sugar', 'insulin', 'blood sugar', 'glucose'],
    tagsHindi: ['डायबिटीज', 'मधुमेह', 'शुगर', 'इंसुलिन', 'ब्लड शुगर']
  },
  {
    id: 'hypertension',
    nameEnglish: 'High Blood Pressure',
    nameHindi: 'उच्च रक्तचाप (हाई ब्लड प्रेशर)',
    medicalName: 'Essential Hypertension',
    category: 'heart',
    categoryNameEnglish: 'Heart & Circulation',
    categoryNameHindi: 'हृदय एवं रक्तचाप',
    shortDescriptionEnglish: 'A condition where the long-term force of the blood against artery walls is consistently elevated.',
    shortDescriptionHindi: 'एक ऐसी स्थिति जिसमें धमनियों की दीवारों पर रक्त का दबाव लगातार सामान्य से अधिक बना रहता है।',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: 'Chronic condition',
    typicalDurationHindi: 'दीर्घकालिक स्थिति',
    overviewEnglish: 'High blood pressure, known as hypertension, occurs when systolic pressure exceeds 130 mmHg or diastolic pressure exceeds 80 mmHg. Often called the "silent killer" because it produces no overt symptoms, unmanaged hypertension strains the heart and damages vital arteries.',
    overviewHindi: 'उच्च रक्तचाप को अक्सर "साइलेंट किलर" कहा जाता है क्योंकि शुरुआती चरणों में इसके कोई स्पष्ट लक्षण नहीं दिखते। जब रक्तचाप 130/80 mmHg से ऊपर बना रहता है, तो यह दिल, मस्तिष्क की नसों और गुर्दों पर भारी दबाव डालता है।',
    symptomsEnglish: [
      'Often completely asymptomatic in early stages (silent killer)',
      'Dull morning headaches at the back of the head',
      'Occasional shortness of breath or dizziness',
      'Nosebleeds and palpitations during severe spikes'
    ],
    symptomsHindi: [
      'प्रारंभिक अवस्था में अक्सर कोई भी लक्षण नहीं दिखता',
      'सुबह उठने पर सिर के पिछले हिस्से में भारीपन या दर्द',
      'हल्के काम में भी सांस फूलना या चक्कर आना',
      'रक्तचाप बहुत अधिक बढ़ने पर नाक से खून आना या घबराहट'
    ],
    causesEnglish: [
      'Narrowed, stiffened arterial vessels from plaque accumulation',
      'Excessive dietary sodium (salt) consumption',
      'Chronic unmanaged stress, sleep apnea, and lack of exercise',
      'Age-related arterial stiffening'
    ],
    causesHindi: [
      'धमनियों का सख्त और संकरा हो जाना',
      'भोजन में बहुत अधिक नमक (सोडियम) का सेवन',
      'अत्यधिक मानसिक तनाव, नींद की कमी और व्यायाम न करना',
      'उम्र बढ़ने के साथ रक्त नलिकाओं का लचीलापन कम होना'
    ],
    riskFactorsEnglish: [
      'Overweight or obesity',
      'Family history of high blood pressure or early stroke',
      'High salt intake, smoking, and heavy alcohol consumption'
    ],
    riskFactorsHindi: [
      'मोटापा और अधिक वजन',
      'परिवार में हाई बीपी या हार्ट अटैक का इतिहास',
      'अधिक नमक खाना, सिगरेट और शराब का सेवन'
    ],
    precautionsEnglish: [
      'Check blood pressure regularly using a calibrated upper-arm cuff',
      'Limit sodium intake to under 2,000 mg (less than 1 teaspoon of salt) daily',
      'Never discontinue prescribed blood pressure medication abruptly'
    ],
    precautionsHindi: [
      'डिजिटल बीपी मशीन से नियमित रूप से ब्लड प्रेशर मापें',
      'दिनभर में नमक का सेवन एक छोटी चम्मच (5 ग्राम) से कम रखें',
      'डॉक्टर द्वारा दी गई बीपी की दवा कभी भी अचानक बंद न करें'
    ],
    preventionEnglish: [
      'Adopt the DASH diet (rich in fruits, vegetables, potassium, low sodium)',
      'Exercise moderately for 30 minutes at least 5 days a week',
      'Limit alcohol consumption and eliminate tobacco smoking'
    ],
    preventionHindi: [
      'पोटेशियम युक्त फल (केला, संतरा), हरी सब्जियां और कम नमक वाला भोजन करें',
      'सप्ताह में 5 दिन कम से कम 30 मिनट तेज गति से चलें या व्यायाम करें',
      'धूम्रपान और शराब से पूरी तरह दूर रहें'
    ],
    selfCareEnglish: [
      'Practice slow, rhythmic belly breathing (6 breaths per minute) to lower tension',
      'Snack on potassium-rich foods like bananas, spinach, and coconut water',
      'Manage daily work stress through mindfulness, hobbies, and relaxation'
    ],
    selfCareHindi: [
      'तनाव कम करने के लिए गहरी और धीमी सांस लेने का अभ्यास करें',
      'पोटेशियम युक्त चीजें जैसे केला, पालक और नारियल पानी लें',
      'रोजाना 7-8 घंटे की शांतिपूर्ण नींद लें'
    ],
    doctorWarningEnglish: [
      'Blood pressure readings exceed 180/120 mmHg (Hypertensive Crisis)',
      'Severe sudden headache with vision blurring or chest pain',
      'Numbness, tingling, or difficulty speaking'
    ],
    doctorWarningHindi: [
      'बीपी 180/120 mmHg से अधिक पहुंच जाए (आपातकालीन स्थिति)',
      'अचानक सिर में तेज दर्द, आंखों के आगे अंधेरा या सीने में दर्द',
      'चेहरे या हाथ में सुन्नपन या लड़खड़ाहट होना'
    ],
    emergencySignsEnglish: [
      'Crushing chest pressure radiating to the left arm or jaw',
      'Sudden loss of balance, vision, or speech (stroke warning)'
    ],
    emergencySignsHindi: [
      'सीने में अत्यधिक दबाव और दर्द जो बाएं हाथ या जबड़े तक जाए',
      'अचानक शरीर का संतुलन खोना या चेहरा टेढ़ा होना'
    ],
    faqEnglish: [
      {
        questionEnglish: 'Can I stop taking BP medication once my readings become normal?',
        questionHindi: 'क्या बीपी सामान्य होने पर दवा बंद की जा सकती है?',
        answerEnglish: 'No. Your readings are normal precisely because the medication is working. Stopping without medical advice will cause blood pressure to rebound dangerously.',
        answerHindi: 'नहीं। आपका बीपी दवा के कारण ही सामान्य है। दवा बंद करने से रक्तचाप फिर से तेजी से बढ़ सकता है और दिल या दिमाग को नुकसान पहुंचा सकता है।'
      }
    ],
    faqHindi: [],
    isPopular: true,
    tagsEnglish: ['blood pressure', 'hypertension', 'heart', 'circulation', 'salt'],
    tagsHindi: ['हाई बीपी', 'रक्तचाप', 'दिल', 'नमक', 'तनाव']
  },
  {
    id: 'acne',
    nameEnglish: 'Acne Vulgaris',
    nameHindi: 'मुंहासे (पिंपल्स)',
    medicalName: 'Acne Vulgaris',
    category: 'skin',
    categoryNameEnglish: 'Skin',
    categoryNameHindi: 'त्वचा संबंधी समस्याएं',
    shortDescriptionEnglish: 'A common skin condition that occurs when hair follicles become clogged with oil and dead skin cells.',
    shortDescriptionHindi: 'त्वचा की एक सामान्य स्थिति जो तब होती है जब रोमछिद्र तेल और मृत त्वचा कोशिकाओं से बंद हो जाते हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: 'Weeks to recurrent',
    typicalDurationHindi: 'सप्ताह से लंबे समय तक',
    overviewEnglish: 'Acne vulgaris is an inflammatory dermatological condition affecting the face, chest, and back. When sebaceous glands overproduce sebum, it combines with dead epidermal cells and Cutibacterium acnes bacteria to form blackheads, whiteheads, papules, and cysts.',
    overviewHindi: 'मुंहासे चेहरे, सीने और पीठ पर होने वाली एक आम त्वचा समस्या है। जब त्वचा की तैलीय ग्रंथियां ज्यादा तेल (सीबम) बनाती हैं, तो रोमछिद्र बंद हो जाते हैं और बैक्टीरिया पनपने से दाने, ब्लैकहेड्स और फुंसियां हो जाती हैं।',
    symptomsEnglish: [
      'Whiteheads (closed plugged pores) and Blackheads (open plugged pores)',
      'Small red, tender bumps (papules)',
      'Pimples with white pus at tips (pustules)',
      'Large, solid, painful lumps beneath the skin (nodules or cysts)'
    ],
    symptomsHindi: [
      'सफेद दाने (व्हाइटहेड्स) और काले दाने (ब्लैकहेड्स)',
      'चेहरे पर लाल, छूने पर दर्द करने वाली फुंसियां (पिंपल्स)',
      'मवाद (पस) वाले मुंहासे',
      'त्वचा के नीचे गहरी, सख्त और दर्दनाक गांठें'
    ],
    causesEnglish: [
      'Excess sebum (oil) production triggered by androgens',
      'Accumulation of dead skin cells blocking follicular openings',
      'Proliferation of Cutibacterium acnes bacteria causing inflammation',
      'Dietary factors (high glycemic index foods, dairy products)'
    ],
    causesHindi: [
      'हार्मोनल बदलाव के कारण त्वचा में अत्यधिक तेल बनना',
      'मृत त्वचा कोशिकाओं से रोमछिद्रों का बंद होना',
      'बैक्टीरिया का संक्रमण जिससे सूजन और पस बनता है',
      'अत्यधिक मीठा, तला-भुना भोजन या तनाव'
    ],
    riskFactorsEnglish: [
      'Adolescents and young adults undergoing hormonal shifts',
      'Polycystic ovary syndrome (PCOS) in women',
      'Using pore-clogging (comedogenic) cosmetics and heavy hair oils'
    ],
    riskFactorsHindi: [
      'किशोरावस्था और हार्मोनल परिवर्तन',
      'महिलाओं में पीसीओएस (PCOS) की समस्या',
      'अत्यधिक भारी मेकअप और तेल वाली क्रीम लगाना'
    ],
    precautionsEnglish: [
      'Never pop, squeeze, or pick at pimples, as this causes scarring and spreading',
      'Wash face gently twice a day with a mild, non-drying cleanser',
      'Use only "non-comedogenic" and oil-free skincare products'
    ],
    precautionsHindi: [
      'मुंहासों को कभी भी दबाएं या फोड़ें नहीं, इससे चेहरे पर गड्ढे और काले दाग पड़ जाते हैं',
      'दिन में दो बार हल्के फेसवॉश से चेहरा धोएं',
      'हमेशा नॉन-कॉमेडोजेनिक (जो रोमछिद्र बंद न करे) क्रीम और सनस्क्रीन का इस्तेमाल करें'
    ],
    preventionEnglish: [
      'Keep hair clean and off the face',
      'Change pillowcases at least twice weekly',
      'Shower promptly after exercising to wash away sweat and oil'
    ],
    preventionHindi: [
      'बालों को साफ रखें और चेहरे पर न आने दें',
      'तकिए का कवर सप्ताह में दो बार बदलें',
      'पसीना आने पर तुरंत चेहरा और शरीर साफ करें'
    ],
    selfCareEnglish: [
      'Use topicals with salicylic acid or benzoyl peroxide to clear pores',
      'Apply a light aloe vera gel to calm surface redness and inflammation',
      'Drink 2 liters of water daily and increase intake of fresh greens and zinc'
    ],
    selfCareHindi: [
      'सैलिसिलिक एसिड या बेंजॉयल पेरोक्साइड युक्त जेल का हल्का उपयोग करें',
      'त्वचा की लाली और जलन कम करने के लिए शुद्ध एलोवेरा जेल लगाएं',
      'भरपूर पानी पिएं और ताजे फल व हरी सब्जियां खाएं'
    ],
    doctorWarningEnglish: [
      'Deep, painful, boiling cystic lesions developing under the skin',
      'Sudden severe acne accompanied by facial hair growth or irregular menses in women',
      'Significant permanent skin pitting or dark scarring'
    ],
    doctorWarningHindi: [
      'त्वचा के नीचे बड़ी, दर्दनाक और मवाद भरी गांठें बनना',
      'मुंहासों के साथ महिलाओं में चेहरे पर अनचाहे बाल या अनियमित माहवारी होना',
      'चेहरे पर गहरे गड्ढे या स्थायी निशान पड़ने लगना'
    ],
    emergencySignsEnglish: [
      'Rapidly spreading facial redness, heat, and high fever indicating cellulitis'
    ],
    emergencySignsHindi: [
      'चेहरे पर तेजी से फैलती लाली, सूजन और तेज बुखार'
    ],
    faqEnglish: [
      {
        questionEnglish: 'Does chocolate cause acne?',
        questionHindi: 'क्या चॉकलेट खाने से मुंहासे होते हैं?',
        answerEnglish: 'Pure cocoa does not cause acne. However, sugary milk chocolate has a high glycemic index, which spikes insulin and stimulates sebum production, potentially aggravating breakouts.',
        answerHindi: 'शुद्ध कोको से मुंहासे नहीं होते, लेकिन बहुत ज्यादा चीनी और दूध वाली चॉकलेट ब्लड शुगर बढ़ाती है, जिससे त्वचा में तेल का उत्पादन बढ़ सकता है।'
      }
    ],
    faqHindi: [],
    isPopular: false,
    tagsEnglish: ['acne', 'pimples', 'skin', 'pores', 'blackheads'],
    tagsHindi: ['मुंहासे', 'पिंपल्स', 'त्वचा', 'फुंसी', 'दाग']
  },
  {
    id: 'eczema',
    nameEnglish: 'Eczema',
    nameHindi: 'एक्जिमा (खाज-खुजली)',
    medicalName: 'Atopic Dermatitis',
    category: 'skin',
    categoryNameEnglish: 'Skin',
    categoryNameHindi: 'त्वचा संबंधी समस्याएं',
    shortDescriptionEnglish: 'A condition causing dry, intensely itchy, inflamed, and red patches on the skin.',
    shortDescriptionHindi: 'त्वचा का एक रोग जिसमें त्वचा बहुत सूखी, लाल और अत्यधिक खुजली वाली हो जाती है।',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    contagious: false,
    typicalDurationEnglish: 'Chronic flare-ups',
    typicalDurationHindi: 'दीर्घकालिक (रुक-रुक कर उभरने वाला)',
    overviewEnglish: 'Eczema is a chronic inflammatory skin condition characterized by an impaired skin barrier that loses moisture and permits irritants and allergens to penetrate. It results in dry, leathery, intensely itchy red patches.',
    overviewHindi: 'एक्जिमा एक त्वचा विकार है जिसमें त्वचा की सुरक्षात्मक परत कमजोर हो जाती है, जिससे त्वचा की नमी खत्म हो जाती है और उसमें तेज खुजली, सूखापन और लाल चकत्ते पड़ जाते हैं।',
    symptomsEnglish: [
      'Dry, cracked, sensitive, and peeling skin',
      'Intense, unrelenting itching, especially at night',
      'Red to brownish-gray patches on hands, feet, ankles, wrists, and neck',
      'Small, raised bumps that may leak clear fluid when scratched'
    ],
    symptomsHindi: [
      'त्वचा का अत्यधिक सूखा, फटा और पपड़ीदार होना',
      'तेज खुजली, जो रात के समय और ज्यादा बढ़ जाती है',
      'हाथ, पैर, कोहनी के अंदर और गर्दन पर लाल या भूरे चकत्ते',
      'खुजलाने पर छोटे दानों से पानी जैसा तरल निकलना'
    ],
    causesEnglish: [
      'Gene variation affecting the filaggrin protein that maintains skin barrier',
      'Immune system overreacting to minor irritants or allergens',
      'Environmental triggers: harsh soaps, wool, pet dander, dry weather'
    ],
    causesHindi: [
      'आनुवंशिक कारण जिससे त्वचा की नमी बनाए रखने वाली परत कमजोर होती है',
      'प्रतिरक्षा प्रणाली की अत्यधिक संवेदनशीलता',
      'कठोर साबुन, डिटर्जेंट, ऊनी कपड़े या अत्यधिक शुष्क मौसम'
    ],
    riskFactorsEnglish: [
      'Personal or family history of eczema, asthma, or hay fever (Atopic triad)',
      'Frequent hand washing with harsh chemical soaps',
      'Living in cold, dry climates'
    ],
    riskFactorsHindi: [
      'परिवार में एक्जिमा, दमा या एलर्जी का इतिहास',
      'तेज केमिकल वाले साबुन से बार-बार हाथ धोना',
      'बहुत ठंडे और सूखे मौसम में रहना'
    ],
    precautionsEnglish: [
      'Moisturize skin immediately within 3 minutes of stepping out of the shower',
      'Avoid scratchy wool fabrics and wear soft 100% breathable cotton',
      'Keep fingernails trimmed short and clean to prevent scratching skin breaks'
    ],
    precautionsHindi: [
      'नहाने के तुरंत 3 मिनट के भीतर त्वचा पर गाढ़ा मॉइस्चराइजर लगाएं',
      'ऊनी या चुभने वाले कपड़े सीधे त्वचा पर न पहनें, सूती कपड़े पहनें',
      'नाखून छोटे और साफ रखें ताकि खुजलाने पर त्वचा छिले नहीं'
    ],
    preventionEnglish: [
      'Take brief (under 10 minutes) lukewarm showers, avoiding hot water',
      'Use fragrance-free, hypoallergenic cleansers instead of conventional soaps',
      'Use a room humidifier during dry winter months'
    ],
    preventionHindi: [
      'गर्म पानी के बजाय गुनगुने पानी से 10 मिनट से कम समय में नहाएं',
      'खुशबूदार साबुन की जगह माइल्ड और मॉइस्चराइजिंग क्लींजर का उपयोग करें',
      'घर में नमी बनाए रखने के लिए ह्यूमिडिफायर का प्रयोग करें'
    ],
    selfCareEnglish: [
      'Apply thick ceramic-based creams or plain petroleum jelly regularly',
      'Apply cold damp compresses over itchy patches to relieve fire-like itching',
      'Use virgin coconut oil as a natural antimicrobial skin emollient'
    ],
    selfCareHindi: [
      'नारियल का तेल या गाढ़ी पेट्रोलियम जेली दिन में कई बार लगाएं',
      'खुजली शांत करने के लिए ठंडे पानी की गीली पट्टी रखें',
      'खुजली को दबाने के लिए हल्के हाथों से थपथपाएं, नाखूनों से न खरोंचें'
    ],
    doctorWarningEnglish: [
      'Skin develops yellow crusting, pus blisters, or red streaks (bacterial infection)',
      'Severe itching disrupts regular sleep and daily activities',
      'Rash spreads extensively and does not respond to moisturizers'
    ],
    doctorWarningHindi: [
      'त्वचा से पीला मवाद बहना या पपड़ी जमना (बैक्टीरियल संक्रमण का संकेत)',
      'खुजली के कारण रात को बिल्कुल नींद न आना',
      'चकत्ते पूरे शरीर पर तेजी से फैलने लगना'
    ],
    emergencySignsEnglish: [
      'Widespread painful blisters with high fever (Eczema herpeticum)'
    ],
    emergencySignsHindi: [
      'तेज बुखार के साथ पूरे शरीर पर छाले पड़ जाना'
    ],
    faqEnglish: [
      {
        questionEnglish: 'Is eczema contagious?',
        questionHindi: 'क्या एक्जिमा एक से दूसरे में फैलता है?',
        answerEnglish: 'No, eczema is completely non-contagious. You cannot catch it from another person or spread it to anyone else.',
        answerHindi: 'नहीं, एक्जिमा बिल्कुल भी संक्रामक नहीं है। यह छूने या साथ रहने से दूसरों में नहीं फैलता।'
      }
    ],
    faqHindi: [],
    isPopular: false,
    tagsEnglish: ['eczema', 'itching', 'dry skin', 'dermatitis', 'rash'],
    tagsHindi: ['एक्जिमा', 'खाज', 'खुजली', 'सूखी त्वचा', 'दाद']
  },
  {
    id: 'conjunctivitis',
    nameEnglish: 'Conjunctivitis (Pink Eye)',
    nameHindi: 'कंजक्टिवाइटिस (आंख आना)',
    medicalName: 'Acute Viral or Bacterial Conjunctivitis',
    category: 'eye',
    categoryNameEnglish: 'Eye Problems',
    categoryNameHindi: 'आंखों की समस्याएं',
    shortDescriptionEnglish: 'Inflammation of the transparent membrane that lines the eyelid and covers the white part of the eyeball.',
    shortDescriptionHindi: 'आंख के सफेद हिस्से और पलक की भीतरी परत की सूजन, जिससे आंखें लाल हो जाती हैं।',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    contagious: true,
    typicalDurationEnglish: '5 - 10 days',
    typicalDurationHindi: '5 से 10 दिन',
    overviewEnglish: 'Conjunctivitis, commonly known as pink eye, is an inflammation of the conjunctiva. Small blood vessels become visible, giving the eye a pink or reddish appearance. It is highly contagious when caused by viruses or bacteria.',
    overviewHindi: 'कंजक्टिवाइटिस (आंख आना) आंख की पारदर्शी झिल्ली की सूजन है। इससे आंख की बारीक नसें सूज जाती हैं और आंख लाल या गुलाबी दिखने लगती है। इसके साथ आंखों में जलन, पानी आना और चिपचिपा स्राव होता है।',
    symptomsEnglish: [
      'Redness in one or both eyes',
      'Itchiness, irritation, or gritty feeling like sand in the eye',
      'Discharge that forms a crust during the night, sticking eyelashes together',
      'Excessive tearing and light sensitivity'
    ],
    symptomsHindi: [
      'एक या दोनों आंखों का लाल या गुलाबी होना',
      'आंखों में खुजली, जलन या चुभन (जैसे रेत का कण चला गया हो)',
      'आंखों से चिपचिपा पानी या कीचड़ निकलना जिससे पलकें चिपक जाएं',
      'आंखों से लगातार पानी बहना और रोशनी से परेशानी'
    ],
    causesEnglish: [
      'Viruses (Adenovirus, Enterovirus - highly contagious)',
      'Bacteria (Staphylococcus, Streptococcus, Haemophilus)',
      'Allergies to pollen, pet dander, or dust mites',
      'Chemical splashes, chlorine in swimming pools'
    ],
    causesHindi: [
      'वायरल संक्रमण (एडेनोवायरस - बहुत तेजी से फैलता है)',
      'जीवाणु (बैक्टीरियल) संक्रमण',
      'धूल, परागकण या मेकअप से एलर्जी',
      'स्विमिंग पूल का क्लोरीनयुक्त पानी या धुआं'
    ],
    riskFactorsEnglish: [
      'School classrooms, daycare centers, or crowded transit',
      'Wearing contact lenses, especially overnight',
      'Sharing eye makeup, towels, or pillowcases'
    ],
    riskFactorsHindi: [
      'स्कूलों और भीड़भाड़ वाली जगहों में रहना',
      'कॉन्टैक्ट लेंस का गलत या गंदा इस्तेमाल',
      'दूसरों का तौलिया, रुमाल या आई मेकअप इस्तेमाल करना'
    ],
    precautionsEnglish: [
      'Do not touch or rub your eyes with unwashed fingers',
      'Do not wear contact lenses until the infection is completely cleared',
      'Wash your hands frequently with soap and water'
    ],
    precautionsHindi: [
      'आंखों को बार-बार गंदे हाथों से न छुएं और न रगड़ें',
      'संक्रमण ठीक होने तक कॉन्टैक्ट लेंस बिल्कुल न पहनें',
      'हाथों को दिन में कई बार साबुन से धोएं'
    ],
    preventionEnglish: [
      'Never share towels, washcloths, or eye drops with others',
      'Discard expired mascara and eye makeup products',
      'Wear swimming goggles in pools'
    ],
    preventionHindi: [
      'अपना तौलिया, तकिया या आई ड्रॉप किसी के साथ साझा न करें',
      'पुराना आई-लाइनर या मस्कारा फेंक दें',
      'स्विमिंग करते समय चश्मा (गॉगल्स) पहनें'
    ],
    selfCareEnglish: [
      'Apply a cool or warm damp cotton compress gently over closed eyelids',
      'Clean dried crust from eyelids with clean boiled-and-cooled water',
      'Use preservative-free artificial tear drops to soothe dryness'
    ],
    selfCareHindi: [
      'आंखें बंद करके साफ रुई से ठंडे या गुनगुने पानी की सिकाई करें',
      'आंखों पर जमी पपड़ी को उबले और ठंडे किए पानी से साफ करें',
      'आंखों में जलन शांत करने के लिए लुब्रिकेटिंग आई ड्रॉप डालें'
    ],
    doctorWarningEnglish: [
      'Moderate to severe eye pain or vision impairment',
      'Intense sensitivity to light where eyes cannot be opened',
      'Symptoms worsening after 5 days of home care'
    ],
    doctorWarningHindi: [
      'आंख में असहनीय दर्द होना या धुंधला दिखाई देना',
      'रोशनी में आंख बिल्कुल न खोल पाना',
      '5 दिनों के बाद भी आंख की लाली और कीचड़ कम न होना'
    ],
    emergencySignsEnglish: [
      'Severe deep eye pain with headache and vomiting',
      'Sudden loss of sight'
    ],
    emergencySignsHindi: [
      'आंख में भयानक दर्द के साथ सिरदर्द और उल्टी',
      'अचानक दिखना बंद हो जाना'
    ],
    faqEnglish: [
      {
        questionEnglish: 'Can pink eye spread by just looking at an infected person?',
        questionHindi: 'क्या सिर्फ देखने से आंख आना की बीमारी फैल सकती है?',
        answerEnglish: 'No, this is a common myth. Pink eye spreads through physical contact with infected eye fluids—such as touching an eye and then touching a surface, or sharing towels.',
        answerHindi: 'नहीं, यह केवल एक भ्रम है। यह बीमारी केवल संक्रमित व्यक्ति की आंखों से निकले पानी या हाथों के संपर्क से फैलती है, सिर्फ देखने से नहीं।'
      }
    ],
    faqHindi: [],
    isPopular: false,
    tagsEnglish: ['conjunctivitis', 'pink eye', 'eyes', 'redness', 'infection'],
    tagsHindi: ['आंख आना', 'कंजक्टिवाइटिस', 'आंखें लाल होना', 'आंख में दर्द', 'कीचड़']
  }
];
