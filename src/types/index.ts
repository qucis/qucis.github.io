import React from 'react';

export interface TeamMember {
  id: number | string;
  name: string;
  position: string;
  img: string;
  bio: string;
  group?: string;
  year?: string;
}

export interface Publication {
  id: number | string;
  title: string;
  link: string;
}

export interface ShowcaseItem {
  id: string;
  date: string;
  title: string;
  shortDesc: string;
  fullDesc: React.ReactNode;
  images: string[];
  link?: string;
  linkText?: string;
}

export interface FundingSource {
  id: number;
  img: string;
  title: string;
}
