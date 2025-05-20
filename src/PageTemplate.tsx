import React from "react";
import type { PageMetaData } from "./pageMetaMap";

const PageTemplate: React.FC<PageMetaData> = ({
  title,
  description,
  keywords,
  ogImage,
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <title>Medical Director Services & Medspa Startup Consultants Nationwide | EliteUSMD</title>
        <meta
          name="description"
          content="EliteUSMD provides nationwide medical director services, compliance support, and business solutions for medspas, wellness clinics, and healthcare practices looking to launch, grow, or stay compliant."
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://eliteusmd.com/" />

        <meta 
          property="og:image" 
          content="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862e4a8459017cc831c4.png" 
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Medical Directors & Medspa Startup Consultants Nationwide | EliteUSMD"
        />
        <meta
          property="og:description"
          content="EliteUSMD provides nationwide medical director services, compliance support, and business solutions for medspas, wellness clinics, and healthcare practices looking to launch, grow, or stay compliant."
        />
        <meta property="og:url" content="https://www.eliteusmd.com/" />
        <meta property="og:site_name" content="EliteUSMD" />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862e4a8459017cc831c4.png"
        />
        <meta property="og:updated_time" content="2025-03-27T00:00:00+00:00" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="EliteUSMD | Medical Directors & Medspa Startup Consultants Nationwide"
        />
        <meta
          name="twitter:description"
          content="Consulting, compliance, and certified medical directors for your medspa startup. EliteUSMD supports your journey to success."
        />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862e4a8459017cc831c4.png"
        />
        <meta name="twitter:site" content="@eliteusmd" />
        <meta name="twitter:creator" content="@eliteusmd" />
        <meta name="twitter:label1" content="Written by" />
        <meta name="twitter:data1" content="EliteUSMD team" />
        <meta name="twitter:label2" content="Time to read" />
        <meta name="twitter:data2" content="1 minute" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.eliteusmd.com/#website",
                  "url": "https://www.eliteusmd.com",
                  "name": "EliteUSMD",
                  "description": "Nationwide medical director and compliance support for medspa businesses.",
                  "publisher": {
                    "@id": "https://www.eliteusmd.com/#organization"
                  },
                  "inLanguage": "en-US",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.eliteusmd.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.eliteusmd.com/#webpage",
                  "url": "https://www.eliteusmd.com",
                  "name": "Medical Directors & Medspa Startup Consultants Nationwide | EliteUSMD",
                  "datePublished": "2025-03-27T00:00:00+00:00",
                  "dateModified": "2025-03-27T00:00:00+00:00",
                  "isPartOf": {
                    "@id": "https://www.eliteusmd.com/#website"
                  },
                  "about": {
                    "@id": "https://www.eliteusmd.com/#organization"
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "@id": "https://www.eliteusmd.com/#mainimage",
                    "url": "https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862e4a8459017cc831c4.png",
                    "width": "1200",
                    "height": "630"
                  },
                  "inLanguage": "en-US",
                  "author": {
                    "@id": "https://www.eliteusmd.com/#person"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.eliteusmd.com/#organization",
                  "name": "EliteUSMD",
                  "url": "https://www.eliteusmd.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862e4a8459017cc831c4.png"
                  },
                  "sameAs": [
                    "https://www.instagram.com/eliteusmd",
                    "https://www.facebook.com/eliteusmd"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "1 (877) 665-0654",
                    "contactType": "Customer Service"
                  }
                }
              ]
            }
          `}
        </script>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BH9EFT718K"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BH9EFT718K');
            `,
          }}
        />

        {/* Favicons */}
        <link
          rel="icon"
          type="image/x-icon"
          href="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862e5336578330e5c232.x-icon"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862e4a8459017cc831c4.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862e5336570958e5c233.png"
        />

        {/* Apple Touch Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862ee4d4f59a31303da9.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862f22c233092b5d0b98.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862f22c233603e5d0b99.png"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        {ogImage && <meta property="og:image" content={ogImage} />}

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root"></div>
        <script src="https://website-widgets.pages.dev/dist/sienna.min.js" defer></script>
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="67c0f6cba81d1ca4bed77244"
        ></script>
      </body>
    </html>
  );
};

export default PageTemplate;
