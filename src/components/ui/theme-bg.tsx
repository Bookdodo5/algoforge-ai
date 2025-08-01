import { MotionValue, motion } from "framer-motion"

export function ThemedSection({ children, light, dark, className, parallaxY }:{
        children: React.ReactNode,
        light: string,
        dark: string,
        className?: string,
        parallaxY?: MotionValue,
    }) {
    return (
        <>
            <section className={`dark:hidden ${className} relative overflow-hidden`}>
                {/* Light theme background with parallax */}
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url(${light})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        y: parallaxY || 0,
                    }}
                />
                <div className="relative z-10">
                    {children}
                </div>
            </section>
            
            <section className={`hidden dark:block ${className} relative overflow-hidden`}>
                {/* Dark theme background with parallax */}
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url(${dark})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        y: parallaxY || 0,
                    }}
                />
                <div className="relative z-10">
                    {children}
                </div>
            </section>
        </>
    )
}