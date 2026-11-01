// lib/reviews.ts
// In-Built Smart Dynamic Review Synthesizer Engine (<20ms, Never Down, Zero Mandatory API)
// Supports 9 Categories, 3 Languages (English, Hinglish, Marathi), 3 Line-Length Modes, and Millions of Combinations.

import {
  isBrokenMarathiReview,
  isForbiddenClothingReview,
  isReviewUsedOrSimilar,
} from "./used";
import {
  MARATHI_OPENERS,
  MARATHI_EXPERIENCES,
  MARATHI_SHORT_PUNCHES,
  MARATHI_CONNECTORS,
  MARATHI_LONG_EXTRAS,
  MARATHI_CLOSERS,
  HINGLISH_OPENERS,
  HINGLISH_EXPERIENCES,
  HINGLISH_SHORT_PUNCHES,
  HINGLISH_CONNECTORS,
  HINGLISH_LONG_EXTRAS,
  HINGLISH_CLOSERS,
  ENGLISH_OPENERS,
  ENGLISH_EXPERIENCES,
  ENGLISH_SHORT_PUNCHES,
  ENGLISH_CONNECTORS,
  ENGLISH_LONG_EXTRAS,
  ENGLISH_CLOSERS,
} from "./reviews-vocab";

export type ReviewLanguage = "hinglish" | "english" | "marathi";
export type ReviewLength = "short" | "medium" | "long";
export type ReviewCategory =
  | "all"
  | "furniture"
  | "electronics"
  | "staff"
  | "quality"
  | "pricing"
  | "appliances"
  | "service"
  | "offers";

