import React from 'react';

export interface SubSubSection {
  id: string;
  title: string;
  content: string[];
  component?: React.ComponentType;
}

export interface SubSection {
  id: string;
  title: string;
  content: string[];
  subSections?: SubSubSection[];
  component?: React.ComponentType;
}

export interface Section {
  id: string;
  title: string;
  shortTitle: string;
  type?: 'header';
  component: React.ComponentType;
  subSections: SubSection[];
}
