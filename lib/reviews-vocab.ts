// Ghungroo Furniture & Electronics — review phrase pools (no clothing / MAAAX content)

export type VocabReviewCategory =
  | "all"
  | "furniture"
  | "electronics"
  | "staff"
  | "quality"
  | "pricing"
  | "appliances"
  | "service"
  | "offers";

type SubCat = Exclude<VocabReviewCategory, "all">;

export const MARATHI_OPENERS = [
  "सिन्नरच्या देवी रोडवर GHUNGROO FURNITURE ELECTRONICS मध्ये आज खरेदी केली, अनुभव खूप छान होता!",
  "आपला बाजार समोर असलेले GHUNGROO FURNITURE ELECTRONICS — फर्निचर आणि इलेक्ट्रॉनिक्ससाठी उत्तम ठिकाण.",
  "मित्राने सांगितले म्हणून GHUNGROO FURNITURE ELECTRONICS ला भेट दिली, कलेक्शन पाहून मन खुश झाले.",
  "घरासाठी सोफा, बेड आणि एलईडी टीवी घ्यायला GHUNGROO FURNITURE ELECTRONICS मध्ये गेलो होतो,",
  "नवीन फ्रिज आणि वॉशिंग मशीन साठी सिन्नरमध्ये GHUNGROO FURNITURE ELECTRONICS ही माझी पहिली निवड.",
  "कुटुंबासोबत GHUNGROO FURNITURE ELECTRONICS मध्ये शॉपिंग केली, सर्व सामान एकाच छताखाली मिळाले.",
  "GHUNGROO FURNITURE ELECTRONICS मध्ये पाऊल ठेवताच मोठ्या मॉलसारखी प्रीमियम शोरूमची वाट येते.",
  "EMI आणि चांगल्या ऑफरसाठी GHUNGROO FURNITURE ELECTRONICS ला नक्की भेट द्या.",
];

export const MARATHI_EXPERIENCES: Record<SubCat, string[]> = {
  furniture: [
    "सोफा सेट, बेड, डायनिंग टेबल आणि अलमारी यांचे नवीन डिझाइन्स आणि रंगांचे पर्याय खूप मोठे आहेत.",
    "फर्निचरची गुणवत्ता आणि फिनिशिंग घरात लगेच प्रीमियम लुक देतात.",
    "लिव्हिंग रूमसाठी सोफा आणि टीवी युनिट एकाच जागी मिळाल्याने वेळ आणि पैसे दोन्ही वाचले.",
  ],
  electronics: [
    "एलईडी टीवी, स्मार्ट फोन, होम थिएटर आणि गॅजेट्सचा ब्रँडेड स्टॉक उपलब्ध आहे.",
    "इलेक्ट्रॉनिक्सचा डेमो पाहून योग्य मॉडेल निवडण्यासाठी कर्मचार्‍यांनी चांगली मदत केली.",
    "मोबाइल अ‍ॅक्सेसरीजपासून ते मोठ्या स्क्रीनच्या टीवी पर्यंत सर्व काही मिळते.",
  ],
  staff: [
    "कर्मचारी अतिशय विनम्र, संयमी आणि उत्पादन समजून सांगतात.",
    "कोणत्या ब्रँडचा टीवी किंवा फ्रिज घ्यावा हे स्पष्टपणे समजावून सांगण्यात ते तज्ञ आहेत.",
    "ग्राहक प्रथम या भावनेत इथे खरोखरच जाणवते, कोणत्याही प्रश्नाला उत्तर मिळते.",
  ],
  quality: [
    "ब्रँडेड उपकरणे आणि टिकाऊ फर्निचर — गुणवत्तेत तडजोड नाही.",
    "वारंटी आणि खरे उत्पादन मिळण्याची खात्री कर्मचारी देतात.",
    "सामान उघडल्यावर फिनिश आणि बिल्ड क्वालिटी लगेच समजते.",
  ],
  pricing: [
    "बाजारपेक्षा योग्य दर आणि ईएमआय पर्यायामुळे अर्थसंकल्पात मोठी खरेदी झाली.",
    "फर्निचर आणि इलेक्ट्रॉनिक्स दोन्हीसाठी पारदर्शक किंमत, लपवलेले शुल्क नाही.",
    "सण-ऑफरमुळे टीवी आणि फ्रिज एकत्र घेतल्यावर खूप बचत झाली.",
  ],
  appliances: [
    "फ्रिज, वॉशिंग मशीन, एसी आणि पंखा — सर्व गृहोपयोगी उपकरणे एकाच दुकानात.",
    "एलजी, सॅमसंग सारख्या विश्वासार्ह ब्रँडचे मॉडेल्स तुलना करून घेतले.",
    "स्वयंपाकघर आणि कपडे धुण्यासाठी उपकरणे बसवण्याची माहितीही मिळाली.",
  ],
  service: [
    "डिलिव्हरी आणि बसवण्याची व्यवस्था करण्यात पूर्ण मदत, विक्रीनंतरचे समर्थन चांगले.",
    "खरेदीनंतर समस्या आल्यास कर्मचारी प्रतिसाद देतात आणि मदत करतात.",
    "वारंटी आणि सेवा केंद्राबाबत स्पष्ट मार्गदर्शन मिळाले.",
  ],
  offers: [
    "हंगामी सवलत, जोड ऑफर आणि वित्तीय योजना — ग्राहकाला फायदा.",
    "टीवी आणि होम थिएटर पॅकेजवर आकर्षक डील मिळाली.",
    "फर्निचर आणि इलेक्ट्रॉनिक्स एकत्र घेतल्यावर अतिरिक्त फायदा मिळतो.",
  ],
};