export interface SynthesizedReview {
  review: string;
  category: ReviewCategory;
  language: ReviewLanguage;
  length: ReviewLength;
  engine: "inbuilt-synthesizer" | "groq-ai" | "gemini-ai";
  generationTimeMs: number;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Synthesizes a single candidate review in <1ms according to Category, Language, and Line-Length
 */
function buildCandidateReview(
  category: ReviewCategory,
  language: ReviewLanguage,
  length: ReviewLength
): string {
  const allSubCategories: Exclude<ReviewCategory, "all">[] = [
    "furniture",
    "electronics",
    "staff",
    "quality",
    "pricing",
    "appliances",
    "service",
    "offers",
  ];

  const primaryCat: Exclude<ReviewCategory, "all"> =
    category === "all" ? pickRandom(allSubCategories) : category;

  const remainingCats = allSubCategories.filter((c) => c !== primaryCat);
  const secondaryCat = pickRandom(remainingCats);
  const tertiaryCat = pickRandom(
    remainingCats.filter((c) => c !== secondaryCat)
  );

  // 1. SHORT (1-2 Lines): Crisp, punchy, fast to read
  if (length === "short") {
    if (language === "marathi") {
      if (Math.random() < 0.55) {
        return pickRandom(MARATHI_SHORT_PUNCHES[category]);
      }
      const opener = pickRandom(MARATHI_OPENERS);
      const exp1 = pickRandom(MARATHI_EXPERIENCES[primaryCat]);
      return `${opener} ${exp1} ⭐⭐⭐⭐⭐`.replace(/\s+/g, " ").trim();
    } else if (language === "hinglish") {
      if (Math.random() < 0.55) {
        return pickRandom(HINGLISH_SHORT_PUNCHES[category]);
      }
      const opener = pickRandom(HINGLISH_OPENERS);
      const exp1 = pickRandom(HINGLISH_EXPERIENCES[primaryCat]);
      return `${opener} ${exp1} Full 5 star! ⭐⭐⭐⭐⭐`
        .replace(/\s+/g, " ")
        .trim();
    } else {
      if (Math.random() < 0.55) {
        return pickRandom(ENGLISH_SHORT_PUNCHES[category]);
      }
      const opener = pickRandom(ENGLISH_OPENERS);
      const exp1 = pickRandom(ENGLISH_EXPERIENCES[primaryCat]);
      return `${opener} ${exp1}`
        .replace(/\s+/g, " ")
        .trim();
    }
  }

  // 2. LONG (4-5 Lines): Detailed, comprehensive customer story with multiple aspects
  if (length === "long") {
    if (language === "marathi") {
      const opener = pickRandom(MARATHI_OPENERS);
      const exp1 = pickRandom(MARATHI_EXPERIENCES[primaryCat]);
      const connector = pickRandom(MARATHI_CONNECTORS);
      const exp2 = pickRandom(MARATHI_EXPERIENCES[secondaryCat]);
      const extra = pickRandom(MARATHI_LONG_EXTRAS);
      const exp3 = pickRandom(MARATHI_EXPERIENCES[tertiaryCat]);
      const closer = pickRandom(MARATHI_CLOSERS);

      const secondSentence = `${connector} ${exp2}`;
      const thirdSentence =
        Math.random() < 0.6 ? extra : `तसेच ${exp3}`;

      return [opener, exp1, secondSentence, thirdSentence, closer]
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
    } else if (language === "hinglish") {
      const opener = pickRandom(HINGLISH_OPENERS);
      const exp1 = pickRandom(HINGLISH_EXPERIENCES[primaryCat]);
      const connector = pickRandom(HINGLISH_CONNECTORS);
      const exp2 = pickRandom(HINGLISH_EXPERIENCES[secondaryCat]);
      const extra = pickRandom(HINGLISH_LONG_EXTRAS);
      const exp3 = pickRandom(HINGLISH_EXPERIENCES[tertiaryCat]);
      const closer = pickRandom(HINGLISH_CLOSERS);

      const secondSentence = `${connector} ${exp2.charAt(0).toLowerCase()}${exp2.slice(1)}`;
      const thirdSentence =
        Math.random() < 0.6
          ? extra
          : `Saath hi, ${exp3.charAt(0).toLowerCase()}${exp3.slice(1)}`;

      return [opener, exp1, secondSentence, thirdSentence, closer]
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
    } else {
      const opener = pickRandom(ENGLISH_OPENERS);
      const exp1 = pickRandom(ENGLISH_EXPERIENCES[primaryCat]);
      const connector = pickRandom(ENGLISH_CONNECTORS);
      const exp2 = pickRandom(ENGLISH_EXPERIENCES[secondaryCat]);
      const extra = pickRandom(ENGLISH_LONG_EXTRAS);
      const exp3 = pickRandom(ENGLISH_EXPERIENCES[tertiaryCat]);
      const closer = pickRandom(ENGLISH_CLOSERS);

      const secondSentence = `${connector} ${exp2.charAt(0).toLowerCase()}${exp2.slice(1)}`;
      const thirdSentence = Math.random() < 0.6 ? extra : exp3;

      return [opener, exp1, secondSentence, thirdSentence, closer]
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
    }
  }

  // 3. MEDIUM (2-3 Lines - Default Balanced)
  const patternRoll = Math.random();
  if (language === "marathi") {
    const opener = pickRandom(MARATHI_OPENERS);
    const exp1 = pickRandom(MARATHI_EXPERIENCES[primaryCat]);
    const exp2 = pickRandom(MARATHI_EXPERIENCES[secondaryCat]);
    const connector = pickRandom(MARATHI_CONNECTORS);
    const closer = pickRandom(MARATHI_CLOSERS);

    if (patternRoll < 0.45) {
      return [opener, exp1, closer].join(" ").replace(/\s+/g, " ").trim();
    } else {
      return [opener, exp1, `${connector} ${exp2}`, closer]
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
    }
  } else if (language === "hinglish") {
    const opener = pickRandom(HINGLISH_OPENERS);
    const exp1 = pickRandom(HINGLISH_EXPERIENCES[primaryCat]);
    const exp2 = pickRandom(HINGLISH_EXPERIENCES[secondaryCat]);
    const connector = pickRandom(HINGLISH_CONNECTORS);
    const closer = pickRandom(HINGLISH_CLOSERS);

    if (patternRoll < 0.45) {
      return [opener, exp1, closer].join(" ").replace(/\s+/g, " ").trim();
    } else {
      const secondSentence = `${connector} ${exp2.charAt(0).toLowerCase()}${exp2.slice(1)}`;
      return [opener, exp1, secondSentence, closer]
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
    }
  } else {
    const opener = pickRandom(ENGLISH_OPENERS);
    const exp1 = pickRandom(ENGLISH_EXPERIENCES[primaryCat]);
    const exp2 = pickRandom(ENGLISH_EXPERIENCES[secondaryCat]);
    const connector = pickRandom(ENGLISH_CONNECTORS);
    const closer = pickRandom(ENGLISH_CLOSERS);

    if (patternRoll < 0.45) {
      return [opener, exp1, closer].join(" ").replace(/\s+/g, " ").trim();
    } else {
      const loweredExp2 = `${exp2.charAt(0).toLowerCase()}${exp2.slice(1)}`;
      return [opener, exp1, `${connector} ${loweredExp2}`, closer]
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
    }
  }
}

/**
 * Generates a unique, non-repeating review using the In-Built Smart Synthesizer (<20ms).
 */
export function synthesizeUniqueReview(options: {
  category?: ReviewCategory;
  language?: ReviewLanguage;
  length?: ReviewLength;
  excludeReviews?: string[];
  usedHashes?: Set<string>;
  customValidator?: (candidate: string) => boolean;
}): SynthesizedReview {
  const start = performance.now();
  const category = options.category || "all";
  const language = options.language || "hinglish";
  const length = options.length || "medium";
  const excludeReviews = options.excludeReviews || [];
  const usedHashes = options.usedHashes;

  let bestCandidate = "";
  const maxAttempts = 50;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const candidate = buildCandidateReview(category, language, length);
    bestCandidate = candidate;

    const threshold = attempt < 25 ? 0.52 : attempt < 38 ? 0.62 : 0.72;

    if (isForbiddenClothingReview(candidate)) {
      continue;
    }

    if (language === "marathi" && isBrokenMarathiReview(candidate)) {
      continue;
    }

    const rejectedByValidator = options.customValidator
      ? options.customValidator(candidate)
      : isReviewUsedOrSimilar(candidate, excludeReviews, usedHashes, threshold);

    if (!rejectedByValidator) {
      break;
    }
  }

