const GIFT_BOX_KEY = "oriental_gift_box_ids";

function emitGiftBoxUpdate() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("giftbox-updated"));
  }
}

export function getGiftBoxIds(): string[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(GIFT_BOX_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function setGiftBoxIds(ids: string[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(GIFT_BOX_KEY, JSON.stringify(ids));
  emitGiftBoxUpdate();
}

export function isInGiftBox(productId: string): boolean {
  return getGiftBoxIds().includes(productId);
}

export function addToGiftBox(productId: string) {
  const ids = getGiftBoxIds();
  if (!ids.includes(productId)) {
    setGiftBoxIds([...ids, productId]);
  }
}

export function removeFromGiftBox(productId: string) {
  const ids = getGiftBoxIds().filter((id) => id !== productId);
  setGiftBoxIds(ids);
}

export function clearGiftBox() {
  setGiftBoxIds([]);
}
