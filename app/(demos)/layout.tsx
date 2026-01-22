import localFont from 'next/font/local';
import "../globals.css";

const satoshi = localFont({
    src: [
        {
            path: '../../public/fonts/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/Satoshi-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../../public/fonts/Satoshi-Medium.woff2',
            weight: '500',
            style: 'normal'
        }
    ],
    display: 'swap',
    variable: '--font-body'
});

const cascadiaCode = localFont({
    src: [
        {
            path: '../../public/fonts/CascadiaCode.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/CascadiaCode-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../../public/fonts/CascadiaCode-BoldItalic.woff2',
            weight: '700',
            style: 'italic'
        }
    ],
    display: 'swap',
    variable: '--font-mono'
});

export default function DemoLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${satoshi.variable} ${cascadiaCode.variable} font-sans bg-zinc-950 text-zinc-100 min-h-screen`}>
            {children}
        </div>
    );
}
