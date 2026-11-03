
const isValidHttpUrl = (value) => {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value.trim());
    return ['http:', 'https:'].includes(url.protocol) && url.hostname.includes('.');
  } catch {
    return false;
  }
};

// Escapes user input before it is used inside a regex (prevents regex injection / ReDoS)
const escapeRegex = (text) => String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

module.exports = { isValidHttpUrl, escapeRegex };