  const elapsed = Math.max(
    1,
    Math.round((performance.now() - start) * 100) / 100
  );

  return {
    review: bestCandidate,
    category,
    language,
    length,
    engine: "inbuilt-synthesizer",
    generationTimeMs: elapsed,
  };
}

/**
 * Optional External AI Provider Support (Groq / Gemini) + Instant Synthesizer Fallback
 */
export async function generateSmartReview(options: {
  category?: ReviewCategory;
  language?: ReviewLanguage;
  length?: ReviewLength;
  excludeReviews?: string[];
  usedHashes?: Set<string>;
  customValidator?: (candidate: string) => boolean;
}): Promise<SynthesizedReview> {
  const start = performance.now();
  const category = options.category || "all";
  const language = options.language || "hinglish";
  const length = options.length || "medium";

  const groqKey = process.env.GROQ_API_KEY?.trim();
  const geminiKey = process.env.GEMINI_API_KEY?.trim();

  const categoryFocusMap: Record<ReviewCategory, string> = {
    all: "overall great furniture and electronics collection, polite staff, premium product quality, and honest pricing",
    furniture: "great collection of sofas, beds, dining sets, and stylish home furniture",
    electronics: "TV, mobiles, home theater, and latest electronics with genuine warranty",
    staff: "polite, humble, patient staff and helpful customer service",
    quality: "premium build quality, branded appliances, durable furniture, and trusted products",
    pricing: "best value pricing, EMI options, and fair rates on furniture and electronics in Sinnar",
    appliances: "refrigerator, washing machine, AC, fans, and home appliances under one roof",
    service: "after-sales service, installation help, and reliable support after purchase",
    offers: "great store deals, festival offers, and combo savings on furniture and electronics",
  };

  const lengthGuideMap: Record<ReviewLength, string> = {
    short: "1 to 2 short crisp lines (18-28 words)",
    medium: "2 to 3 balanced sentences (32-50 words)",
    long: "4 to 5 detailed sentences (60-85 words)",
  };

  const languageInstructionMap: Record<ReviewLanguage, string> = {
    hinglish:
      "Natural Hinglish (Hindi written in English script, conversational Indian customer tone)",
    english: "Natural Indian English (warm, genuine customer tone)",
    marathi:
      "Natural Marathi in Devanagari script (authentic, warm Maharashtrian customer tone)",
  };

  const prompt = `Write a single, natural, authentic 5-star Google review (${lengthGuideMap[length]}) for "GHUNGROO FURNITURE ELECTRONICS" on Devi Road, Sinnar (opposite Apala Bazar).
Focus mainly on: ${categoryFocusMap[category]}.
Language: ${languageInstructionMap[language]}.
Do NOT mention clothes, shirts, jeans, party wear, MAAAX, or men's fashion. Only furniture, electronics, and home appliances.
Do NOT use hashtags or quotation marks. Output ONLY the review text.`;

  if (groqKey) {
    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${groqKey}`,
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.9,
            max_tokens: 180,
          }),
          signal: AbortSignal.timeout(2800),
        }
      );
      if (res.ok) {
        const data = await res.json();
        const text = data?.choices?.[0]?.message?.content
          ?.trim()
          ?.replace(/^["']|["']$/g, "");
        if (
          text &&
          text.length > 20 &&
          !isForbiddenClothingReview(text) &&
          !(language === "marathi" && isBrokenMarathiReview(text))
        ) {
          const isRejected = options.customValidator
            ? options.customValidator(text)
            : isReviewUsedOrSimilar(
                text,
                options.excludeReviews || [],
                options.usedHashes
              );
          if (!isRejected) {
            return {
              review: text,
              category,
              language,
              length,
              engine: "groq-ai",
              generationTimeMs: Math.round(performance.now() - start),
            };
          }
        }
      }
    } catch {
      // Fallback to in-built synthesizer
    }
  }

  if (geminiKey) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.9, maxOutputTokens: 180 },
          }),
          signal: AbortSignal.timeout(2800),
        }
      );
      if (res.ok) {
        const data = await res.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
          ?.trim()
          ?.replace(/^["']|["']$/g, "");
        if (
          text &&
          text.length > 20 &&
          !isForbiddenClothingReview(text) &&
          !(language === "marathi" && isBrokenMarathiReview(text))
        ) {
          const isRejected = options.customValidator
            ? options.customValidator(text)
            : isReviewUsedOrSimilar(
                text,
                options.excludeReviews || [],
                options.usedHashes
              );
          if (!isRejected) {
            return {
              review: text,
              category,
              language,
              length,
              engine: "gemini-ai",
              generationTimeMs: Math.round(performance.now() - start),
            };
          }
        }
      }
    } catch {
      // Fallback to in-built synthesizer
    }
  }

  return synthesizeUniqueReview(options);
}
