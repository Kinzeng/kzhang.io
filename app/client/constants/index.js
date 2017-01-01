export const VIEWPORT_HEIGHT = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
export const HEADER_HEIGHT = '18px'

const navWidth = 0.90 // percentage of the body width
export const NAV_WIDTH = `${navWidth * 100}%`
export const NAV_LEFT = `${100 * (1 - navWidth) / 2}%` // offset from left side of screen