export const MARATHI_SHORT_PUNCHES: Record<VocabReviewCategory, string[]> = {
  all: [
    "GHUNGROO FURNITURE ELECTRONICS — सिन्नरमध्ये फर्निचर, इलेक्ट्रॉनिक्स आणि उपकरणांसाठी उत्तम! कर्मचारी 10/10. ⭐⭐⭐⭐⭐",
    "देवी रोड, आपला बाजार जवळ — एकाच छताखाली सोफा, टीवी, फ्रिज, वॉशिंग मशीन. नक्की भेट द्या!",
  ],
  furniture: [
    "सोफा, बेड, डायनिंग — GHUNGROO FURNITURE ELECTRONICS मध्ये स्टाइलिश फर्निचर आणि योग्य किंमत! ⭐⭐⭐⭐⭐",
  ],
  electronics: [
    "एलईडी टीवी, मोबाइल, होम थिएटर — नवीन इलेक्ट्रॉनिक्स वास्तविक वारंटीसह! ⭐⭐⭐⭐⭐",
  ],
  staff: [
    "कर्मचारी विनम्र आणि ज्ञानी — उत्पादन निवडण्यात पूर्ण मदत. 10/10 सेवा! ⭐⭐⭐⭐⭐",
  ],
  quality: [
    "ब्रँडेड गुणवत्ता फर्निचर आणि उपकरणे — टिकाऊ, विश्वासार्ह उत्पादने! ⭐⭐⭐⭐⭐",
  ],
  pricing: [
    "ईएमआय आणि प्रामाणिक दर — सिन्नरमध्ये सर्वोत्तम किंमती! ⭐⭐⭐⭐⭐",
  ],
  appliances: [
    "फ्रिज, वॉशिंग मशीन, एसी, पंखा — सर्व गृहोपयोगी उपकरणे एकाच छताखाली! ⭐⭐⭐⭐⭐",
  ],
  service: [
    "डिलिव्हरी, बसवणे, विक्रीनंतर — GHUNGROO संघ विश्वासार्ह समर्थन देतो! ⭐⭐⭐⭐⭐",
  ],
  offers: [
    "सणाचे ऑफर आणि जोड डील — फर्निचर आणि इलेक्ट्रॉनिक्सवर चांगली बचत! ⭐⭐⭐⭐⭐",
  ],
};

export const MARATHI_CONNECTORS = [
  "याशिवाय,",
  "तसेच,",
  "आणि सर्वात महत्त्वाचे म्हणजे",
  "विशेष म्हणजे",
];

