/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'media-wall' | 'ceiling' | 'wall-accent' | 'balcony-outdoor' | 'bedroom-interior';
  categoryLabel: string;
  imageSrc: string; // Will reference the specified filename
  alt: string;     // Very detailed descriptive alt tag for accessibility
  description: string;
  materials: string[];
  duration: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  iconName: 'Layout' | 'Layers' | 'Leaf' | 'Compass' | 'Sparkles' | 'Home';
  typicalCost: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  avatarColor: string;
}
