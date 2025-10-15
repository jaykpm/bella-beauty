// Environment detection utilities
export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';

// Feature availability based on environment
export const canWriteFiles = !isProduction && typeof window === 'undefined';
export const hasGitAccess = !isProduction;
export const enableAdmin = process.env.ENABLE_ADMIN !== 'false' && !isProduction;

// Admin panel availability
export const isAdminAvailable = () => {
  return isDevelopment || process.env.ENABLE_ADMIN === 'true';
};

// Content editing capabilities
export const canEditContent = () => {
  return !isProduction;
};

// Git operations availability
export const canUseGit = () => {
  return !isProduction && hasGitAccess;
};
