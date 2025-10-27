import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface SaveContentRequest {
  section: string;
  data: any;
}

interface SaveContentResponse {
  success: boolean;
  message: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SaveContentResponse>
) {
  // Allow content saving in production if GitHub config exists or explicitly enabled
  const hasGitHubConfig = !!(
    process.env.GITHUB_TOKEN &&
    process.env.GITHUB_OWNER &&
    process.env.GITHUB_REPO
  );

  if (process.env.NODE_ENV === 'production' &&
    process.env.ENABLE_ADMIN !== 'true' &&
    !hasGitHubConfig) {
    return res.status(403).json({
      success: false,
      message: 'Content editing disabled in production',
      error: 'Admin features are not available in production mode'
    });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
      error: 'Only POST requests are allowed'
    });
  }

  const { section, data }: SaveContentRequest = req.body;

  if (!section || !data) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields',
      error: 'Both section and data are required'
    });
  }

  try {
    // Map section names to file paths
    const sectionFileMap: Record<string, string> = {
      hero: 'public/content/hero/index.json',
      settings: 'public/content/settings/index.json',
      trustBadges: 'public/content/trust-badges/index.json',
      keyFeatures: 'public/content/key-features/index.json',
      ctaSection: 'public/content/cta-section/index.json',
      pluginsSection: 'public/content/plugins-section/index.json',
      demoShowcase: 'public/content/demo-showcase/index.json',
      crossCompatibility: 'public/content/cross-compatibility/index.json',
      refundPolicy: 'public/content/refund-policy/index.json',
      colorPalettes: 'public/content/color-palettes/index.json',
      performanceSection: 'public/content/performance/index.json',
      blocksGallery: 'public/content/blocks-gallery/index.json',
      beforeAfterSection: 'public/content/before-after/index.json',
      customizationSection: 'public/content/customization/index.json',
      postTypesSection: 'public/content/post-types/index.json',
      detailsSection: 'public/content/details-section/index.json',
      technicalSection: 'public/content/technical/index.json',
      elementorExtension: 'public/content/elementor/index.json',
      layoutsGallery: 'public/content/layouts-gallery/index.json',
      installationWizard: 'public/content/installation-wizard/index.json',
      templateBuilder: 'public/content/template-builder/index.json',
      headerVariations: 'public/content/header-variations/index.json',
      // mobileFirstSection: 'public/content/mobile-first-section/index.json',
      customizationFeaturesSection: 'public/content/customization-features-section/index.json',
    };

    const filePath = sectionFileMap[section];
    if (!filePath) {
      return res.status(400).json({
        success: false,
        message: 'Invalid section',
        error: `Section '${section}' is not supported`
      });
    }

    // Get the absolute path
    const absolutePath = path.join(process.cwd(), filePath);

    // Ensure directory exists
    const dir = path.dirname(absolutePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write the data to the file
    const jsonContent = JSON.stringify(data, null, 2);
    fs.writeFileSync(absolutePath, jsonContent, 'utf8');

    return res.status(200).json({
      success: true,
      message: `Content saved successfully to ${filePath}`,
    });

  } catch (error: any) {
    console.error('Failed to save content:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to save content',
      error: error.message || 'Unknown error occurred'
    });
  }
}