export const MARATHI_LONG_EXTRAS = [
  "शोरूम मोकळा आहे, डिस्प्ले युनिट्स पाहून उत्पादन समजणे सोपे जाते.",
  "देवी रोड, आपला बाजार समोर — स्थानही सोयीचे आहे.",
  "ईएमआय पर्यायामुळे मध्यम वर्गाच्या कुटुंबासाठीही मोठी खरेदी शक्य.",
];

export const MARATHI_CLOSERS = [
  "तुम्हीही एकदा GHUNGROO FURNITURE ELECTRONICS ला नक्की भेट द्या. 5 तारे! ⭐⭐⭐⭐⭐",
  "पैसे पूर्ण वसूल — कुटुंबालाही इथे खरेदी करायला सांगेन.",
  "सिन्नरमध्ये फर्निचर आणि इलेक्ट्रॉनिक्ससाठी हे माझे विश्वासार्ह दुकान!",
];

export const HINGLISH_OPENERS = [
  "Aaj GHUNGROO FURNITURE ELECTRONICS Sinnar me gaya, Devi Road pe Apala Bazar ke samne — experience shandaar raha.",
  "Ghar ke liye sofa set aur LED TV lene GHUNGROO FURNITURE ELECTRONICS choose kiya,",
  "Dost ne recommend kiya toh GHUNGROO FURNITURE ELECTRONICS visit kiya, collection dekh ke trust ho gaya.",
  "Fridge, washing machine aur AC ek hi jagah chahiye tha, isliye GHUNGROO FURNITURE ELECTRONICS aaye,",
  "Pehli baar GHUNGROO FURNITURE ELECTRONICS se furniture liya aur quality se impress ho gaya.",
  "Family ke saath GHUNGROO FURNITURE ELECTRONICS me shopping ki — electronics aur furniture dono mil gaye.",
  "EMI option aur genuine brands ke liye Sinnar me GHUNGROO FURNITURE ELECTRONICS best hai.",
  "Home theater aur TV demo dekh kar GHUNGROO FURNITURE ELECTRONICS se purchase finalize kiya.",
];

export const HINGLISH_EXPERIENCES: Record<SubCat, string[]> = {
  furniture: [
    "yahan sofa, bed, dining table aur wardrobe ka collection modern aur durable hai.",
    "furniture ka finish aur material dekh kar hi samajh aata hai ki long-lasting milega.",
    "living room ke liye sofa aur TV unit dono yahin se liye, matching options bhi the.",
    "bedroom furniture ke designs aur sizes dono acchi variety me available hain.",
  ],
  electronics: [
    "LED TV, smart phone, sound system aur gadgets — branded stock milta hai.",
    "electronics ka demo aur comparison staff ne patiently samjhaya, right model choose ho gaya.",
    "mobile accessories se lekar big screen TV tak sab kuch ek roof ke neeche.",
  ],
  staff: [
    "staff bahut polite aur helpful hai, product features clearly explain karte hain.",
    "TV, fridge ya washing machine — kis brand me kya fayda hai, ye bhi batate hain.",
    "ग्राहक प्रथम या भावनेत इथे खरोखरच जाणवते, कोणत्याही प्रश्नाला उत्तर मिळते.",
    "staff achha ho toh furniture aur electronics shopping ka maza double ho jata hai — GHUNGROO ki team sach me 10/10 hai.",
  ],
  quality: [
    "branded appliances aur strong furniture — quality pe compromise nahi dikha.",
    "warranty aur genuine product ki guarantee milne se mind relax rehta hai.",
    "samān unpack karte hi build quality aur finishing premium lagti hai.",
  ],
  pricing: [
    "rate market se fair hain aur EMI se budget me badi shopping ho gayi.",
    "furniture aur electronics dono ke liye clear pricing, koi hidden charge nahi.",
    "festival offer me TV aur fridge par achhi saving mili, paisa vasool laga.",
  ],
  appliances: [
    "fridge, washing machine, AC, cooler, fan — poora home appliances section strong hai.",
    "trusted brands ke models compare karke best deal li.",
    "kitchen aur laundry appliances ke liye installation info bhi clear mili.",
  ],
  service: [
    "delivery aur installation arrange karne me full support, after-sales bhi responsive.",
    "purchase ke baad query pe staff jaldi help karta hai.",
    "warranty aur service center ke baare me proper guidance di.",
  ],
  offers: [
    "seasonal discount, combo pack aur finance scheme — customer ke favour me offers.",
    "TV + home theater package par attractive deal mila.",
    "furniture aur electronics saath me lene par extra benefit mila.",
  ],
};

