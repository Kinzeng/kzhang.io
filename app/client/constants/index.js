export const VIEWPORT_HEIGHT = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
export const HEADER_HEIGHT = '18px'

const navWidth = 1 // percentage of the body width
const navContentWidth = 0.9
export const NAV_WIDTH = `${navContentWidth * 100}%`
export const NAV_LEFT = `${100 * (1 - navWidth) / 2}%` // offset from left side of screen
export const NAV_CONTENT_PADDING = `${100 * (1 - navContentWidth) / 2}%`
