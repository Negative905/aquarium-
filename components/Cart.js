// lib/cart.js
// Utility functions for cart management via localStorage

export function getCart() {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem('ocean_crown_cart') || '[]')
  } catch {
    return []
  }
}

export function saveCart(items) {
  if (typeof window === 'undefined') return
  localStorage.setItem('ocean_crown_cart', JSON.stringify(items))
}

export function addToCart(product) {
  const cart = getCart()
  const existing = cart.find(item => item.id === product.id && item.source === product.source)
  let updated
  if (existing) {
    updated = cart.map(item =>
      item.id === product.id && item.source === product.source
        ? { ...item, qty: item.qty + 1 }
        : item
    )
  } else {
    updated = [...cart, { ...product, qty: 1 }]
  }
  saveCart(updated)
  // Dispatch a custom event so any listening components can react
  window.dispatchEvent(new Event('cart-updated'))
  return updated
}

export function removeFromCart(id, source) {
  const updated = getCart().filter(item => !(item.id === id && item.source === source))
  saveCart(updated)
  window.dispatchEvent(new Event('cart-updated'))
  return updated
}

export function updateQty(id, source, delta) {
  const updated = getCart()
    .map(item =>
      item.id === id && item.source === source
        ? { ...item, qty: item.qty + delta }
        : item
    )
    .filter(item => item.qty > 0)
  saveCart(updated)
  window.dispatchEvent(new Event('cart-updated'))
  return updated
}

export function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0)
}