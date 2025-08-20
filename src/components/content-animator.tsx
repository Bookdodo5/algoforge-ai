'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function ContentAnimator({
	children,
	delay
}: Readonly<{
	children: React.ReactNode;
	delay?: number
}>) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: 'easeOut', delay: delay || 0 }}
			className='w-full h-full'
		>
			{children}
		</motion.div>
	);
}


