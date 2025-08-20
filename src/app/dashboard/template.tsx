'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function Template({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: 'easeOut' }}
            className='w-full h-full'
		>
			{children}
		</motion.div>
	);
}


