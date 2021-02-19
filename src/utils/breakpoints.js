const sizes = {
    // Small screen / phone
    sm: '576px',
    // Medium screen / tablet
    md: '768px',
    // Large screen / desktop
    lg: '992px',
    // Extra large screen / wide desktop
    xl: '1200px'
};

export const device= {
    // Small screen / phone
    sm: `(min-width: ${sizes.sm})`,
    // Medium screen / tablet
    md: `(min-width: ${sizes.md})`,
    // Large screen / desktop
    lg: `(min-width: ${sizes.lg})`,
    // Extra large screen / wide desktop
    xl: `(min-width: ${sizes.xl})`,
};