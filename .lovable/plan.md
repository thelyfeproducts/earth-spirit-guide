
# Fix Valentine's Gift Guide - Empty Products Issue

## Problem Identified

The Valentine's Gift Guide and Valentine's collection page are showing empty because:

1. **Shopify API Query Syntax Issue**: The current query `title:Velvet Kiss OR title:Slow Burn...` requires exact title matches, but the actual product names include additional text like "- Infused Body Butter"
2. **Wildcard Required**: Shopify's search API needs wildcards (`*`) for partial matching

**Actual Product Names in Shopify:**
- Velvet Kiss- Infused Body Butter
- Slow Burn- Infused Body Butter  
- Vanilla Bean Infused Body Butter
- Midnight Jazz- Infused Body Butter
- Sandalwood Infused Body Butter

## Products to Include

**For Her (3 products):**
- Slow Burn
- Velvet Kiss
- Vanilla Bean

**For Him (2 products):**
- Midnight Jazz
- Sandalwood

---

## Changes Required

### 1. Fix Collection Page Query (`src/pages/CollectionPage.tsx`)

Update the valentines collection query to use wildcards:

```typescript
"valentines": {
  title: "Valentine's Day Scents",
  description: "Limited edition romantic scents crafted with love. Perfect for gifting or treating yourself.",
  query: "title:*Velvet Kiss* OR title:*Slow Burn* OR title:*Midnight Jazz* OR title:*Vanilla Bean* OR title:*Sandalwood*",
}
```

### 2. Fix Gift Guide Component (`src/components/ValentinesGiftBundles.tsx`)

The component fetches all products and filters client-side using `includes()`. This should work, but we need to ensure the matchTerms are case-insensitive and match the actual product titles. Current terms look correct, but we should also add Sandalwood to the "For Him" category.

Current matchTerms are already correct:
- **For Her**: `["slow burn", "velvet kiss", "vanilla"]`
- **For Him**: `["midnight jazz", "sandalwood"]`

The client-side filtering with `title.includes(term.toLowerCase())` should work since:
- "slow burn" is in "Slow Burn- Infused Body Butter"
- "velvet kiss" is in "Velvet Kiss- Infused Body Butter"
- etc.

However, to add robustness, we should also exclude any bundles/duos that contain these terms from the gift guide section to show only the single products.

---

## Technical Implementation

### File 1: `src/pages/CollectionPage.tsx` (Line 23-27)

Change the query to use wildcards for partial matching:

```typescript
"valentines": {
  title: "Valentine's Day Scents",
  description: "Limited edition romantic scents crafted with love. Perfect for gifting or treating yourself.",
  query: "(title:*Velvet Kiss* OR title:*Slow Burn* OR title:*Midnight Jazz* OR title:*Vanilla Bean* OR title:*Sandalwood*) NOT (title:*Bundle* OR title:*Duo* OR title:*Trio*)",
}
```

The `NOT` clause excludes bundles that might contain these terms (like "Masculine Body Butter Duo - Black Butter + Sandalwood").

### File 2: `src/components/ValentinesGiftBundles.tsx` (Lines 90-105)

Enhance the filtering logic to exclude bundles and ensure only individual Valentine's products show:

```typescript
const getFilteredProducts = () => {
  const category = giftCategories.find(c => c.id === activeCategory);
  if (!category || products.length === 0) return [];

  const matchingProducts = products.filter(p => {
    const title = p.node.title.toLowerCase();
    
    // Exclude bundles, duos, and trios
    if (title.includes('bundle') || title.includes('duo') || title.includes('trio')) {
      return false;
    }
    
    // Check if title matches any of the category terms
    return category.matchTerms.some(term => title.includes(term.toLowerCase()));
  });

  return matchingProducts.slice(0, 3);
};
```

---

## Expected Result

After these changes:

1. **Valentine's Gift Guide on Homepage**:
   - "For Her" tab shows: Slow Burn, Velvet Kiss, Vanilla Bean (body butters)
   - "For Him" tab shows: Midnight Jazz, Sandalwood (body butters)

2. **Valentine's Collection Page** (`/collections/valentines`):
   - Shows all 5 Valentine's scents as individual products
   - Excludes any bundles/duos containing these scents

---

## Summary

| Issue | Root Cause | Fix |
|-------|-----------|-----|
| Collection page empty | Shopify query needs wildcards | Change `title:Velvet Kiss` to `title:*Velvet Kiss*` |
| Gift Guide empty | Bundles may be interfering | Add filter to exclude bundles/duos/trios |
