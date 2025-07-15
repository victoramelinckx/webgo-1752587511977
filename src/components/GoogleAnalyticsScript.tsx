"use client";

import Script from "next/script";

export const GoogleAnalyticsScript = () => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    if (!gaId) {
        // En desarrollo o si no hay ID, no se renderiza nada.
        return null;
    }

    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
                }}
            />
        </>
    );
};