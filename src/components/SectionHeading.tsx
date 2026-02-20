import clsx from "clsx";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    centered?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    className,
    centered = true,
}: SectionHeadingProps) {
    return (
        <div className={clsx("mb-8 md:mb-12", centered && "text-center", className)}>
            <h2 className="text-3xl font-bold text-maroon-900 md:text-4xl dark:text-maroon-100 font-tamil">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-2 text-lg text-foreground/70 md:text-xl font-tamil">
                    {subtitle}
                </p>
            )}
            <div
                className={clsx(
                    "mt-4 h-1 w-24 rounded-full bg-gold-400",
                    centered && "mx-auto"
                )}
            />
        </div>
    );
}
