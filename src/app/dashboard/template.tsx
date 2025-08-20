'use client';

import React from 'react';
import ContentAnimator from '@/components/content-animator';

export default function Template({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ContentAnimator>
			{children}
		</ContentAnimator>
	);
}