export const HINGLISH_SHORT_PUNCHES: Record<VocabReviewCategory, string[]> = {
  all: [
    "GHUNGROO FURNITURE ELECTRONICS Sinnar me furniture, TV, fridge, washing machine — sab kuch ek jagah! Staff 10/10. ⭐⭐⭐⭐⭐",
    "Devi Road pe best electronics & furniture shop! Genuine products, fair price, EMI available. Must visit!",
  ],
  furniture: [
    "Sofa, bed, dining — GHUNGROO FURNITURE ELECTRONICS me stylish furniture aur solid quality! ⭐⭐⭐⭐⭐",
  ],
  electronics: [
    "LED TV, mobile, home theater — latest electronics with proper warranty at GHUNGROO! ⭐⭐⭐⭐⭐",
  ],
  staff: [
    "Staff bahut polite aur knowledgeable! Product choose karne me poori help. 10/10! ⭐⭐⭐⭐⭐",
  ],
  quality: [
    "Branded appliances aur durable furniture — quality ek number! ⭐⭐⭐⭐⭐",
  ],
  pricing: [
    "Honest rates aur EMI — Sinnar me electronics & furniture ke liye best value! ⭐⭐⭐⭐⭐",
  ],
  appliances: [
    "Fridge, washing machine, AC, fans — complete home appliances ek hi shop me! ⭐⭐⭐⭐⭐",
  ],
  service: [
    "Delivery, installation, after-sales — GHUNGROO team reliable hai! ⭐⭐⭐⭐⭐",
  ],
  offers: [
    "Festival offers aur combo deals — furniture + electronics pe smart savings! ⭐⭐⭐⭐⭐",
  ],
};

export const HINGLISH_CONNECTORS = [
  "Iske alawa,",
  "Saath hi,",
  "Aur sabse acchi baat ye ki",
  "Sach kahu toh",
  "Plus point ye hai ki",
];

export const HINGLISH_LONG_EXTRAS = [
  "Showroom spacious hai, display dekh kar product samajhna easy hai.",
  "Location Devi Road, Apala Bazar ke samne — aana jaana bhi convenient hai.",
  "Finance/EMI option se middle-class budget me bhi pura ghar set ho jata hai.",
];

export const HINGLISH_CLOSERS = [
  "Sabko GHUNGROO FURNITURE ELECTRONICS ek baar zaroor visit karna chahiye. Full 5 star! ⭐⭐⭐⭐⭐",
  "Paisa vasool shopping — main apne relatives ko bhi yahi recommend karunga.",
  "Ab ghar ke furniture aur electronics ke liye Sinnar me yahi mera fixed shop hai!",
  "100% satisfied! Thank you GHUNGROO team for genuine products aur achhi service.",
];

export const ENGLISH_OPENERS = [
  "Just shopped at GHUNGROO FURNITURE ELECTRONICS on Devi Road, Sinnar — great experience!",
  "Visited GHUNGROO FURNITURE ELECTRONICS for a new sofa and LED TV and loved the collection.",
  "If you need furniture and home appliances in Sinnar, GHUNGROO FURNITURE ELECTRONICS is the place.",
  "Bought a refrigerator and washing machine from GHUNGROO FURNITURE ELECTRONICS this week.",
  "Family shopping trip to GHUNGROO FURNITURE ELECTRONICS — electronics and furniture under one roof.",
  "First visit to GHUNGROO FURNITURE ELECTRONICS and I am already planning my next purchase.",
  "Genuine brands, EMI options, and polite staff — GHUNGROO FURNITURE ELECTRONICS impressed me.",
];

