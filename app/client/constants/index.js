export const HEADER_HEIGHT = '119px'

const bodyWidth = 0.75
const navWidth = 0.75 // percentage of the body width
export const NAV_WIDTH = `${navWidth * 100}%`
export const NAV_FIXED_WIDTH = `${bodyWidth * navWidth * 100}%` // different because % is calculated differently for fixed element
export const NAV_FIXED_LEFT = `${100 * (1 - (bodyWidth * navWidth)) / 2}%` // offset from left side of screen
