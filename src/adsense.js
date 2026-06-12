/** AdSense publisher ID — must match index.html script + ads.txt */
export const ADSENSE_CLIENT = "ca-pub-5272521164300931";

/**
 * Create each unit in AdSense → Ads → By ad unit, then paste slot IDs here
 * or set VITE_ADSENSE_SLOT_* in .env (see .env.example).
 */
export const ADSENSE_SLOTS = {
  /** Learn + module sidebar — 300×250 or responsive vertical */
  sidebar: import.meta.env.VITE_ADSENSE_SLOT_SIDEBAR ?? "",
  /** Page-end horizontal band — learn, module, comic */
  inContent: import.meta.env.VITE_ADSENSE_SLOT_IN_CONTENT ?? "",
  /** Comic reader right rail — 300×600 half page (desktop) */
  readerHalf: import.meta.env.VITE_ADSENSE_SLOT_READER_HALF ?? "",
};

export function hasAdSlot(slotId) {
  return typeof slotId === "string" && slotId.trim().length > 0;
}