export const ENGLISH_EXPERIENCES: Record<SubCat, string[]> = {
  furniture: [
    "Their sofa sets, beds, and dining furniture look modern and feel sturdy.",
    "Good variety of designs and sizes for every room in the house.",
    "Picked living room furniture here and the finish quality is excellent.",
  ],
  electronics: [
    "LED TVs, mobiles, home theater, and gadgets — strong branded lineup.",
    "Staff helped compare models and choose the right electronics for our budget.",
    "From small accessories to large appliances, everything is available in one store.",
  ],
  staff: [
    "Very polite and patient team — they explain specs without rushing you.",
    "They know their products well, especially TVs, fridges, and washing machines.",
    "True customer-first service; every question was answered clearly.",
  ],
  quality: [
    "Branded appliances and solid furniture — you can trust what you buy.",
    "Genuine products with warranty gave us peace of mind.",
    "Build quality and finishing feel premium for the price paid.",
  ],
  pricing: [
    "Fair pricing with EMI/finance — big purchases became affordable.",
    "Transparent rates on furniture and electronics, no hidden charges.",
    "Festive offers on TV and appliances saved us a good amount.",
  ],
  appliances: [
    "Fridge, washing machine, AC, and fans — complete home appliances section.",
    "Trusted brands side by side, easy to compare before buying.",
    "Helpful advice on kitchen and laundry appliances plus installation.",
  ],
  service: [
    "Delivery and installation support was smooth; after-sales seems reliable.",
    "They stayed helpful even after we paid — good follow-up on service.",
    "Clear guidance on warranty and service centers.",
  ],
  offers: [
    "Seasonal discounts and combo deals on furniture plus electronics.",
    "Got a nice package deal on TV and home theater.",
    "Extra savings when buying multiple items together.",
  ],
};

export const ENGLISH_SHORT_PUNCHES: Record<VocabReviewCategory, string[]> = {
  all: [
    "Best furniture & electronics store in Sinnar! GHUNGROO FURNITURE ELECTRONICS — polite staff, genuine products. ⭐⭐⭐⭐⭐",
    "One-stop shop for sofa, TV, fridge, and washing machine on Devi Road. Highly recommended!",
  ],
  furniture: [
    "Lovely sofa, bed, and dining collection at GHUNGROO FURNITURE ELECTRONICS! ⭐⭐⭐⭐⭐",
  ],
  electronics: [
    "Great LED TVs, mobiles, and home theater with proper warranty! ⭐⭐⭐⭐⭐",
  ],
  staff: [
    "Super helpful and courteous staff — 10/10 customer service! ⭐⭐⭐⭐⭐",
  ],
  quality: [
    "Premium branded appliances and durable furniture — top quality! ⭐⭐⭐⭐⭐",
  ],
  pricing: [
    "Honest prices and EMI options — excellent value in Sinnar! ⭐⭐⭐⭐⭐",
  ],
  appliances: [
    "Fridge, washer, AC, fans — all home appliances under one roof! ⭐⭐⭐⭐⭐",
  ],
  service: [
    "Reliable delivery, installation, and after-sales support! ⭐⭐⭐⭐⭐",
  ],
  offers: [
    "Great festival offers and combo savings on furniture & electronics! ⭐⭐⭐⭐⭐",
  ],
};

export const ENGLISH_CONNECTORS = [
  "Moreover,",
  "On top of that,",
  "Additionally,",
  "What I also liked is that",
  "Best of all,",
];

export const ENGLISH_LONG_EXTRAS = [
  "The showroom is spacious with clear displays for every product category.",
  "Convenient location opposite Apala Bazar on Devi Road, Sinnar.",
  "Finance and EMI make it easy for families to upgrade their home in one visit.",
];

export const ENGLISH_CLOSERS = [
  "Highly recommend GHUNGROO FURNITURE ELECTRONICS for home shopping in Sinnar. Five stars! ⭐⭐⭐⭐⭐",
  "Great value, genuine products, and friendly staff — will definitely return.",
  "Our go-to store now for furniture and electronics. Thank you, GHUNGROO team!",
];
